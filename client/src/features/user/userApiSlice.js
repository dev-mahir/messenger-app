import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";





// Get all users
export const getAllUser = createAsyncThunk("user/getAllUser", async (data) => {
  try {
    const response = await axios.get(`http://localhost:5050/api/v1/user`, {
      withCredentials: true,
    });

    return response.data.users;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});



