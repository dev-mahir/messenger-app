import cloudinary from "cloudinary";
import fs from "fs";

// config cloudinary
cloudinary.v2.config({
	cloud_name: "dxdrjruzm",
	api_key: "273183453883972",
	api_secret: "r3dsmwfgufv3Ivg2EMz3a1rHC64",
});

/**
 *
 * @param {*} req
 * @returns  file
 */
export const cloudUpload = async (req) => {
	// upload brand logo
	const data = await cloudinary.v2.uploader.upload(req.file.path);
	return data;
};

export const cloudUploads = async (path) => {
	// upload brand logo
	const data = await cloudinary.v2.uploader.upload(path);
	return data.secure_url;
};

export const cloudDelete = async (publicId) => {
	// delete brand logo
	await cloudinary.v2.uploader.destroy(publicId);
};
