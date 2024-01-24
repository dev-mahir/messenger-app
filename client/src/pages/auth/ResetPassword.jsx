import { Link, useNavigate } from "react-router-dom";
import "./Auth.scss";
import React, { useEffect } from "react";
import AuthHeader from "../../components/AuthHeader/AuthHeader";
import PageHeader from "../../components/PageHeader/PageHeader";
import useFormFields from "../../hooks/useFormFields";
import { createToast } from "../../utils/toast";
import { useDispatch, useSelector } from "react-redux";
import { getAuthData, setMessageEmpty } from "../../features/auth/authSlice";
import { resetPassword } from "../../features/auth/authApiSlice";
import Cookies from "js-cookie";

function ResetPassword() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { message, error, loader } = useSelector(getAuthData);

	const token = Cookies.get("verifyToken");

	const { input, resetForm, handleInputChange } = useFormFields({
		otp: "",
		password: "",
		cPassword: "",
	});

	// handle reset password
	const handleReset = (e) => {
		e.preventDefault();
		dispatch(
			resetPassword({ password: input.password, token, otp: input.otp })
		);
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
			<PageHeader title="Reset your password" />
			<div className="auth-container">
				<div className="auth-wrapper">
					<div className="auth-top">
						<AuthHeader
							title="Reset your password"
							desc="Lorem ipsum dolor sit nam doloremque laudantium."
						/>

						<div className="auth-form">
							<form onSubmit={handleReset}>
								<input
									type="password"
									value={input.otp}
									name="otp"
									onChange={handleInputChange}
									placeholder="Enter OTP code..."
								/>
								<input
									type="password"
									value={input.password}
									name="password"
									onChange={handleInputChange}
									placeholder="Enter your new password"
								/>
								<input
									type="password"
									value={input.cPassword}
									name="cPassword"
									onChange={handleInputChange}
									placeholder="Confirm password"
								/>

								<button
									className="bg-fb"
									type="submit"
									disabled={loader ? true : false}>
									{loader
										? "Reseting..."
										: "Reset your password"}
								</button>
							</form>
						</div>
					</div>
					<div className="auth-bottom">
						<Link to="/register">Log In Now</Link>
					</div>
				</div>
			</div>
		</>
	);
}

export default ResetPassword;
