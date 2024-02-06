import React from "react";
import "./topbar.scss";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { CiLock, CiLogout } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import useDropdownPopupControl from "../../hooks/useDropdownPopupControl";
import useAuthUser from "../../hooks/useAuthUser";
import { logoutUser } from "../../features/auth/authApiSlice";
import { useDispatch } from "react-redux";
import Activate from "../Activate";
import { Avatar } from "@chakra-ui/avatar";

const Topbar = () => {
	const { user } = useAuthUser();
	const dispatch = useDispatch();

	const { isOpen, toggleMenu, dropDownRefWrapper } =
		useDropdownPopupControl();

	const handleUserLogout = (e) => {
		e.preventDefault();
		dispatch(logoutUser());
	};

	return (
		<>
			<div className="top-bar">
				<div className="top-bar-container">
					<div className="topbar-search">
						<Link to="/">
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
								alt=""
							/>
						</Link>
						<div className="search">
							<input type="text" placeholder="Search messenger" />
							<FiSearch />
						</div>
					</div>
					<div className="topbar-menu">
						<ul>
							<li>
								<Link to="#">
									<FiSearch />
								</Link>
							</li>
							<li>
								<Link to="#">
									<FiSearch />
								</Link>
							</li>
							<li>
								<Link to="#">
									<FiSearch />
								</Link>
							</li>
							<li>
								<Link to="#">
									<FiSearch />
								</Link>
							</li>
						</ul>
					</div>
					<div className="topbar-user" ref={dropDownRefWrapper}>
						<button onClick={toggleMenu}>
							{user?.photo ? (
								<img src={user?.photo} alt="" />
							) : (
								<Avatar
									style={{
										height: "40px",
										width: "40px",
										border: "1px solid #ccc",
										borderRadius: "50%",
										backgroundColor: "#ccc",
									}}
									src={user.photo}
									name={user.name}
								/>
							)}
						</button>
						{isOpen && (
							<div className="dropdown-menu">
								<ul>
									<li>
										<Link to="">
											<MdDarkMode />
											Dark Mode
										</Link>
									</li>
									<li>
										<Link to="">
											<CiLock />
											Password change
										</Link>
									</li>
									<li>
										<Link to="/profile-edit">
											<FaRegUser /> Edit profile
										</Link>
									</li>
									<li>
										<Link to="" onClick={handleUserLogout}>
											<CiLogout />
											Logout
										</Link>
									</li>
								</ul>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default Topbar;
