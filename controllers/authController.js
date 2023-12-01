import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { createOTP, isEmail, isMobile } from "../helpers/helpers.js";
import { sendSMS } from "../utils/sendSMS.js";
import { account_activation_email } from "../mails/account_activation_email.js";

/**
 * @DESC User Login
 * @ROUTE /api/v1/auth/login
 * @method POST
 * @access public
 */
export const login = asyncHandler(async (req, res) => {
	const { email, password } = req.body;

	// validation
	if (!email || !password)
		return res.status(404).json({ message: "All fields are required" });

	// find login user by email
	const loginUser = await User.findOne({ email }).populate("role");

	// user not found
	if (!loginUser) return res.status(404).json({ message: "User not found" });

	// password check
	const passwordCheck = await bcrypt.compare(password, loginUser.password);

	// password check
	if (!passwordCheck)
		return res.status(404).json({ message: "Wrong password" });

	// create access token
	const token = jwt.sign(
		{ email: loginUser.email },
		process.env.ACCESS_TOKEN_SECRET,
		{
			expiresIn: process.env.ACCESS_TOKEN_EXPIRE_IN,
		}
	);

	// create Refresh token
	const refreshToken = jwt.sign(
		{ email: loginUser.email },
		process.env.REFRESH_TOKEN_SECRET,
		{
			expiresIn: process.env.REFRESH_TOKEN_EXPIRE_IN,
		}
	);

	res.cookie("accessToken", token, {
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
});

/**
 * @DESC User Login
 * @ROUTE /api/v1/auth/login
 * @method POST
 * @access public
 */
export const logout = asyncHandler(async (req, res) => {
	res.clearCookie("accessToken");
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
	const accesstoken = createOTP();

	// password hash
	const hashPass = await bcrypt.hash(password, 10);

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
			accesstoken: accesstoken,
		});

		// send OTP code
		await sendSMS(
			auth,
			`Hello ${user.name}, Your account activation code is ${user.accesstoken}`
		);

		// create verification token
		const verify_token = jwt.sign(
			{ auth: auth, otp: accesstoken },
			process.env.ACCESS_TOKEN_SECRET,
			{
				expiresIn: "15m",
			}
		);

		// set verify token
		res.cookie("verify_token", verify_token, {
			httpOnly: true,
			secure: process.env.APP_ENV == "Development" ? false : true,
			sameSite: "strict",
			path: "/",
			maxAge: 15 * 60 * 1000,
		});

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
			accesstoken: accesstoken,
		});

		// send activation code 
		const me =  await account_activation_email(
			{ name: user.name, email: user.email },
			user.email
		);
console.log( me);
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
