import jwt from "jsonwebtoken";

export const protect = (req, res, next) => {
  let token = null;

  // Ambil dari Authorization header atau cookie
  const authHeader = req.headers.authorization;
  if (authHeader?.startsWith("Bearer ")) {
    token = authHeader.split(" ")[1];
  } else if (req.cookies?.token) {
    token = req.cookies.token;
  }

  if (!token) {
    return res.status(401).json({
      status: 108,
      message: "Token tidak valid atau kadaluwarsa",
      data: null,
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    return res.status(401).json({
      status: 108,
      message: "Token tidak valid atau kadaluwarsa",
      data: null,
    });
  }
};
