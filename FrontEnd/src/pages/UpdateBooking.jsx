// src/pages/UpdateBooking.jsx
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function UpdateBooking() {
  const navigate = useNavigate();
  const location = useLocation();
  const { booking } = location.state || {};

  if (!booking) {
    // If no booking data is passed, redirect to bookings page
    navigate("/bookings");
    return null;
  }

  const [formData, setFormData] = useState({
    status: booking.status,
    pendingAmount: booking.pendingAmount,
    proofFile: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "proofFile") {
      setFormData({ ...formData, proofFile: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Updated:", { ...booking, ...formData });
    alert("Booking updated successfully! Check console for details.");
    navigate("/bookings"); // Navigate back after update
  };

  const handleBack = () => {
    navigate(-1); // go back to previous page
  };

  return (
    <div className="container my-4 px-3">
      {/* Header with Back Button */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4>Update Booking</h4>
        <button className="btn btn-secondary" onClick={handleBack}>
          &larr; Back
        </button>
      </div>

      <form className="row g-3" onSubmit={handleSubmit}>
        {/* Booking Info */}
        <div className="col-12">
          <p><strong>Customer:</strong> {booking.name}</p>
          <p><strong>Boat:</strong> {booking.boat}</p>
          <p><strong>Total Amount:</strong> ₹{booking.totalAmount}</p>
          <p><strong>Advance Paid:</strong> ₹{booking.advancePaid}</p>
          <p><strong>Pending Amount:</strong> ₹{booking.pendingAmount}</p>
        </div>

        {/* Update Status */}
        <div className="col-12 col-md-6">
          <label className="form-label fw-bold">Booking Status</label>
          <select
            className="form-select border border-dark text-dark"
            name="status"
            value={formData.status}
            onChange={handleChange}
            required
          >
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        {/* Update Pending Amount */}
        <div className="col-12 col-md-6">
          <label className="form-label fw-bold">Pending Amount</label>
          <input
            type="number"
            className="form-control border border-dark text-dark"
            name="pendingAmount"
            value={formData.pendingAmount}
            onChange={handleChange}
            placeholder="Enter pending amount"
            required
          />
        </div>

        {/* Proof of Payment */}
        <div className="col-12">
          <label className="form-label fw-bold">Upload Proof of Payment</label>
          <input
            type="file"
            className="form-control border border-dark text-dark"
            name="proofFile"
            onChange={handleChange}
            accept="image/*,application/pdf"
          />
        </div>

        {/* Submit Button */}
        <div className="col-12 text-center mt-3">
          <button type="submit" className="btn btn-primary w-100 w-md-auto">
            Update Booking
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateBooking;
