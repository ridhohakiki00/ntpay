import { getUserByEmail } from "../queries/user.query.js";

export const getBalance = async (req, res) => {
  try {
    const { email } = req.user;

    const user = await getUserByEmail(email);
    if (user) delete user.password;

    return res.status(200).json({
      status: 0,
      message: "Get balance success",
      data: {
        balance: user.balance,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: 500,
      message: "Terjadi kesalahan pada server",
      data: null,
    });
  }
};
