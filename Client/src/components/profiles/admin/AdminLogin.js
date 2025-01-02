import React from "react";
import "./AdminLogin.css"; // Add your CSS for styling

export default function AdminLogin() {
  return (
    <div className="adminlogin-container">
      <div className="adminlogin-box">
        <div className="adminlogin-logo">
          <h1>
            <span style={{ fontWeight: "bold", fontFamily: "serif" }}>Paradise</span>{" "}
            <span style={{ color: "green", fontFamily: "sans-serif" }}>
              Vacation Rentals
            </span>
          </h1>
        </div>
        <form>
          <label htmlFor="email" className="adminlogin-label">Email Address</label>
          <input type="email" id="email" placeholder="Email Address" className="adminlogin-input" />
          <label htmlFor="password" className="adminlogin-label">Password</label>
          <input type="password" id="password" placeholder="Password" className="adminlogin-input" />
          <button type="submit" className="adminlogin-button">
            Login
          </button>
        </form>
        <div className="adminlogin-options">
          <a href="/reset-password" className="adminlogin-link">Reset Password</a>
          <a href="/forgot-password" className="adminlogin-link">Forgot Password</a>
        </div>
      </div>
    </div>
  );
}
