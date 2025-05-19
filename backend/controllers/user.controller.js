import cloudinary from "../config/cloudinary.js";
import fs from "fs";
import {
  updateUserProfile,
  updateUserProfileImage,
  getUserByEmail,
} from "../queries/user.query.js";

export const getProfile = async (req, res) => {
  try {
    const { email } = req.user;

    const user = await getUserByEmail(email);
    if (user) delete user.password;

    return res.status(200).json({
      status: 0,
      message: "Get Profile Sukses",
      data: {
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name,
        profile_image: user.profile_image || null,
      },
    });
  } catch (err) {
    console.error("Profile error:", err);
    return res.status(500).json({
      status: 500,
      message: "Terjadi kesalahan server",
      data: null,
    });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const { first_name, last_name } = req.body;
    const { email } = req.user;

    if (!first_name || !last_name) {
      return res.status(400).json({
        status: 102,
        message: "Nama depan dan nama belakang wajib diisi",
        data: null,
      });
    }

    const user = await getUserByEmail(email);
    if (user) delete user.password;

    await updateUserProfile(email, first_name, last_name);
    const updatedUser = await getUserByEmail(email);
    if (updatedUser) delete updatedUser.password;

    return res.status(200).json({
      status: 0,
      message: "Update Profile berhasil",
      data: {
        email: updatedUser.email,
        first_name: updatedUser.first_name,
        last_name: updatedUser.last_name,
        profile_image: updatedUser.profile_image || null,
      },
    });
  } catch (err) {
    console.error("Update profile error:", err);
    return res.status(500).json({
      status: 500,
      message: "Terjadi kesalahan server",
      data: null,
    });
  }
};

export const updateProfileImage = async (req, res) => {
  try {
    const { email } = req.user;
    const file = req.files?.file;

    const user = await getUserByEmail(email);
    if (user) delete user.password;

    if (!file) {
      return res.status(400).json({
        status: 102,
        message: "File tidak ditemukan",
        data: null,
      });
    }

    const allowedMimeTypes = ["image/jpeg", "image/png"];
    if (!allowedMimeTypes.includes(file.mimetype)) {
      return res.status(400).json({
        status: 102,
        message: "Format Image tidak sesuai",
        data: null,
      });
    }

    if (file.truncated) {
      return res.status(400).json({
        status: 102,
        message: "Ukuran gambar maksimal 2MB",
        data: null,
      });
    }

    if (user.public_id) {
      await cloudinary.uploader.destroy(user.public_id);
    }

    const result = await cloudinary.uploader.upload(file.tempFilePath, {
      folder: "profile_images",
    });

    // hapus file sementara
    fs.unlinkSync(file.tempFilePath);

    await updateUserProfileImage(email, result.secure_url, result.public_id);
    const updatedUser = await getUserByEmail(email);
    if (updatedUser) delete updatedUser.password;

    return res.status(200).json({
      status: 0,
      message: "Update Profile Image berhasil",
      data: {
        email: updatedUser.email,
        first_name: updatedUser.first_name,
        last_name: updatedUser.last_name,
        profile_image: updatedUser.profile_image || null,
      },
    });
  } catch (error) {
    console.error("Upload Error", error);
    return res.status(500).json({
      status: 500,
      message: "Internal Server Error",
      data: null,
    });
  }
};
