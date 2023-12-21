import Activation from "../pages/auth/Activation";
import Forgot from "../pages/auth/Forgot";
import Login from "../pages/auth/Login.";
import Register from "../pages/auth/Register";
import ResetPassword from "../pages/auth/ResetPassword";
import PublicGard from "./PublicGard";

// create public router
const publicRouter = [
	{
		element: <PublicGard />,
		children: [
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/register",
				element: <Register />,
			},
			{
				path: "/reset-password",
				element: <ResetPassword />,
			},
			{
				path: "/forgot",
				element: <Forgot />,
			},
			{
				path: "/activation",
				element: <Activation />,
			},
			{
				path: "/activation/:tokenURL",
				element: <Activation />,
			},
		],
	},
];

// export router
export default publicRouter;
