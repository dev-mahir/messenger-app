import React, { useEffect } from "react";
import Topbar from "../../components/Topbar/Topbar";
import Activate from "../../components/Activate";
import useAuthUser from "../../hooks/useAuthUser";
import { useNavigate } from "react-router-dom";
import { getAuthData } from "../../features/auth/authSlice";
import { useSelector } from "react-redux";

function Messenger() {
	
	const { user } = useSelector(getAuthData);



	return (
		<>
			<Topbar />
			{user.accesstoken ? (
				<Activate />
			) : (
				<div>
					<h1>Main content</h1>
				</div>
			)}
		</>
	);
}

export default Messenger;
