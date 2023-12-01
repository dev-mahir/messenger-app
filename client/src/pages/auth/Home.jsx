import { Link } from "react-router-dom";
import "./Auth.scss";
import React from "react";
import AuthHeader from "../../components/AuthHeader/AuthHeader";
import PageHeader from "../../components/PageHeader/PageHeader";

function Home({ title }) {
	return (
		<>
			<PageHeader title="Welcome to Messenger" />
			<div className="auth-container">
				<div className="auth-wrapper">
					<div className="auth-top">
						<AuthHeader
							title="Welcome to messenger"
							desc="Lorem ipsum dolor sit nam doloremque laudantium."
						/>
					</div>
					<div className="auth-bottom">
						<Link to="/login" className="bg-fb">
							Login with Facebook
						</Link>
						<Link to="/login">Login with Phone or Email</Link>
					</div>
				</div>
			</div>
		</>
	);
}

export default Home;
