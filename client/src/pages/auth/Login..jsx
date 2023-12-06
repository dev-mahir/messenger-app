import { Link, useNavigate } from "react-router-dom";
import "./Auth.scss";
import React, { useEffect } from "react";
import AuthHeader from "../../components/AuthHeader/AuthHeader";
import PageHeader from "../../components/PageHeader/PageHeader";
import { useDispatch, useSelector } from "react-redux";
import { getAuthData, setMessageEmpty } from "../../features/auth/authSlice";
import useFormFields from "../../hooks/useFormFields";
import { loginUser } from "../../features/auth/authApiSlice";
import { createToast } from "../../utils/toast";

function Login({ title }) {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { message, error, user } = useSelector(getAuthData);

	const { input, resetForm, handleInputChange } = useFormFields({
		auth: "",
		password: "",
	});

	// user login
	const handleUserLogin = (e) => {
		e.preventDefault();
		dispatch(loginUser(input, resetForm));
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
		if (user) {
			navigate("/");
		}
	}, [navigate, message, error, dispatch, user]);

	return (
		<>
			<PageHeader title="Sign in here" />
			<div className="auth-container">
				<div className="auth-wrapper">
					<div className="auth-top">
						<AuthHeader
							title="Sign in here"
							desc="Lorem ipsum dolor sit nam doloremque laudantium."
						/>

						<div className="auth-form">
							<form onSubmit={handleUserLogin}>
								<input
									type="text"
									placeholder="Email or Phone number"
									name="auth"
									value={input.auth}
									onChange={handleInputChange}
								/>
								<input
									type="password"
									placeholder="Password"
									name="password"
									value={input.password}
									onChange={handleInputChange}
								/>
								<button className="bg-fb">Log In</button>
							</form>
						</div>

						<Link to="/forgot">Forgot your password</Link>
					</div>
					<div className="auth-bottom">
						<Link to="/register" className="bg-fb-green">
							Create new account
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}

export default Login;
