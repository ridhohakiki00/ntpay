import { getAllServices } from "../queries/service.query.js";

export const getServices = async (req, res) => {
  try {
    const services = await getAllServices();
    if (!services || services.length === 0) {
      return res.status(400).json({
        status: 102,
        message: "Layanan tidak ditemukan",
        data: null,
      });
    }

    return res.status(200).json({
      status: 0,
      message: "Berhasil mendapatkan layanan",
      data: services,
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
