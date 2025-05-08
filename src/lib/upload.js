import axios from "axios";

const uploadToCloudinary = async (file) => {
  const url = 'https://api.cloudinary.com/v1_1/<aditya01>/image/upload';

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "<Talkio>");

  try {
    const res = await axios.post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress: (progressEvent) => {
        const progress = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        console.log("Upload is " + progress + "% done");
      },
    });

    return res.data.secure_url; // The image URL
  } catch (error) {
    throw new Error("Something went wrong! " + error.message);
  }
};

export default uploadToCloudinary;