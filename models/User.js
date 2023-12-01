import mongoose from "mongoose";

const userSchema = mongoose.Schema(
	{
		name: {
			type: String,
			trim: true,
			required: true,
		},
		email: {
			type: String,
			trim: true,
			default: null,
		},
		phone: {
			type: String,
			trim: true,
			default: null,
		},
		password: {
			type: String,
			trim: true,
			required: true,
		},
		gender: {
			type: String,
			enum: ["Female", "Male", "undefined"],
			default: "undefined",
		},
		photo: {
			type: String,
			default: null,
		},
		accesstoken: {
			type: String,
			required: true,
		},
		status: {
			type: Boolean,
			default: true,
		},
		trash: {
			type: Boolean,
			default: false,
		},
	},
	{
		timestamps: true,
	}
);

export default mongoose.model("User", userSchema);
