import { createSlice } from "@reduxjs/toolkit";

// create auth slice
const chatSlice = createSlice({
	name: "chat",
	initialState: {
		chats: null,
		error: null,
		message: null,
	},
	reducers: {
		setMessageEmpty: (state) => {
			state.message = null;
			state.error = null;
		},
	},

	extraReducers: (builder) => {
		// builder.addCase(getAllUser.fulfilled, (state, action) => {
		// 	state.users = action.payload;
		// });
	},
});

// selectors
export const getAllChatData = (state) => state.chat;

// actions
export const { setMessageEmpty } = chatSlice.actions;

// export
export default chatSlice.reducer;
