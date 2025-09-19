// src/pages/CustomerForm.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CustomerForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    alternateContact: "",
    email: "",
    govtIdType: "Aadhar",
    govtIdNumber: "",
    govtIdImage: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "govtIdImage") {
      setFormData({ ...formData, govtIdImage: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Customer Data Submitted:", formData);
    alert("Customer profile created (check console for data)");
  };

  // Back button handler
  const handleBack = () => {
    navigate(-1); // Go back to previous page
  };

  return (
    <div className="container my-4">
      {/* Header with Back Button */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4>Create Customer Profile</h4>
        <button className="btn btn-secondary" onClick={handleBack}>
          &larr; Back
        </button>
      </div>

      <form className="row g-3" onSubmit={handleSubmit}>
        {/* Full Name */}
        <div className="col-12 col-md-6">
          <label className="form-label fw-bold">Full Name</label>
          <input
            type="text"
            className="form-control form-control-lg border border-dark text-dark"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter full name"
            required
          />
        </div>

        {/* Contact Number */}
        <div className="col-12 col-md-6">
          <label className="form-label fw-bold">Contact Number</label>
          <input
            type="tel"
            className="form-control form-control-lg border border-dark text-dark"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="Enter contact number"
            required
          />
        </div>

        {/* Alternate Contact */}
        <div className="col-12 col-md-6">
          <label className="form-label fw-bold">Alternate Contact Number</label>
          <input
            type="tel"
            className="form-control form-control-lg border border-dark text-dark"
            name="alternateContact"
            value={formData.alternateContact}
            onChange={handleChange}
            placeholder="Enter alternate contact"
          />
        </div>

        {/* Email */}
        <div className="col-12 col-md-6">
          <label className="form-label fw-bold">Email Address</label>
          <input
            type="email"
            className="form-control form-control-lg border border-dark text-dark"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email address"
            required
          />
        </div>

        {/* Govt ID Type */}
        <div className="col-12 col-md-6">
          <label className="form-label fw-bold">Govt ID Type</label>
          <select
            className="form-select form-select-lg border border-dark text-dark"
            name="govtIdType"
            value={formData.govtIdType}
            onChange={handleChange}
          >
            <option value="Aadhar">Aadhar</option>
            <option value="PAN">PAN</option>
            <option value="Driving License">Driving License</option>
            <option value="Passport">Passport</option>
          </select>
        </div>

        {/* Govt ID Number */}
        <div className="col-12 col-md-6">
          <label className="form-label fw-bold">Govt ID Number</label>
          <input
            type="text"
            className="form-control form-control-lg border border-dark text-dark"
            name="govtIdNumber"
            value={formData.govtIdNumber}
            onChange={handleChange}
            placeholder="Enter govt ID number"
            required
          />
        </div>

        {/* Upload ID Image */}
        <div className="col-12">
          <label className="form-label fw-bold">Upload Govt ID Image</label>
          <input
            type="file"
            className="form-control form-control-lg border border-dark"
            name="govtIdImage"
            accept="image/*"
            onChange={handleChange}
            required
          />
        </div>

        {/* Submit Button */}
        <div className="col-12 text-center">
          <button type="submit" className="btn btn-primary btn-lg w-100 w-md-auto">
            Create Profile
          </button>
        </div>
      </form>
    </div>
  );
}

export default CustomerForm;
