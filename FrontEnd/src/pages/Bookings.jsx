// src/pages/Bookings.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const mockBookings = [
  {
    id: 1,
    name: "John Doe",
    boat: "SpeedBoat A",
    status: "Pending", // Only Pending or Completed
    contact: "1234567890",
    email: "john@example.com",
    govtIdType: "Aadhar",
    govtIdNumber: "1234-5678-9012",
    dateTime: "2025-09-14 10:00 AM",
    numPeople: 2,
    paymentStatus: "Pending",
    totalAmount: 2000,
    advancePaid: 500,
    pendingAmount: 1500,
  },
  {
    id: 2,
    name: "Jane Smith",
    boat: "Yacht B",
    status: "Completed",
    contact: "9876543210",
    email: "jane@example.com",
    govtIdType: "PAN",
    govtIdNumber: "ABCDE1234F",
    dateTime: "2025-09-14 12:00 PM",
    numPeople: 4,
    paymentStatus: "Paid",
    totalAmount: 5000,
    advancePaid: 5000,
    pendingAmount: 0,
  },
];

function Bookings({ user }) {
  const navigate = useNavigate();

  const handleViewDetails = (customer) => {
    navigate("/customer-details", { state: { customer } });
  };

  const handleCreateBooking = () => {
    navigate("/create-booking");
  };

  const handleUpdateBooking = (booking) => {
    navigate("/update-booking", { state: { booking } });
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Bookings</h2>
        {(user?.type === "admin" || user?.type === "backdesk") && (
          <button className="btn btn-success" onClick={handleCreateBooking}>
            + Create Booking
          </button>
        )}
      </div>

      <div className="row mt-3">
        {mockBookings.map((booking) => (
          <div key={booking.id} className="col-md-6 mb-3">
            <div className="card p-3">
              <h5>{booking.name}</h5>
              <p>Boat: {booking.boat}</p>
              <p>
                Status:{" "}
                <span
                  className={`badge ${
                    booking.status === "Pending" ? "bg-warning" : "bg-success"
                  }`}
                >
                  {booking.status}
                </span>
              </p>
              <div className="d-flex gap-2">
                <button
                  className="btn btn-primary flex-fill"
                  onClick={() => handleViewDetails(booking)}
                >
                  View Details
                </button>

                {(user?.type === "admin" ||
                  user?.type === "backdesk" ||
                  user?.type === "onsite") && (
                  <button
                    className="btn btn-info flex-fill"
                    onClick={() => handleUpdateBooking(booking)}
                  >
                    Update Booking
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bookings;
