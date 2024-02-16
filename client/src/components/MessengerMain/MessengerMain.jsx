import React, { useState } from "react";
import "./MessengerMain.scss";

import avater from "../../assets/images/logo.png";
import { FaUser, FaVideo } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { MdInfo } from "react-icons/md";
import Collapsible from "react-collapsible";
import useDropdownPopupControl from "../../hooks/useDropdownPopupControl";
import Users from "../Users/Users";
import { Avatar } from "@chakra-ui/avatar";
import {  useSelector } from "react-redux";
import { getAuthData } from "../../features/auth/authSlice";
import ChatForm from "./ChatForm";

const MessengerMain = () => {
	const { user } = useSelector(getAuthData);
	const [activeChat, setActiveChat] = useState(null);




	

	return (
		<>
			<div className="chat-container">
				<Users setActiveChat={setActiveChat} activeChat={activeChat} />

				<div className="chat-body">
					{activeChat ? (
						<>
							<div className="chat-body-active-user">
								<div className="chat-active-user-details">
									<Avatar
										src={user.photo}
										name={activeChat.name}
									/>

									<span className="chat-user-name">
										{activeChat.name}
									</span>
								</div>
								<div className="chat-active-user-menu">
									<button>
										<IoIosCall />
									</button>
									<button>
										<FaVideo />
									</button>
									<button>
										<MdInfo />
									</button>
								</div>
							</div>

							<div className="chat-body-msg">
								
								<div className="chat-msg-profile">
									<img src={activeChat.photo} alt="" />
									<span className="chat-user-name">
										{activeChat?.name}
									</span>
								</div>
								<div className="chat-msg-list">
									<div className="my-msg">
										<div className="msg-txt">
											<p>
												Hello, how are you? Lorem ipsum
												dolor sit amet consectetur
												adipisicing elit. Voluptatum
												nostrum totam atque quia
												accusantium doloribus,
												temporibus dolorem deserunt
												architecto est.
											</p>
										</div>
										<div className="msg-photo">
											<img src={avater} alt="" />
										</div>
									</div>
									<div className="msg-time">
										<span>10:54 PM</span>
									</div>

									<div className="friend-msg">
										<img src={avater} alt="" />
										<div className="friend-msg-details">
											<div className="msg-txt">
												<p>
													Hello, how are you? Lorem
													ipsum dolor sit, amet
													consectetur adipisicing
													elit. Laborum, illum? Lorem
													ipsum dolor sit amet
													consectetur adipisicing
													elit. Incidunt, numquam.
												</p>
											</div>
										</div>
										<div className="msg-photo"></div>
									</div>

									<div className="my-msg">
										<div className="msg-txt">
											<p>
												Hello, how are you? Lorem ipsum
												dolor sit amet consectetur
												adipisicing elit. Voluptatum
												nostrum totam atque quia
												accusantium doloribus,
												temporibus dolorem deserunt
												architecto est.
											</p>
										</div>
										<div className="msg-photo">
											<img src={avater} alt="" />
										</div>
									</div>
									<div className="msg-time">
										<span>10:54 PM</span>
									</div>
									<div className="friend-msg">
										<img src={avater} alt="" />
										<div className="friend-msg-details">
											<div className="msg-txt">
												<p>
													Hello, how are you? Lorem
													ipsum dolor sit, amet
													consectetur adipisicing
													elit. Laborum, illum? Lorem
													ipsum dolor sit amet
													consectetur adipisicing
													elit. Incidunt, numquam.
												</p>
											</div>
										</div>
										<div className="msg-photo"></div>
									</div>
									<div className="my-msg">
										<div className="msg-txt">
											<p>
												Hello, how are you? Lorem ipsum
												dolor sit amet consectetur
												adipisicing elit. Voluptatum
												nostrum totam atque quia
												accusantium doloribus,
												temporibus dolorem deserunt
												architecto est.
											</p>
										</div>
										<div className="msg-photo">
											<img src={avater} alt="" />
										</div>
									</div>
									<div className="msg-time">
										<span>10:54 PM</span>
									</div>
									
								</div>
							</div>

							<ChatForm activeChat={activeChat} />
						</>
					) : (
						"No chat selected"
					)}
				</div>

				<div className="chat-profile">
					<div className="profile-info">
						<Avatar
							src={activeChat?.photo}
							name={activeChat?.name}
						/>

						<span className="chat-user-name">
							{activeChat?.name}
						</span>
						<div>
							<ul>
								<li>
									<button>
										<FaUser />
									</button>
									<span>profile</span>
								</li>
								<li>
									<button>
										<FaUser />
									</button>
									<span>Mute</span>
								</li>
								<li>
									<button>
										<FaUser />
									</button>
									<span>Search</span>
								</li>
							</ul>
						</div>
					</div>
					<div className="profile-options">
						<Collapsible trigger="Chat info">
							<p>
								This is the collapsible content. It can be any
								element or React component you like.
							</p>
							<p>
								It can even be another Collapsible component.
								Check out the next section!
							</p>
						</Collapsible>
						<Collapsible trigger="Customize chat">
							<p>
								This is the collapsible content. It can be any
								element or React component you like.
							</p>
							<p>
								It can even be another Collapsible component.
								Check out the next section!
							</p>
						</Collapsible>
						<Collapsible trigger="Media files and links">
							<p>
								This is the collapsible content. It can be any
								element or React component you like.
							</p>
							<p>
								It can even be another Collapsible component.
								Check out the next section!
							</p>
						</Collapsible>
						<Collapsible trigger="Privacy and Support">
							<p>
								This is the collapsible content. It can be any
								element or React component you like.
							</p>
							<p>
								It can even be another Collapsible component.
								Check out the next section!
							</p>
						</Collapsible>
					</div>
				</div>
			</div>
		</>
	);
};

export default MessengerMain;
