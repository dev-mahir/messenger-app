import express from "express";
import {
	login,
	logout,
	register,
	loggedInUser,
	makeHashPass,
	account_activate_by_otp,
	accountActivateByLink,
	resendAccountActivation,
	resetPassword,
	forgotPassword,
} from "../controllers/authController.js";
import tokenVerify from "../middlewares/verifyToken.js";

const router = express.Router();

// create route
router.route("/login").post(login);
router.route("/logout").post(logout);
router.route("/hash").post(makeHashPass);
router.route("/register").post(register);
router.route("/activation-by-otp/:token").post(account_activate_by_otp);
router.route("/activation-by-link/:token").post(accountActivateByLink);
router.route("/resend-activation/:auth").get(resendAccountActivation);

router.route("/forgot-password/").post(forgotPassword);
router.route("/reset-password/").post(resetPassword);

router.get("/me", tokenVerify, loggedInUser);

// export default router
export default router;
