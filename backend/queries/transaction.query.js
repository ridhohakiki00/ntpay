import { db } from "../config/db.js";

export const createTransaction = async ({
  invoiceNumber,
  userEmail,
  transactionType,
  description,
  totalAmount,
}) => {
  const sql = `INSERT INTO transactions (invoice_number, user_email, transaction_type, description, total_amount)
                 VALUES (?, ?, ?, ?, ?)`;
  const [result] = await db.execute(sql, [
    invoiceNumber,
    userEmail,
    transactionType,
    description,
    totalAmount,
  ]);
  return result.insertId;
};

export const getTransactionById = async (id) => {
  const sql = `SELECT * FROM transactions WHERE id = ?`;
  const [rows] = await db.execute(sql, [id]);
  return rows[0];
};

export const getTransactionHistory = async (userEmail, limit, offset) => {
  let sql = `SELECT * FROM transactions WHERE user_email = ? ORDER BY created_on DESC`;
  if (limit !== null) {
    sql += ` LIMIT ${limit} OFFSET ${offset}`;
  }
  const [rows] = await db.execute(sql, [userEmail]);
  return rows;
};

export const getTransactionCount = async (userEmail) => {
  const [[{ total }]] = await db.execute(
    `SELECT COUNT(*) as total FROM transactions WHERE user_email = ?`,
    [userEmail]
  );
  return total;
};
