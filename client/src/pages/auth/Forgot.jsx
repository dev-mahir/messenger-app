import { Link } from "react-router-dom";
import "./Auth.scss";
import React from "react";
import AuthHeader from "../../components/AuthHeader/AuthHeader";
import PageHeader from "../../components/PageHeader/PageHeader";

function Forgot({ title }) {
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
							<form action="">
								<input
									type="text"
									placeholder="Email or Phone number"
								/>
						
								<button className="bg-fb">Reset your password</button>
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


export default Forgot