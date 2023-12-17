import { RouterProvider } from "react-router-dom";
import "./App.scss";
import router from "./router/router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { getLoggedInUser } from "./features/auth/authApiSlice";
import { useEffect } from "react";

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		if (localStorage.getItem("user")) {
			dispatch(getLoggedInUser());
		}
	}, [dispatch]);
	return (
		<>
			<ToastContainer
				position="top-center"
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				draggable
				theme="light"
			/>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
