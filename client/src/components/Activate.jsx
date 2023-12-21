import React, { useEffect } from "react";
import "./Activate.scss";
import { useNavigate, Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useFormFields from "../hooks/useFormFields";
import { createToast } from "../utils/toast";
import { getAuthData, setMessageEmpty } from "../features/auth/authSlice";
import { hideEmailMiddle, hideMobileMiddle } from "../helpers/helpers";
import {
	ativateAccountByOtp,
	resendActivation,
} from "../features/auth/authApiSlice";
import Cookies from "js-cookie";
import useAuthUser from "../hooks/useAuthUser";

const Activate = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { user } = useAuthUser();
	const { message, error } = useSelector(getAuthData);

	const token = Cookies.get("verifyToken");

	const { input, resetForm, handleInputChange } = useFormFields({
		otp: "",
	});

	// user activation
	const handleUserActivate = (e) => {
		e.preventDefault();
		dispatch(ativateAccountByOtp({ token: token, otp: input.otp }));
	};

	// resend activation
	const handleResendActivation = (e, auth) => {
		e.preventDefault();
		dispatch(resendActivation({ auth }));
	};

	useEffect(() => {
		if (message) {
			createToast(message, "success");
			dispatch(setMessageEmpty());
			resetForm();
		}
		if (error) {
			createToast(error);
			dispatch(setMessageEmpty());
		}
	}, [navigate, message, error]);

	return (
		<>
			<div className="auth-container">
				<div className="auth-wrapper">
					<div className="auth-top">
						<h2>{`Hello ${user.name}, activate your user account`}</h2>

						<div className="auth-form">
							<form onSubmit={handleUserActivate}>
								<input
									type="text"
									name="otp"
									value={input.otp}
									onChange={handleInputChange}
									placeholder="Enter OTP code..."
								/>

								<button type="submit" className="bg-fb">
									Activate now
								</button>
							</form>
							{user.phone && (
								<a
									href="#"
									onClick={(e) =>
										handleResendActivation(e, user.phone)
									}>
									Resend OTP to
									{hideMobileMiddle(user.phone)}
								</a>
							)}

							{user.email && (
								<a
									href="#"
									onClick={(e) =>
										handleResendActivation(e, user.email)
									}>
									Resend Activation Link to &nbsp;
									{hideEmailMiddle(user.email)}
								</a>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Activate;
