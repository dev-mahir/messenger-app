import { Link, useNavigate } from "react-router-dom";
import "./Auth.scss";
import React, { useEffect } from "react";
import AuthHeader from "../../components/AuthHeader/AuthHeader";
import PageHeader from "../../components/PageHeader/PageHeader";
import useFormFields from "../../hooks/useFormFields";
import { createToast } from "../../utils/toast";
import { useDispatch, useSelector } from "react-redux";
import { getAuthData, setMessageEmpty } from "../../features/auth/authSlice";
import { forgotPassword } from "../../features/auth/authApiSlice";

function Forgot() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { message, error } = useSelector(getAuthData);

	const { input, resetForm, handleInputChange } = useFormFields({
		auth: "",
	});

	// handle reset password
	const handleReset = (e) => {
		e.preventDefault();
		dispatch(forgotPassword({auth: input.auth}));
	};

	useEffect(() => {
		if (message) {
			createToast(message, "success");
			dispatch(setMessageEmpty());
			resetForm();
			navigate("/reset-password");
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
									type="text"
									value={input.auth}
									name="auth"
									onChange={handleInputChange}
									placeholder="Email or Phone number"
								/>

								<button className="bg-fb" type="submit">
									Reset your password
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

export default Forgot;
