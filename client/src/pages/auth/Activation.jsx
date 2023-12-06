import { Link, useNavigate, useParams } from "react-router-dom";
import "./Auth.scss";
import React, { useEffect } from "react";
import AuthHeader from "../../components/AuthHeader/AuthHeader";
import PageHeader from "../../components/PageHeader/PageHeader";
import Cookie from "js-cookie";
import useFormFields from "../../hooks/useFormFields";
import { useDispatch, useSelector } from "react-redux";
import {
	ativateAccountByOtp,
	ativateAccountByURL,
} from "../../features/auth/authApiSlice";
import { getAuthData, setMessageEmpty } from "../../features/auth/authSlice";
import { createToast } from "../../utils/toast";

function Activation({ title }) {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { message, error } = useSelector(getAuthData);

	// get token from url
	const { tokenURL } = useParams();

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
	}, [token, navigate, message, error]);

	// useEffect(() => {
	// 	if (!tokenURL) {
	// 		return navigate("/login");
	// 	}
	// }, [tokenURL, navigate]);

	// useEffect(() => {
	// 	if (tokenURL) {
	// 		dispatch(ativateAccountByURL(tokenURL));
	// 	}
	// }, [tokenURL, dispatch]);

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

								<button className="bg-fb">Activate now</button>
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
