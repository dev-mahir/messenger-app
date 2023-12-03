import { Link, useNavigate } from "react-router-dom";
import "./Auth.scss";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AuthHeader from "../../components/AuthHeader/AuthHeader";
import PageHeader from "../../components/PageHeader/PageHeader";
import useFormFields from "../../hooks/useFormFields";
import { createUser } from "../../features/auth/authApiSlice";
import { getAuthData, setMessageEmpty } from "../../features/auth/authSlice";
import { createToast } from "../../utils/toast";

function Register({ title }) {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { message, error, loader } = useSelector(getAuthData);
	const { input, handleInputChange, resetForm, setInput } = useFormFields({
		name: "",
		auth: "",
		password: "",
	});

	const handleRegister = (e) => {
		e.preventDefault();
		dispatch(createUser(input));
	};

	useEffect(() => {
		if (message) {
			createToast(message, "success");
			dispatch(setMessageEmpty());
			resetForm();
			navigate('/activation')
		}
		if (error) {
			createToast(error);
			dispatch(setMessageEmpty());
		}
	}, [message, error, dispatch]);

	return (
		<>
			<PageHeader title="Create your account " />
			<div className="auth-container">
				<div className="auth-wrapper">
					<div className="auth-top">
						<AuthHeader
							title="Create your account"
							desc="Lorem ipsum dolor sit nam doloremque laudantium."
						/>

						<div className="auth-form">
							<form onSubmit={handleRegister}>
								<input
									type="text"
									placeholder="Your name"
									value={input.name}
									name="name"
									onChange={handleInputChange}
								/>
								<input
									type="text"
									placeholder="Email or Phone number"
									value={input.auth}
									name="auth"
									onChange={handleInputChange}
								/>

								<input
									type="password"
									placeholder="Password"
									value={input.password}
									name="password"
									onChange={handleInputChange}
								/>
								<button
									className="bg-fb"
									disabled={loader ? true : false}>
									{loader ? "Creating...." : "Create now"}
								</button>
							</form>
						</div>
					</div>
					<div className="auth-bottom">
						<Link to="/login">Log In Now</Link>
					</div>
				</div>
			</div>
		</>
	);
}

export default Register;
