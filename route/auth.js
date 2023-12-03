import express from "express";
import {
	login,
	logout,
	register,
	loggedInUser,
	makeHashPass,
	account_activate_by_otp,
} from "../controllers/authController.js";
import tokenVerify from "../middlewares/verifyToken.js";

const router = express.Router();

// create route
router.route("/login").post(login);
router.route("/logout").post(logout);
router.route("/hash").post(makeHashPass);
router.route("/register").post(register);
router.route("/activation-by-otp/:token").post(account_activate_by_otp);

router.get("/me", tokenVerify, loggedInUser);

// export default router
export default router;
