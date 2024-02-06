import React, { useEffect } from "react";
import { BsThreeDots } from "react-icons/bs";
import { BiSolidEdit } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import avater from "../../assets/images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../features/user/userSlice";
import { getAllUser } from "../../features/user/userApiSlice";
import { Avatar, AvatarGroup } from "@chakra-ui/avatar";

const Users = () => {
	const { users, error, message } = useSelector((state) => state.user);
	const dispatch = useDispatch();



    


	useEffect(() => {
		dispatch(getAllUser());
	}, []);


	return (
		<div className="chat-users">
			<div className="chat-users-header">
				<div className="chat-users-header-top">
					<h2>Chats</h2>
					<div className="btns">
						<button>
							<BsThreeDots />
						</button>
						<button>
							<BiSolidEdit />
						</button>
					</div>
				</div>
				<div className="chat-users-header-search">
					<div className="search">
						<input type="text" />
						<button>
							<CiSearch />
						</button>
					</div>
				</div>
				<div className="chat-users-header-menu">
					<button className="active">Inbox</button>
					<button>Communities</button>
				</div>
			</div>

			

			<div className="chat-users-list">
				{users &&
					users.map((user, index) => (
						<div className="user-item active" key={index}>
							<Avatar src={user.photo} name={user.name} />
							<div className="user-details">
								<span className="user-name">{user.name}</span>
								<div>
									<span className="user-chat-info">
										<span className="chat-sort">
											tumi asle , ami jabo
										</span>
									</span>
									<span className="chat-time">1h</span>
								</div>
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default Users;
