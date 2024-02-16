import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// Get all users
export const createChat = createAsyncThunk("chat/createChat", async (data) => {
	try {
		const response = await axios.post(
			`http://localhost:5050/api/v1/chat`,
			data,
			{
				withCredentials: true,
			}
		);

		return response.data.users;
	} catch (error) {
		throw new Error(error.response.data.message);
	}
});
