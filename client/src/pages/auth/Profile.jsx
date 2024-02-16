import React, { useEffect, useState } from "react";
import Topbar from "../../components/Topbar/Topbar";
import { Link } from "react-router-dom";
import useAuthUser from "../../hooks/useAuthUser";
import { Avatar } from "@chakra-ui/avatar";
import { useDispatch, useSelector } from "react-redux";
import { uploadUserPhoto } from "../../features/auth/authApiSlice";

function Profile() {
	const  {loader, user}  = useSelector(state => state.auth);

	const dispatch = useDispatch();


	// upload file
	const handleUploadFile = (e) => {
		const uploadedFile = e.target.files[0];
		const form_data = new FormData();
		form_data.append("profile-photo", uploadedFile);
		dispatch(uploadUserPhoto({ id: user._id, photo: form_data }));
	};




	return (
		<>
			<Topbar />
			<div className="auth-container">
				<div className="auth-wrapper">
					<div className="auth-top">
						<div className="profile-photo-wrap">
							{ loader && "Loading..."}
							<Avatar src={user?.photo} name={user?.name} />
							<label className="profile-photo-upload">
								Upload photo
								<input
									type="file"
									name="profile-photo"
									onChange={handleUploadFile}
								/>
							</label>
						</div>
					</div>
					<div className="auth-bottom">
						<Link to="/messenger" className="bg-fb-green">
							Go to Messenger
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}

export default Profile;
