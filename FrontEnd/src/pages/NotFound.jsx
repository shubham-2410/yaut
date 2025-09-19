// src/pages/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container mt-5 text-center">
      <h1>404 - Page Not Found</h1>
      <Link to="/" className="btn btn-primary mt-3">
        Go to Login
      </Link>
    </div>
  );
}

export default NotFound;
