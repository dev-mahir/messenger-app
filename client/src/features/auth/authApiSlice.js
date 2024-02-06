import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// register user
export const createUser = createAsyncThunk("auth/createUser", async (data) => {
	try {
		const response = await axios.post(
			"http://localhost:5050/api/v1/auth/register",
			data,
			{
				withCredentials: true,
			}
		);

		return response.data;
	} catch (error) {
		throw new Error(error.response.data.message);
	}
});

//  user account activation by otp
export const ativateAccountByOtp = createAsyncThunk(
	"auth/ativateAccountByOtp",
	async (data) => {
		try {
			const response = await axios.post(
				`http://localhost:5050/api/v1/auth/activation-by-otp/${data.token}`,
				{ otp: data.otp },
				{
					withCredentials: true,
				}
			);

			return response.data;
		} catch (error) {
			throw new Error(error.response.data.message);
		}
	}
);

// user account activation by token URL
export const ativateAccountByURL = createAsyncThunk(
	"auth/ativateAccountByURL",
	async (data) => {
		try {
			const response = await axios.post(
				`http://localhost:5050/api/v1/auth/activation-by-link/${data}`,
				{
					withCredentials: true,
				}
			);

			return response.data;
		} catch (error) {
			throw new Error(error.response.data.message);
		}
	}
);

// Login user
export const loginUser = createAsyncThunk("auth/loginUser", async (data) => {
	try {
		const response = await axios.post(
			"http://localhost:5050/api/v1/auth/login",
			data,
			{
				withCredentials: true,
			}
		);

		return response.data;
	} catch (error) {
		throw new Error(error.response.data.message);
	}
});

// Login user
export const logoutUser = createAsyncThunk("auth/logoutUser", async () => {
	try {
		const response = await axios.post(
			"http://localhost:5050/api/v1/auth/logout",
			"",
			{
				withCredentials: true,
			}
		);

		return response.data;
	} catch (error) {
		throw new Error(error.response.data.message);
	}
});

// Login user
export const getLoggedInUser = createAsyncThunk(
	"auth/getLoggedInUser",
	async () => {
		try {
			const response = await axios.get(
				"http://localhost:5050/api/v1/auth/me",
				{
					withCredentials: true,
				}
			);

			return response.data;
		} catch (error) {
			throw new Error(error.response.data.message);
		}
	}
);

// Send Resend activation code
export const resendActivation = createAsyncThunk(
	"auth/resendActivation",
	async (data) => {
		try {
			const response = await axios.get(
				`http://localhost:5050/api/v1/auth/resend-activation/${data.auth}`,
				{
					withCredentials: true,
				}
			);
			return response.data;
		} catch (error) {
			throw new Error(error.response.data.message);
		}
	}
);

// Reset password
export const forgotPassword = createAsyncThunk(
	"auth/forgotPassword",
	async (data) => {
		try {
			const response = await axios.post(
				`http://localhost:5050/api/v1/auth/forgot-password`,
				data,
				{
					withCredentials: true,
				}
			);
			return response.data;
		} catch (error) {
			throw new Error(error.response.data.message);
		}
	}
);

// Reset password
export const resetPassword = createAsyncThunk(
	"auth/resetPassword",
	async (data) => {
		try {
			const response = await axios.post(
				`http://localhost:5050/api/v1/auth/reset-password`,
				data,
				{
					withCredentials: true,
				}
			);
			return response.data;
		} catch (error) {
			throw new Error(error.response.data.message);
		}
	}
);


// Upload user profile photo
export const uploadUserPhoto = createAsyncThunk(
	"auth/uploaderUserPhoto",
	async (data) => {
		
		try {
			const response = await axios.post(
				`http://localhost:5050/api/v1/auth/profile-photo-upload/${data.id}`,
				data.photo,
				{
					withCredentials: true,
				}
			);
			return response.data;
		} catch (error) {
			throw new Error(error.response.data.message);
		}
	}
);
