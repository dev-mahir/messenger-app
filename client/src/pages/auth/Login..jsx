import { Link } from "react-router-dom";
import "./Auth.scss";
import React from "react";
import AuthHeader from "../../components/AuthHeader/AuthHeader";
import PageHeader from "../../components/PageHeader/PageHeader";

function Login({ title }) {
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
							<form action="">
								<input
									type="text"
									placeholder="Email or Phone number"
								/>
								<input type="password" placeholder="Password" />
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
