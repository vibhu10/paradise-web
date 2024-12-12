import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import { ThreeDots } from "react-loading-icons"; // Import the loading spinner

const Header = () => {
  const [popup, setPopup] = useState(false); // Popup state
  const [loading, setLoading] = useState(false); // Loading state for sign out
  const navigate = useNavigate(); // Hook for navigation

  // Handle logout
  const handleLogout = () => {
    setLoading(true); // Show loading spinner
    setTimeout(() => {
      localStorage.removeItem("token"); // Remove JWT token
      setLoading(false); // Stop loading spinner
      navigate("/"); // Redirect to home page
    }, 2000); // Ensure the animation lasts 2 seconds
  };

  return (
    <header className="header-container">
      {/* Logo Section */}
      <div className="logo-section">
        <img
          className="site-logo"
          src="/48564e5fe8898cf62b0bbf42276d6cf3.jpeg"
          alt="Paradise Logo"
        />
      </div>

      {/* Right-Side Options */}
      <div className="header-options">
        <span className="list-property">List Your Property</span>
        <span className="language-icon">🌐</span>
        <div className="profile-icon" onClick={() => setPopup(!popup)}>
          <span>W</span>
        </div>
        <button
          className="hamburger-button"
          onClick={() => setPopup(!popup)}
        >
          <div className="line"></div>
          <div className="line short"></div>
          <div className="line"></div>
        </button>
      </div>

      {/* Dropdown Menu */}
      {popup && (
        <div className="menu-dropdown-profile-header">
          <ul>
            <li onClick={handleLogout}>Sign Out</li>
          </ul>
        </div>
      )}

      {/* Loading Spinner */}
      {loading && (
        <div className="loading-overlay">
          <ThreeDots className="spinner" color="green" />
        </div>
      )}
    </header>
  );
};

export default Header;
