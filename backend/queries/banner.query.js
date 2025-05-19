import { db } from "../config/db.js";

export const getAllBanners = async () => {
  const sql = "SELECT banner_name, banner_image, description FROM banners";
  const [rows] = await db.execute(sql);
  return rows;
};
