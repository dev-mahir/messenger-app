import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createChat } from "../../features/chat/chatApiSlice";
import { FaVideo } from "react-icons/fa";
import EmojiPicker from "emoji-picker-react";
import useDropdownPopupControl from "../../hooks/useDropdownPopupControl";

const ChatForm = ({ activeChat }) => {
	const dispatch = useDispatch();
	const { isOpen, toggleMenu } = useDropdownPopupControl();

	const [chat, setChat] = useState("");

	const handleMessageSend = (e) => {
		if (e.key === "Enter") {
			dispatch(
				createChat({
					chat: chat,
					receiverId: activeChat._id,
				})
			);
			setChat("");
		}
	};

	return (
		<>
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
					<input
						type="text"
						name="chat"
						value={chat}
						onChange={(e) => setChat(e.target.value)}
						onKeyDown={handleMessageSend}
					/>
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
		</>
	);
};

export default ChatForm;
