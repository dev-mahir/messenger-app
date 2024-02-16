import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

function AuthHeader({ title, desc }) {
	return (
		<div className="auth-header">
			<Link to="/auth">
				<img src={logo} style={{height: "40px", width: "40px"}} alt="" />
			</Link>
			<h1> {title} </h1>
			<p> {desc} </p>
		</div>
	);
}

export default AuthHeader;
