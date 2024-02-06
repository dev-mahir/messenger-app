import { createSlice } from "@reduxjs/toolkit";
import {
	ativateAccountByOtp,
	ativateAccountByURL,
	createUser,
	forgotPassword,
	getLoggedInUser,
	loginUser,
	logoutUser,
	resendActivation,
	resetPassword,
	uploadUserPhoto,
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
			// ===========  Create user ===============
			.addCase(createUser.pending, (state) => {
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
			// ===========  Activate account by OTP ==========
			.addCase(ativateAccountByOtp.pending, (state) => {
				state.loader = true;
			})
			.addCase(ativateAccountByOtp.rejected, (state, action) => {
				state.loader = false;
				state.error = action.error.message;
			})
			.addCase(ativateAccountByOtp.fulfilled, (state, action) => {
				state.loader = false;
				state.message = action.payload.message;
				state.user = action.payload.user;
			})
			// ===========  Activate account by OTP ==========
			.addCase(ativateAccountByURL.pending, (state) => {
				state.loader = true;
			})
			.addCase(ativateAccountByURL.rejected, (state, action) => {
				state.loader = false;
				state.error = action.error.message;
			})
			.addCase(ativateAccountByURL.fulfilled, (state, action) => {
				state.loader = false;
				state.message = action.payload.message;
			})
			// =========== login ===========
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
			// ===========  logout ===========
			.addCase(logoutUser.rejected, (state, action) => {
				state.error = action.error.message;
			})
			.addCase(logoutUser.fulfilled, (state, action) => {
				state.message = action.payload.message;
				state.user = null;
				localStorage.removeItem("user");
			})
			// =========== logged in user =================
			.addCase(getLoggedInUser.rejected, (state, action) => {
				state.error = action.error.message;
				state.user = null;
			})
			.addCase(getLoggedInUser.fulfilled, (state, action) => {
				state.user = action.payload;
			})
			// =========== resend activation =================
			.addCase(resendActivation.rejected, (state, action) => {
				state.error = action.error.message;
				state.loader = false;
			})
			.addCase(resendActivation.pending, (state, action) => {
				state.loader = true;
			})
			.addCase(resendActivation.fulfilled, (state, action) => {
				state.message = action.payload.message;
				state.loader = false;
			})
			// =========== Reset password  =================
			.addCase(forgotPassword.rejected, (state, action) => {
				state.error = action.error.message;
				state.loader = false;
			})
			.addCase(forgotPassword.pending, (state, action) => {
				state.loader = true;
			})
			.addCase(forgotPassword.fulfilled, (state, action) => {
				state.message = action.payload.message;
				state.loader = false;
			})
			// =========== Change reset password  =================
			.addCase(resetPassword.rejected, (state, action) => {
				state.error = action.error.message;
				state.loader = false;
			})
			.addCase(resetPassword.pending, (state, action) => {
				state.loader = true;
			})
			.addCase(resetPassword.fulfilled, (state, action) => {
				state.message = action.payload.message;
				state.loader = false;
			})
			.addCase(uploadUserPhoto.pending, (state, action) => {
				state.loader = true;
			})
			.addCase(uploadUserPhoto.rejected, (state, action) => {
				state.loader = false;
				state.error = action.error.message;
			})
			.addCase(uploadUserPhoto.fulfilled, (state, action) => {
				state.loader = false;
				state.user = action.payload;
				state.message = action.message;
			});
	},
});

// selectors
export const getAuthData = (state) => state.auth;

// actions
export const { setMessageEmpty, setLogout } = authSlice.actions;

// export
export default authSlice.reducer;
