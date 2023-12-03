import { Link, useNavigate } from "react-router-dom";
import "./Auth.scss";
import React, { useEffect } from "react";
import AuthHeader from "../../components/AuthHeader/AuthHeader";
import PageHeader from "../../components/PageHeader/PageHeader";
import Cookie from "js-cookie";
import useFormFields from "../../hooks/useFormFields";
import { useDispatch, useSelector } from "react-redux";
import { ativateAccountByOtp } from "../../features/auth/authApiSlice";

function Activation({ title }) {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	// const {} = useSelector();

	const token = Cookie.get("verify_token");

	const { input, resetForm, handleInputChange } = useFormFields({
		otp: "",
	});

	const handleUserActivate = (e) => {
		e.preventDefault();
		dispatch(ativateAccountByOtp({ token: token, otp: input.otp }));
	};

	useEffect(() => {
		if (!token) {
			return navigate("/login");
		}
	}, [token, navigate]);

	return (
		<>
			<PageHeader title="Activate your account" />
			<div className="auth-container">
				<div className="auth-wrapper">
					<div className="auth-top">
						<AuthHeader
							title="Activate your account"
							desc="Lorem ipsum dolor sit nam doloremque laudantium."
						/>

						<div className="auth-form">
							<form onSubmit={handleUserActivate}>
								<input
									type="text"
									name="otp"
									value={input.otp}
									onChange={handleInputChange}
									placeholder="Email or Phone number"
								/>

								<button className="bg-fb">
									Reset your password
								</button>
							</form>
							<a href="#">Resend OTP</a>
							<a href="#">
								Resend Activation Link to md****@gmail.com
							</a>
						</div>
					</div>
					<div className="auth-bottom">
						<Link to="/register">Logout</Link>
					</div>
				</div>
			</div>
		</>
	);
}

export default Activation;
