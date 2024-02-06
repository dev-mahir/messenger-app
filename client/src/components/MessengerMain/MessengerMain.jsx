import React from "react";
import "./MessengerMain.scss";


import avater from "../../assets/images/logo.png";
import { FaUser, FaVideo } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { MdInfo } from "react-icons/md";
import Collapsible from "react-collapsible";
import EmojiPicker from "emoji-picker-react";
import useDropdownPopupControl from "../../hooks/useDropdownPopupControl";
import DownArrow from "../../svgs/DownArrow";
import Users from "../Users/Users";

const MessengerMain = () => {
	const { isOpen, toggleMenu } = useDropdownPopupControl();

	return (
		<>
			<div className="chat-container">
			
				<Users/>

				<div className="chat-body">
					<div className="chat-body-active-user">
						<div className="chat-active-user-details">
							<img src={avater} alt="" />
							<span className="chat-user-name">Md Mahir</span>
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
							<img src={avater} alt="" />
							<span className="chat-user-name">Md Mahir</span>
						</div>
						<div className="chat-msg-list">
							<div className="my-msg">
								<div className="msg-txt">
									<p>
										Hello, how are you? Lorem ipsum dolor
										sit amet consectetur adipisicing elit.
										Voluptatum nostrum totam atque quia
										accusantium doloribus, temporibus
										dolorem deserunt architecto est.
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
											Hello, how are you? Lorem ipsum
											dolor sit, amet consectetur
											adipisicing elit. Laborum, illum?
											Lorem ipsum dolor sit amet
											consectetur adipisicing elit.
											Incidunt, numquam.
										</p>
									</div>
								</div>
								<div className="msg-photo"></div>
							</div>
							<div className="my-msg">
								<div className="msg-txt">
									<p>
										Hello, how are you? Lorem ipsum dolor
										sit amet consectetur adipisicing elit.
										Voluptatum nostrum totam atque quia
										accusantium doloribus, temporibus
										dolorem deserunt architecto est.
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
											Hello, how are you? Lorem ipsum
											dolor sit, amet consectetur
											adipisicing elit. Laborum, illum?
											Lorem ipsum dolor sit amet
											consectetur adipisicing elit.
											Incidunt, numquam.
										</p>
									</div>
								</div>
								<div className="msg-photo"></div>
							</div>
							<div className="my-msg">
								<div className="msg-txt">
									<p>
										Hello, how are you? Lorem ipsum dolor
										sit amet consectetur adipisicing elit.
										Voluptatum nostrum totam atque quia
										accusantium doloribus, temporibus
										dolorem deserunt architecto est.
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
											Hello, how are you? Lorem ipsum
											dolor sit, amet consectetur
											adipisicing elit. Laborum, illum?
											Lorem ipsum dolor sit amet
											consectetur adipisicing elit.
											Incidunt, numquam.
										</p>
									</div>
								</div>
								<div className="msg-photo"></div>
							</div>
							<div className="my-msg">
								<div className="msg-txt">
									<p>
										Hello, how are you? Lorem ipsum dolor
										sit amet consectetur adipisicing elit.
										Voluptatum nostrum totam atque quia
										accusantium doloribus, temporibus
										dolorem deserunt architecto est.
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
											Hello, how are you? Lorem ipsum
											dolor sit, amet consectetur
											adipisicing elit. Laborum, illum?
											Lorem ipsum dolor sit amet
											consectetur adipisicing elit.
											Incidunt, numquam.
										</p>
									</div>
								</div>
								<div className="msg-photo"></div>
							</div>
						</div>
					</div>

					<div className="chat-body-form">
						<div className="chat-form-icons">
							<button>
								<FaVideo />
							</button>
							<button>
								<FaVideo />
							</button>
							<button>
								<FaVideo />
							</button>
							<button>
								<FaVideo />
							</button>
						</div>
						<div className="chat-form-input">
							<input type="text" />
							{isOpen && (
								<div className="chat-emoji-picker">
									<EmojiPicker />
								</div>
							)}

							<div
								className="chat-emoji-btn"
								onClick={() => toggleMenu()}>
								😜
							</div>
						</div>
						<div className="chat-emoji">👍</div>
					</div>
				</div>

				<div className="chat-profile">
					<div className="profile-info">
						<img width={40} src={avater} alt="" />
						<span className="chat-user-name">Md Mahir</span>
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
						
						<Collapsible
							trigger="Chat info">
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
