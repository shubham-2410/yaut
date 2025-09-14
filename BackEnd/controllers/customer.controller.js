import { CustomerModel } from "../models/customer.model.js";

export const createCustomer = async (req, res) => {
  console.log("Create Customer")
  try {
    console.log("Cloudinary img ", req.cloudinaryUrl)
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
  console.log("Get all Customers")
  try {
    const customers = await CustomerModel.find();
    res.json(customers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getCustomerByEmail = async (req, res) => {
  try {
    const { email } = req.params; // 👈 Expecting email in URL
    console.log("Get by email ", email)
    const customer = await CustomerModel.findOne({ email });

    if (!customer) {
      return res.status(404).json({ error: "Customer not found" });
    }

    res.json(customer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
