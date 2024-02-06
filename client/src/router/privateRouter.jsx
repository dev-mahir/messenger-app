import ActivationAfterLogin from "../pages/auth/ActivationAfterLogin";
import Profile from "../pages/auth/Profile";
import Messenger from "../pages/messenger/Messenger";
import PrivateGard from "./PrivateGard";

// create Private router
const privateRouter = [
	{
		element: <PrivateGard />,
		children: [
			{
				path: "/",
				element: <Messenger />,
			},
			{
				path: "/activate-after-login",
				element: <ActivationAfterLogin />,
			},
			{
				path: "/profile-edit",
				element: <Profile />,
			},

		],
	},
];

// export router
export default privateRouter;
