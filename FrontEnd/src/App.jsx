// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import Bookings from "./pages/Bookings";
import Collections from "./pages/Collections";
import NotFound from "./pages/NotFound";
import CreateCustomer from "./pages/CreateCustomer";
import CustomerDetails from "./pages/CustomerDetails";
import CreateEmployee from "./pages/CreateEmployee";
import CreateBooking from "./pages/CreateBooking";
import UpdateBooking from "./pages/UpdateBooking"; // ✅ Import UpdateBooking

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (role) => {
    setUser({ role }); // role: "admin", "backdesk", "onsite"
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      {user && <Navbar user={user} onLogout={handleLogout} />}

      <Routes>
        {/* Public route */}
        <Route path="/" element={<Login onLogin={handleLogin} />} />

        {/* Protected routes */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute user={user}>
              {user?.role === "admin" ? <AdminDashboard /> : <NotFound />}
            </ProtectedRoute>
          }
        />

        <Route
          path="/customer-details"
          element={
            <ProtectedRoute user={user}>
              {user?.role === "admin" || user?.role === "backdesk" ? (
                <CustomerDetails />
              ) : (
                <NotFound />
              )}
            </ProtectedRoute>
          }
        />

        <Route
          path="/create-employee"
          element={
            <ProtectedRoute user={user}>
              {user?.role === "admin" ? <CreateEmployee /> : <NotFound />}
            </ProtectedRoute>
          }
        />

        <Route
          path="/bookings"
          element={
            <ProtectedRoute user={user}>
              <Bookings user={user} />
            </ProtectedRoute>
          }
        />

        <Route
          path="/collections"
          element={
            <ProtectedRoute user={user}>
              {user?.role === "admin" ? <Collections /> : <NotFound />}
            </ProtectedRoute>
          }
        />

        {/* Create Customer - admin/backdesk */}
        <Route
          path="/create-customer"
          element={
            <ProtectedRoute user={user}>
              {user?.role === "admin" || user?.role === "backdesk" ? (
                <CreateCustomer />
              ) : (
                <NotFound />
              )}
            </ProtectedRoute>
          }
        />

        {/* Create Booking - admin/backdesk */}
        <Route
          path="/create-booking"
          element={
            <ProtectedRoute user={user}>
              {user?.role === "admin" || user?.role === "backdesk" ? (
                <CreateBooking />
              ) : (
                <NotFound />
              )}
            </ProtectedRoute>
          }
        />

        {/* Update Booking - admin/backdesk/onsite */}
        <Route
          path="/update-booking"
          element={
            <ProtectedRoute user={user}>
              {user?.role === "admin" ||
              user?.role === "backdesk" ||
              user?.role === "onsite" ? (
                <UpdateBooking />
              ) : (
                <NotFound />
              )}
            </ProtectedRoute>
          }
        />

        {/* Fallback */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
