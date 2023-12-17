import React from "react";
import Topbar from "../../components/Topbar/Topbar";
import Activate from "../../components/Activate";
import useAuthUser from "../../hooks/useAuthUser";

function Messenger() {
	const { user } = useAuthUser();

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
