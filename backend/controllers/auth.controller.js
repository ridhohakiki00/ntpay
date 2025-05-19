import bcrypt from "bcryptjs";
import { createUser, getUserByEmail } from "../queries/user.query.js";
import { generateTokenAndSetCookie } from "../utils/generateAuthToken.js";

export const register = async (req, res) => {
  let { email, first_name, last_name, password } = req.body;

  if (typeof password !== "string") {
    password = String(password);
  }

  try {
    if (!email || !first_name || !last_name || !password) {
      return res.status(400).json({
        status: 102,
        message: "Semua field wajib diisi",
        data: null,
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        status: 102,
        message: "Parameter email tidak sesuai format",
        data: null,
      });
    }

    const existingUser = await getUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({
        status: 102,
        message: "Email sudah terdaftar",
        data: null,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await createUser({
      email,
      first_name,
      last_name,
      password: hashedPassword,
    });

    return res.status(200).json({
      status: 0,
      message: "Registrasi berhasil silahkan login",
      data: null,
    });
  } catch (error) {
    console.error("Register error:", error);
    return res.status(500).json({
      status: 500,
      message: "Terjadi kesalahan pada server",
      data: null,
    });
  }
};

export const login = async (req, res) => {
  let { email, password } = req.body;

  if (typeof password !== "string") {
    password = String(password);
  }

  try {
    if (!email || !password) {
      return res.status(400).json({
        status: 102,
        message: "Email dan password wajib diisi",
        data: null,
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        status: 102,
        message: "Parameter email tidak sesuai format",
        data: null,
      });
    }

    const user = await getUserByEmail(email);
    if (!user) {
      return res.status(401).json({
        status: 103,
        message: "Email atau password salah",
        data: null,
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        status: 103,
        message: "Email atau password salah",
        data: null,
      });
    }

    // Generate JWT token
    const token = generateTokenAndSetCookie(res, user.email);

    return res.status(200).json({
      status: 0,
      message: "Login Sukses",
      data: { token },
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({
      status: 500,
      message: "Terjadi kesalahan pada server",
      data: null,
    });
  }
};

export const logout = (req, res) => {
  res.clearCookie("token");
  return res.status(200).json({
    status: 0,
    message: "Logout Sukses",
    data: null,
  });
};
