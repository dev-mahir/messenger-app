import React, { useEffect } from "react";
import "./Activate.scss";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useFormFields from "../hooks/useFormFields";
import useAuthUser from "../hooks/useAuthUser";
import AuthHeader from "./AuthHeader/AuthHeader";
import { createToast } from "../utils/toast";
import { getAuthData, setMessageEmpty } from "../features/auth/authSlice";
import { hideEmailMiddle, hideMobileMiddle } from "../helpers/helpers";
import { resendActivation } from "../features/auth/authApiSlice";

const Activate = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { message, error, user } = useSelector(getAuthData);

	const { input, resetForm, handleInputChange } = useFormFields({
		otp: "",
	});

	const handleUserActivate = (user) => {};

	const handleResendActivation = (e, auth) => {
		e.preventDefault();
		dispatch(resendActivation({ auth }));
	};

	useEffect(() => {
		if (message) {
			createToast(message, "success");
			dispatch(setMessageEmpty());
			resetForm();
			navigate("/login");
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
									placeholder="Email or Phone number"
								/>

								<button className="bg-fb">Activate now</button>
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
									Resend Activation Link to
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
