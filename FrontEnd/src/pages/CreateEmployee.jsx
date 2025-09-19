// src/pages/CreateEmployee.jsx
import React, { useState } from "react";

function CreateEmployee() {
  const [formData, setFormData] = useState({
    role: "backdesk",
    name: "",
    contact: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    status: "active",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Employee Data Submitted:", formData);
    alert("Employee created successfully! Check console for details.");

    // Reset form
    setFormData({
      role: "backdesk",
      name: "",
      contact: "",
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
      status: "active",
    });
  };

  return (
    <div className="container my-4 px-3">
      <h4 className="mb-4 text-center">Create Employee</h4>
      <form className="row g-3" onSubmit={handleSubmit}>
        {/* Role */}
        <div className="col-12">
          <label className="form-label fw-bold">Role</label>
          <select
            className="form-select border border-dark text-dark"
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="backdesk">Backdesk</option>
            <option value="onsite">Onsite</option>
          </select>
        </div>

        {/* Name */}
        <div className="col-12">
          <label className="form-label fw-bold">Full Name</label>
          <input
            type="text"
            className="form-control border border-dark text-dark"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter full name"
            required
          />
        </div>

        {/* Contact */}
        <div className="col-12">
          <label className="form-label fw-bold">Contact Number</label>
          <input
            type="tel"
            className="form-control border border-dark text-dark"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="Enter contact number"
            required
          />
        </div>

        {/* Email */}
        <div className="col-12">
          <label className="form-label fw-bold">Email Address (optional)</label>
          <input
            type="email"
            className="form-control border border-dark text-dark"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email address"
          />
        </div>

        {/* Username */}
        <div className="col-12 col-md-6">
          <label className="form-label fw-bold">Username</label>
          <input
            type="text"
            className="form-control border border-dark text-dark"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter username"
            required
          />
        </div>

        {/* Password */}
        <div className="col-12 col-md-6">
          <label className="form-label fw-bold">Password</label>
          <input
            type="password"
            className="form-control border border-dark text-dark"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
            required
          />
        </div>

        {/* Confirm Password */}
        <div className="col-12 col-md-6">
          <label className="form-label fw-bold">Confirm Password</label>
          <input
            type="password"
            className="form-control border border-dark text-dark"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Re-enter password"
            required
          />
        </div>

        {/* Status */}
        <div className="col-12 col-md-6">
          <label className="form-label fw-bold">Status</label>
          <select
            className="form-select border border-dark text-dark"
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        {/* Submit */}
        <div className="col-12 text-center">
          <button type="submit" className="btn btn-primary w-100 w-md-auto">
            Create Employee
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateEmployee;
