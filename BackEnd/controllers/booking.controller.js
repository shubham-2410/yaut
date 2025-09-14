import { BookingModel } from "../models/booking.model.js";
import { CustomerModel } from "../models/customer.model.js";
import { BookingModel } from "../models/booking.model.js";

export const createBooking = async (req, res) => {
  try {
    const booking = await BookingModel.create(req.body);
    await CustomerModel.findByIdAndUpdate(
      booking.customerId,
      { bookingId: booking._id },
      { new: true }
    );
    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateBooking = async (req, res) => {
  try {
    const { transactionId, pendingAmount, status} = req.body;
    const bookingId = req.params.id;

    if (!transactionId) {
      return res.status(400).json({ error: "transactionId is required" });
    }

    const updatedBooking = await BookingModel.findByIdAndUpdate(
      bookingId,
      {
        $push: { transactionId }, // add new transaction
        ...(pendingAmount && { pendingAmount }),
        ...(status && { status })
      },
      { new: true }
    ).populate("customerId empId transactionId");

    if (!updatedBooking)
      return res.status(404).json({ error: "Booking not found" });

    res.status(200).json(updatedBooking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const getBookings = async (req, res) => {
  try {
    const bookings = await BookingModel.find()
      .populate("customerId empId transactionId");
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getBookingById = async (req, res) => {
  try {
    const booking = await BookingModel.findById(req.params.id)
      .populate("customerId empId transactionId");
    if (!booking) return res.status(404).json({ error: "Booking not found" });
    res.json(booking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
