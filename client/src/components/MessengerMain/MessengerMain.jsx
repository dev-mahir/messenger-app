import React from "react";
import "./MessengerMain.scss";
import { BsThreeDots } from "react-icons/bs";
import { BiSolidEdit } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";

import avater from "../../assets/images/logo.png";
import { FaVideo } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { MdInfo } from "react-icons/md";

const MessengerMain = () => {
	return (
		<>
			<div className="chat-container">
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
						<div className="user-item active">
							<img src={avater} alt="" />
							<div className="user-details">
								<span className="user-name">Md Mahir</span>
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

						<div className="user-item">
							<img src={avater} alt="" />
							<div className="user-details">
								<span className="user-name">Md Mahir</span>
								<div>
									<span className="user-chat-info">
										<span className="chat-sort">
											tumi asle , ami jabo
										</span>
									</span>
									<span className="chat-time">10:05 am</span>
								</div>
							</div>
						</div>
						<div className="user-item">
							<img src={avater} alt="" />
							<div className="user-details">
								<span className="user-name">Md Mahir</span>
								<div>
									<span className="user-chat-info">
										<span className="chat-sort">
											tumi asle , ami jabo
										</span>
									</span>
									<span className="chat-time">10:05 am</span>
								</div>
							</div>
						</div>
						<div className="user-item">
							<img src={avater} alt="" />
							<div className="user-details">
								<span className="user-name">Md Mahir</span>
								<div>
									<span className="user-chat-info">
										<span className="chat-sort">
											tumi asle , ami jabo
										</span>
									</span>
									<span className="chat-time">10:05 am</span>
								</div>
							</div>
						</div>
						<div className="user-item">
							<img src={avater} alt="" />
							<div className="user-details">
								<span className="user-name">Md Mahir</span>
								<div>
									<span className="user-chat-info">
										<span className="chat-sort">
											tumi asle , ami jabo
										</span>
									</span>
									<span className="chat-time">10:05 am</span>
								</div>
							</div>
						</div>
						<div className="user-item">
							<img src={avater} alt="" />
							<div className="user-details">
								<span className="user-name">Md Mahir</span>
								<div>
									<span className="user-chat-info">
										<span className="chat-sort">
											tumi asle , ami jabo
										</span>
									</span>
									<span className="chat-time">10:05 am</span>
								</div>
							</div>
						</div>
						<div className="user-item">
							<img src={avater} alt="" />
							<div className="user-details">
								<span className="user-name">Md Mahir</span>
								<div>
									<span className="user-chat-info">
										<span className="chat-sort">
											tumi asle , ami jabo
										</span>
									</span>
									<span className="chat-time">10:05 am</span>
								</div>
							</div>
						</div>
						<div className="user-item">
							<img src={avater} alt="" />
							<div className="user-details">
								<span className="user-name">Md Mahir</span>
								<div>
									<span className="user-chat-info">
										<span className="chat-sort">
											tumi asle , ami jabo
										</span>
									</span>
									<span className="chat-time">10:05 am</span>
								</div>
							</div>
						</div>
						<div className="user-item">
							<img src={avater} alt="" />
							<div className="user-details">
								<span className="user-name">Md Mahir</span>
								<div>
									<span className="user-chat-info">
										<span className="chat-sort">
											tumi asle , ami jabo
										</span>
									</span>
									<span className="chat-time">10:05 am</span>
								</div>
							</div>
						</div>
						<div className="user-item">
							<img src={avater} alt="" />
							<div className="user-details">
								<span className="user-name">Md Mahir</span>
								<div>
									<span className="user-chat-info">
										<span className="chat-sort">
											tumi asle , ami jabo
										</span>
									</span>
									<span className="chat-time">10:05 am</span>
								</div>
							</div>
						</div>
						<div className="user-item">
							<img src={avater} alt="" />
							<div className="user-details">
								<span className="user-name">Md Mahir</span>
								<div>
									<span className="user-chat-info">
										<span className="chat-sort">
											tumi asle , ami jabo
										</span>
									</span>
									<span className="chat-time">10:05 am</span>
								</div>
							</div>
						</div>
						<div className="user-item">
							<img src={avater} alt="" />
							<div className="user-details">
								<span className="user-name">Md Mahir</span>
								<div>
									<span className="user-chat-info">
										<span className="chat-sort">
											tumi asle , ami jabo
										</span>
									</span>
									<span className="chat-time">10:05 am</span>
								</div>
							</div>
						</div>
						<div className="user-item">
							<img src={avater} alt="" />
							<div className="user-details">
								<span className="user-name">Md Mahir</span>
								<div>
									<span className="user-chat-info">
										<span className="chat-sort">
											tumi asle , ami jabo
										</span>
									</span>
									<span className="chat-time">10:05 am</span>
								</div>
							</div>
						</div>
						<div className="user-item">
							<img src={avater} alt="" />
							<div className="user-details">
								<span className="user-name">Md Mahir</span>
								<div>
									<span className="user-chat-info">
										<span className="chat-sort">
											tumi asle , ami jabo
										</span>
									</span>
									<span className="chat-time">10:05 am</span>
								</div>
							</div>
						</div>
						<div className="user-item">
							<img src={avater} alt="" />
							<div className="user-details">
								<span className="user-name">Md Mahir</span>
								<div>
									<span className="user-chat-info">
										<span className="chat-sort">
											tumi asle , ami jabo
										</span>
									</span>
									<span className="chat-time">10:05 am</span>
								</div>
							</div>
						</div>
						<div className="user-item">
							<img src={avater} alt="" />
							<div className="user-details">
								<span className="user-name">Md Mahir</span>
								<div>
									<span className="user-chat-info">
										<span className="chat-sort">
											tumi asle , ami jabo
										</span>
									</span>
									<span className="chat-time">10:05 am</span>
								</div>
							</div>
						</div>
					</div>
				</div>

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
								<IoIosCall />
							</button>
							<button>
								<IoIosCall />
							</button>
							<button>
								<IoIosCall />
							</button>
							<button>
								<IoIosCall />
							</button>
						</div>
						<div className="chat-form-input"></div>
					</div>
				</div>

				<div className="chat-profile">profile</div>
			</div>
		</>
	);
};

export default MessengerMain;
