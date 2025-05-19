import { getAllBanners } from "../queries/banner.query.js";

export const getBanners = async (req, res) => {
  try {
    const banners = await getAllBanners();
    if (!banners || banners.length === 0) {
      return res.status(400).json({
        status: 102,
        message: "Banner tidak ditemukan",
        data: null,
      });
    }

    return res.status(200).json({
      status: 0,
      message: "Sukses",
      data: banners,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      status: 500,
      message: "Terjadi kesalahan pada server",
      data: null,
    });
  }
};
