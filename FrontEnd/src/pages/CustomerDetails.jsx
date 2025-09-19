// src/pages/CustomerDetails.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function CustomerDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { customer } = location.state || {};

  if (!customer) {
    return (
      <div className="container my-5 text-center">
        <h5>No customer data found!</h5>
        <button className="btn btn-primary mt-3" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="container my-4">
      <h4 className="mb-3 text-center">Customer Booking Details</h4>

      <div className="card shadow-sm p-3 p-md-4">
        <div className="d-flex flex-column gap-2">
          <p className="m-0"><strong>Name:</strong> {customer.name}</p>
          <p className="m-0"><strong>Contact No:</strong> {customer.contact}</p>
          <p className="m-0"><strong>Email:</strong> {customer.email}</p>
          <p className="m-0">
            <strong>Govt ID:</strong> {customer.govtIdType} - {customer.govtIdNumber}
          </p>
          <p className="m-0"><strong>Date & Time of Booking:</strong> {customer.dateTime}</p>
          <p className="m-0"><strong>Number of People:</strong> {customer.numPeople}</p>
          <p className="m-0"><strong>Payment Status:</strong> {customer.paymentStatus}</p>
          <p className="m-0"><strong>Total Amount:</strong> ₹{customer.totalAmount}</p>
          <p className="m-0"><strong>Advance Paid:</strong> ₹{customer.advancePaid}</p>
          <p className="m-0">
            <strong>Remaining Amount:</strong> ₹{customer.totalAmount - customer.advancePaid}
          </p>
        </div>

        <div className="text-center mt-3">
          <button className="btn btn-secondary btn-sm" onClick={() => navigate(-1)}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default CustomerDetails;
