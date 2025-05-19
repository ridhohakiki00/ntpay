import { getServiceByCode } from "../queries/service.query.js";
import { getUserByEmail, updateBalance } from "../queries/user.query.js";
import {
  createTransaction,
  getTransactionCount,
  getTransactionById,
  getTransactionHistory,
} from "../queries/transaction.query.js";

export const topupBalance = async (req, res) => {
  try {
    const { email } = req.user;
    const { top_up_amount } = req.body;

    if (!top_up_amount) {
      return res.status(400).json({
        status: 102,
        message: "Jumlah topup wajib diisi",
        data: null,
      });
    }

    if (typeof top_up_amount !== "number" || top_up_amount < 0) {
      return res.status(400).json({
        status: 102,
        message:
          "Parameter amount hanya boleh angka dan tidak boleh lebih kecil dari 0",
        data: null,
      });
    }

    const user = await getUserByEmail(email);
    if (user) delete user.password;

    const balance = user.balance + top_up_amount;
    await updateBalance(email, balance);

    await createTransaction({
      invoiceNumber: `INV-${Date.now()}`,
      userEmail: user.email,
      transactionType: "TOPUP",
      description: "Topup balance",
      totalAmount: top_up_amount,
    });

    return res.status(200).json({
      status: 0,
      message: "Topup balance berhasil",
      data: { balance },
    });
  } catch (error) {
    console.error("Topup error:", error);
    return res.status(500).json({
      status: 500,
      message: "Terjadi kesalahan server",
      data: null,
    });
  }
};

export const makePayment = async (req, res) => {
  try {
    const { email } = req.user;
    const { service_code } = req.body;

    if (!service_code) {
      return res.status(400).json({
        status: 102,
        message: "Service code wajib diisi",
        data: null,
      });
    }

    if (
      typeof service_code !== "string" ||
      service_code !== service_code.toUpperCase()
    ) {
      return res.status(400).json({
        status: 102,
        message: "Service code harus berupa huruf kapital (UPPERCASE)",
        data: null,
      });
    }

    const service = await getServiceByCode(service_code);
    if (!service) {
      return res.status(400).json({
        status: 102,
        message: "Service tidak ditemukan",
        data: null,
      });
    }

    const user = await getUserByEmail(email);
    if (user) delete user.password;

    if (user.balance < service.service_tarif) {
      return res.status(400).json({
        status: 102,
        message: "Saldo tidak cukup",
        data: null,
      });
    }

    const balance = user.balance - service.service_tarif;
    await updateBalance(email, balance);

    const transactionId = await createTransaction({
      invoiceNumber: `INV-${Date.now()}`,
      userEmail: user.email,
      transactionType: "PAYMENT",
      description: `Pembayaran ${service.service_name}`,
      totalAmount: service.service_tarif,
    });

    const transaction = await getTransactionById(transactionId);
    return res.status(200).json({
      status: 0,
      message: "Transaksi berhasil",
      data: {
        invoice_number: transaction.invoice_number,
        service_code: service.service_code,
        service_name: service.service_name,
        transaction_type: transaction.transaction_type,
        total_amount: transaction.total_amount,
        create_on: transaction.created_on,
      },
    });
  } catch (error) {
    console.error("Service payment error:", error);
    return res.status(500).json({
      status: 500,
      message: "Terjadi kesalahan server",
      data: null,
    });
  }
};

export const getHistory = async (req, res) => {
  try {
    const { email } = req.user;
    let { limit, offset } = req.query;

    offset = offset !== undefined ? parseInt(offset, 10) : 0;
    if (isNaN(offset) || offset < 0) offset = 0;

    if (limit !== undefined) {
      limit = parseInt(limit, 10);
      if (isNaN(limit) || limit <= 0) {
        return res.status(400).json({
          status: 102,
          message: "Parameter limit harus berupa angka positif",
          data: null,
        });
      }
    } else {
      limit = null;
    }

    const total = await getTransactionCount(email);
    if (total === 0) {
      return res.status(400).json({
        status: 102,
        message: "Tidak ada transaksi",
        data: null,
      });
    }

    const records = await getTransactionHistory(email, limit, offset);

    return res.status(200).json({
      status: 0,
      message: "Get History Berhasil",
      data: {
        offset,
        limit: limit !== null ? limit : records.length,
        records: records.map((record) => ({
          id: record.id,
          invoice_number: record.invoice_number,
          transaction_type: record.transaction_type,
          description: record.description,
          total_amount: record.total_amount,
          created_on: record.created_on,
        })),
      },
    });
  } catch (error) {
    console.error("Get history error:", error);
    return res.status(500).json({
      status: 500,
      message: "Terjadi kesalahan server",
      data: null,
    });
  }
};
