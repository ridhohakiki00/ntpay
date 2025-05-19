import jwt from "jsonwebtoken";

export const generateTokenAndSetCookie = (res, email) => {
  const token = jwt.sign({ email }, process.env.JWT_SECRET, {
    expiresIn: "12h",
  });
  res.cookie("token", token, {
    httpOnly: true, // XSS protection
    sameSite: "Strict", // CSRF protection
    secure: process.env.NODE_ENV === "production", // Set to true if using HTTPS
    maxAge: 12 * 60 * 60 * 1000, // 12 jam
  });
  return token;
};
