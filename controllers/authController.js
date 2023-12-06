import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import {
	createOTP,
	create_jwt_token,
	dotsToHyphens,
	hyphensToDots,
	isEmail,
	isMobile,
} from "../helpers/helpers.js";
import { sendSMS } from "../utils/sendSMS.js";
import { account_activation_email } from "../mails/account_activation_email.js";

/**
 * @DESC User Login
 * @ROUTE /api/v1/auth/login
 * @method POST
 * @access public
 */
export const login = asyncHandler(async (req, res) => {
	const { auth, password } = req.body;

	// validation
	if (!auth || !password)
		return res.status(404).json({ message: "All fields are required" });

	//find login user
	let loginUser = null;

	if (isMobile(auth)) {
		loginUser = await User.findOne({ phone: auth });
	} else if (isEmail(auth)) {
		loginUser = await User.findOne({ email: auth });
	} else {
		return res.status(404).json({
			message: "Login user must have a mobile or email account",
		});
	}
	if (!loginUser) {
		return res.status(404).json({
			message: "Invalid credentials",
		});
	} else {
		// password check
		const passwordCheck = await bcrypt.compare(
			password,
			loginUser.password
		);

		// password check
		if (!passwordCheck)
			return res.status(404).json({ message: "Wrong password" });

		// create access token
		const token = jwt.sign(
			{ auth: loginUser.auth },
			process.env.ACCESS_TOKEN_SECRET,
			{
				expiresIn: process.env.ACCESS_TOKEN_EXPIRE_IN,
			}
		);

		res.cookie("access_token", token, {
			httpOnly: true,
			secure: process.env.APP_ENV == "Development" ? false : true,
			sameSite: "strict",
			path: "/",
			maxAge: 7 * 24 * 60 * 60 * 1000,
		});

		res.status(200).json({
			token,
			user: loginUser,
			message: "User Login Successful",
		});
	}
});

/**
 * @DESC User Login
 * @ROUTE /api/v1/auth/login
 * @method POST
 * @access public
 */
export const logout = asyncHandler(async (req, res) => {
	res.clearCookie("access_token");
	res.status(200).json({ message: "Logout successful" });
});

/**
 * @DESC Create new User
 * @ROUTE /api/v1/user
 * @method POST
 * @access public
 */
export const register = asyncHandler(async (req, res) => {
	const { name, auth, password } = req.body;

	if (!name || !auth || !password) {
		return res.status(400).json({ message: "All fields are required" });
	}

	// create access token for account activation
	const access_token = createOTP();

	// password hash
	const hashPass = await bcrypt.hash(password, 10);

	// create verification token
	const verify_token = jwt.sign(
		{ auth: auth },
		process.env.ACCESS_TOKEN_SECRET,
		{
			expiresIn: "15m",
		}
	);

	if (isMobile(auth)) {
		// check user phone
		const userPhoneCheck = await User.findOne({ phone: auth });

		if (userPhoneCheck) {
			return res.status(400).json({ message: "Phone already exists" });
		}
		// create new user
		const user = await User.create({
			name,
			phone: auth,
			password: hashPass,
			accesstoken: access_token,
		});

		// send OTP code
		await sendSMS(
			auth,
			`Hello ${user.name}, Your account activation code is ${user.access_token}`
		);

		// set verify token
		res.cookie("verify_token", verify_token);

		res.status(200).json({
			user,
			message: "User Created successful",
		});
	} else if (isEmail(auth)) {
		// check user email
		const userEmailCheck = await User.findOne({ email: auth });

		if (userEmailCheck) {
			return res.status(400).json({ message: "Email already exists" });
		}

		// create new user
		const user = await User.create({
			name,
			email: auth,
			password: hashPass,
			accesstoken: access_token,
		});

		// create verify_token
		const verify_token = create_jwt_token(
			{ email: auth, _id: user._id, accesstoken: access_token },
			process.env.ACCESS_TOKEN_SECRET,
			"15m"
		);

		const activation_link = `http://localhost:3000/activation/${dotsToHyphens(
			verify_token
		)}`;

		// send activation code
		await account_activation_email(
			{ name: user.name, otp: access_token, link: activation_link },
			user.email
		);
		// set verify token
		res.cookie("verify_token", verify_token);

		res.status(200).json({
			user,
			message: "User Created successful",
		});
	} else {
		return res
			.status(400)
			.json({ message: "You must use Phone number or Email" });
	}
});

/**
 * @DESC Create new User
 * @ROUTE /api/v1/user
 * @method POST
 * @access public
 */
export const loggedInUser = asyncHandler(async (req, res) => {
	res.status(200).json(req.me);
});

/**
 * @DESC Create new User
 * @ROUTE /api/v1/user
 * @method POST
 * @access public
 */
export const makeHashPass = asyncHandler(async (req, res) => {
	const { password } = req.body;
	// password hash
	const hashPass = await bcrypt.hash(password, 10);
	res.status(200).json({ hashPass });
});

/**
 * @DESC Account activate by OTP
 * @ROUTE /api/v1/activation/:token
 * @method POST
 * @access private
 */

export const account_activate_by_otp = asyncHandler(async (req, res) => {
	try {
		const { token } = req.params;
		const { otp } = req.body;

		if (!token) return res.status(400).json({ message: "Token not found" });

		if (!otp) return res.status(400).json({ message: "OTP not found" });

		// verify token
		const token_check = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

		if (!token_check) {
			return res
				.status(400)
				.json({ message: "Invalid activation request" });
		}

		// activate account now
		let activateUser = null;

		if (isMobile(token_check.phone)) {
			activateUser = await User.findOne({ phone: token_check.phone });
		} else if (isEmail(token_check.email)) {
			activateUser = await User.findOne({ email: token_check.email });
		} else {
			return res.status(400).json({ message: "Auth is undefined" });
		}

		console.log(activateUser?.accesstoken);
		if (otp != activateUser?.accesstoken) {
			return res.status(400).json({ message: "Incorrect OTP" });
		}

		// set access token null
		activateUser.accesstoken = null;
		await activateUser.save();

		// clear verify token
		res.clearCookie("verify_token");

		return res.status(200).json({ message: "User activation successful" });
	} catch (error) {
		console.error(error);
		return res.status(500).json({ message: "Internal Server Error" });
	}
});

/**
 * @DESC Account activate by link
 * @ROUTE /api/v1/activation-by-link/:token
 * @method POST
 * @access private
 */
export const accountActivateByLink = asyncHandler(async (req, res) => {
	const { token } = req.params;

	if (!token) {
		return res.status(400).json({ message: "Token not found" });
	}

	const verifyToken = hyphensToDots(token);

	// verify token
	const tokenCheck = jwt.verify(verifyToken, process.env.ACCESS_TOKEN_SECRET);

	if (!tokenCheck) {
		return res.status(400).json({ message: "Invalid Activation request" });
	}

	// activate account now
	let activateUser = null;

	if (isEmail(tokenCheck.auth)) {
		activateUser = await User.findOne({ email: tokenCheck.auth });

		if (!activateUser) {
			return res.status(400).json({ message: "Activate user not found" });
		}
	} else {
		return res.status(400).json({ message: "Auth is undefined" });
	}

	// set access token null
	activateUser.accessToken = null;
	activateUser.save();

	// crear verify token
	res.clearCookie("verifyToken");

	return res.status(200).json({ message: "User activation successful" });
});
