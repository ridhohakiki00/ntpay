import { db } from "../config/db.js";

export const getAllServices = async () => {
  const sql = "SELECT * FROM services";
  const [rows] = await db.execute(sql);
  return rows;
};

export const getServiceByCode = async (service_code) => {
  const sql = "SELECT * FROM services WHERE service_code = ?";
  const [rows] = await db.execute(sql, [service_code]);
  return rows[0];
};
