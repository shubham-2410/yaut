// src/pages/CreateBooking.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Mock customers data (replace with API call if needed)
const mockCustomers = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
];

function CreateBooking() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    customerId: "",
    boat: "",
    totalAmount: "",
    advancePaid: "",
    pendingAmount: "",
    date: "",
    duration: "",
    startTime: "",
    endTime: "",
    numPeople: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Created:", formData);
    alert("Booking created successfully! Check console for details.");

    // Reset form
    setFormData({
      customerId: "",
      boat: "",
      totalAmount: "",
      advancePaid: "",
      pendingAmount: "",
      date: "",
      duration: "",
      startTime: "",
      endTime: "",
      numPeople: "",
    });

    // Navigate back to bookings page after creation
    navigate("/bookings");
  };

  // Back button handler
  const handleBack = () => {
    navigate(-1); // go back to the previous page
  };

  return (
    <div className="container my-4 px-3">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4>Create Booking</h4>
        <button className="btn btn-secondary" onClick={handleBack}>
          &larr; Back
        </button>
      </div>

      <form className="row g-3" onSubmit={handleSubmit}>
        {/* Customer Dropdown */}
        <div className="col-12">
          <label className="form-label fw-bold">Select Customer</label>
          <select
            className="form-select border border-dark text-dark"
            name="customerId"
            value={formData.customerId}
            onChange={handleChange}
            required
          >
            <option value="">-- Select Customer --</option>
            {mockCustomers.map((customer) => (
              <option key={customer.id} value={customer.id}>
                {customer.name}
              </option>
            ))}
          </select>
        </div>

        {/* Boat Assigned */}
        <div className="col-12">
          <label className="form-label fw-bold">Boat Assigned</label>
          <input
            type="text"
            className="form-control border border-dark text-dark"
            name="boat"
            value={formData.boat}
            onChange={handleChange}
            placeholder="Enter boat name"
            required
          />
        </div>

        {/* Total Amount */}
        <div className="col-12 col-md-4">
          <label className="form-label fw-bold">Total Amount</label>
          <input
            type="number"
            className="form-control border border-dark text-dark"
            name="totalAmount"
            value={formData.totalAmount}
            onChange={handleChange}
            placeholder="Total amount"
            required
          />
        </div>

        {/* Advance Paid */}
        <div className="col-12 col-md-4">
          <label className="form-label fw-bold">Advance Paid</label>
          <input
            type="number"
            className="form-control border border-dark text-dark"
            name="advancePaid"
            value={formData.advancePaid}
            onChange={handleChange}
            placeholder="Advance amount"
            required
          />
        </div>

        {/* Pending Amount */}
        <div className="col-12 col-md-4">
          <label className="form-label fw-bold">Pending Amount</label>
          <input
            type="number"
            className="form-control border border-dark text-dark"
            name="pendingAmount"
            value={formData.pendingAmount}
            onChange={handleChange}
            placeholder="Pending amount"
            required
          />
        </div>

        {/* Date of Ride */}
        <div className="col-12 col-md-6">
          <label className="form-label fw-bold">Date of Ride</label>
          <input
            type="date"
            className="form-control border border-dark text-dark"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        {/* Duration */}
        <div className="col-12 col-md-6">
          <label className="form-label fw-bold">Duration (hours)</label>
          <input
            type="number"
            className="form-control border border-dark text-dark"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            placeholder="Enter duration"
            required
          />
        </div>

        {/* Start Time */}
        <div className="col-12 col-md-6">
          <label className="form-label fw-bold">Start Time</label>
          <input
            type="time"
            className="form-control border border-dark text-dark"
            name="startTime"
            value={formData.startTime}
            onChange={handleChange}
            required
          />
        </div>

        {/* End Time */}
        <div className="col-12 col-md-6">
          <label className="form-label fw-bold">End Time</label>
          <input
            type="time"
            className="form-control border border-dark text-dark"
            name="endTime"
            value={formData.endTime}
            onChange={handleChange}
            required
          />
        </div>

        {/* Number of People */}
        <div className="col-12 col-md-6">
          <label className="form-label fw-bold">Number of People</label>
          <input
            type="number"
            className="form-control border border-dark text-dark"
            name="numPeople"
            value={formData.numPeople}
            onChange={handleChange}
            placeholder="Enter number of people"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="col-12 text-center">
          <button type="submit" className="btn btn-primary w-100 w-md-auto">
            Create Booking
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateBooking;
