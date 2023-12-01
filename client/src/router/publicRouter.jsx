import Forgot from "../pages/auth/Forgot";
import Home from "../pages/auth/Home";
import Login from "../pages/auth/Login.";
import Register from "../pages/auth/Register";
import Reset from "../pages/auth/Reset";

// create public router
const publicRouter = [
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/register",
		element: <Register />,
	},
	{
		path: "/reset",
		element: <Reset />,
	},
	{
		path: "/forgot",
		element: <Forgot />,
	},
];

// export router
export default publicRouter;
