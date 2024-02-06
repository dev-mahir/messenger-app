import multer from "multer";

// multer storage
const storage = multer.diskStorage({
	filename: (req, file, cb) => {
		cb(
			null,
			Date.now() +
				Math.round(Math.random() * 1000000) +
				"-" +
				file.fieldname
		);
	},
});

export const userProfilePhoto = multer({ storage }).single("profile-photo");

export const catgoryPhoto = multer({ storage }).single("catPhoto");
export const productPhoto = multer({ storage }).array("productPhoto");
