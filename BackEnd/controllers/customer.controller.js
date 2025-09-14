import { CustomerModel } from "../models/customer.model.js";

export const createCustomer = async (req, res) => {
  try {
    const customer = await CustomerModel.create({
      ...req.body,
      govtIdImage: req.cloudinaryUrl // Attach uploaded image URL
    });
    res.status(201).json(customer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getCustomers = async (req, res) => {
  try {
    const customers = await CustomerModel.find();
    res.json(customers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getCustomerById = async (req, res) => {
  try {
    const customer = await CustomerModel.findById(req.params.id);
    if (!customer) return res.status(404).json({ error: "Customer not found" });
    res.json(customer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
