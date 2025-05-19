import { db } from "../config/db.js";

export const createUser = async ({
  email,
  first_name,
  last_name,
  password,
}) => {
  const sql = `INSERT INTO users (email, first_name, last_name, password)
               VALUES (?, ?, ?, ?)`;
  await db.execute(sql, [email, first_name, last_name, password]);
};

export const getUserByEmail = async (email) => {
  const sql = `SELECT * FROM users WHERE email = ?`;
  const [rows] = await db.execute(sql, [email]);
  return rows[0];
};

export const updateUserProfile = async (email, firstName, lastName) => {
  const sql = `UPDATE users SET first_name = ?, last_name = ? WHERE email = ?`;
  await db.execute(sql, [firstName, lastName, email]);
};

export const updateUserProfileImage = async (email, profileImage, publicId) => {
  const sql = `UPDATE users SET profile_image = ?, public_id = ? WHERE email = ?`;
  await db.execute(sql, [profileImage, publicId, email]);
};

export const updateBalance = async (email, balance) => {
  const sql = `UPDATE users SET balance = ? WHERE email = ?`;
  await db.execute(sql, [balance, email]);
};
