import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import bannerRoutes from "./routes/banner.routes.js";
import serviceRoutes from "./routes/service.routes.js";
import balanceRoutes from "./routes/balance.routes.js";
import topupRoutes from "./routes/topup.routes.js";
import transactionRoutes from "./routes/transaction.routes.js";
import fileUpload from "express-fileupload";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  fileUpload({
    useTempFiles: true, // supaya ada file.path
    tempFileDir: "/tmp/", // directory sementara
    limits: { fileSize: 2 * 1024 * 1024 }, // max 2MB
  })
);

app.use("/", authRoutes);
app.use("/profile", userRoutes);
app.use("/banner", bannerRoutes);
app.use("/services", serviceRoutes);
app.use("/balance", balanceRoutes);
app.use("/topup", topupRoutes);
app.use("/transaction", transactionRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
