import { createSlice } from "@reduxjs/toolkit";
import {
	createUser,
	getLoggedInUser,
	loginUser,
	logoutUser,
} from "./authApiSlice";

// create auth slice
const authSlice = createSlice({
	name: "auth",
	initialState: {
		user: localStorage.getItem("user")
			? JSON.parse(localStorage.getItem("user"))
			: null,
		message: null,
		error: null,
		loader: false,
	},
	reducers: {
		setMessageEmpty: (state) => {
			state.message = null;
			state.error = null;
			state.loader = null;
		},
		setLogout: (state) => {
			state.message = null;
			state.error = null;
			state.user = null;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(createUser.pending, (state, action) => {
				state.loader = true;
			})
			.addCase(createUser.rejected, (state, action) => {
				state.loader = false;
				state.error = action.error.message;
			})
			.addCase(createUser.fulfilled, (state, action) => {
				state.loader = false;
				state.message = action.payload.message;
			})
			.addCase(loginUser.rejected, (state, action) => {
				state.error = action.error.message;
			})
			.addCase(loginUser.fulfilled, (state, action) => {
				state.message = action.payload.message;
				state.user = action.payload.user;
				localStorage.setItem(
					"user",
					JSON.stringify(action.payload.user)
				);
			})
			.addCase(logoutUser.rejected, (state, action) => {
				state.error = action.error.message;
			})
			.addCase(logoutUser.fulfilled, (state, action) => {
				state.message = action.payload.message;
				state.user = null;
				localStorage.removeItem("user");
			})
			.addCase(getLoggedInUser.rejected, (state, action) => {
				state.error = action.error.message;
				state.user = null;
			})
			.addCase(getLoggedInUser.fulfilled, (state, action) => {
				state.user = action.payload;
			});
	},
});

// selectors
export const getAuthData = (state) => state.auth;
// actions
export const { setMessageEmpty, setLogout } = authSlice.actions;

// export
export default authSlice.reducer;
