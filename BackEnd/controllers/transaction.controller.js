import { TransactionModel } from "../models/transaction.model.js";

export const createTransaction = async (req, res) => {
  try {
    const transaction = await TransactionModel.create({
      ...req.body,
      paymentProof: req.cloudinaryUrl
    });
    res.status(201).json(transaction);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getTransactions = async (req, res) => {
  try {
    const transactions = await TransactionModel.find().populate("employeeId");
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getTransactionById = async (req, res) => {
  try {
    const transaction = await TransactionModel.findById(req.params.id).populate("employeeId");
    if (!transaction) return res.status(404).json({ error: "Transaction not found" });
    res.json(transaction);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
