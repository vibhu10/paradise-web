import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  // State Variables
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [popup, setPopup] = useState(false);
  const [loginPopup, setLoginPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  // Example Filter Data
  const filters = [
    { icon: "house", label: "Homes" },
    { icon: "tree", label: "Nature" },
    { icon: "umbrella", label: "Beaches" },
  ];

  // Handlers
 
  const toggleDropdown = () => setShowDropdown((prev) => !prev);
  const handleProfileClick = () => alert("Navigating to Profile...");
  const handleLogout = () => setIsAuthenticated(false);
  const toggleLoginPopup = () => setLoginPopup(true);
  const toggleSignupPopup = () => alert("Sign up clicked!");
  const handleLogin = () => {
    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }
    // Perform login logic here
    alert("Logged in!");
    setIsAuthenticated(true);
    setLoginPopup(false);
  };

  return (
    <div className="header-profilePage">
      {/* Header Content */}
       <div>

        <img className="profilePage-img"src="/48564e5fe8898cf62b0bbf42276d6cf3.jpeg" alt="paradise" />
        
       </div>


        <div className="log-in-container-profilePage">
       

          {isAuthenticated ? (
            <div className="profile-menu">
              <div
                className="profile-icon"
                onClick={toggleDropdown}
                style={{ cursor: "pointer" }}
              >
                <span>W</span>
              </div>
              {showDropdown && (
                <div className="profile-dropdown">
                  <ul>
                    <li onClick={handleProfileClick}>Profile</li>
                    <li>Reservations</li>
                    <li>Saved</li>
                    <li>Inbox</li>
                    <li>Compare</li>
                    <li>List Your Property</li>
                    <li>Referral Program</li>
                    <li>Become an Influencer</li>
                    <li>Help Center</li>
                    <li>Resources</li>
                    <li>Feedback</li>
                    <li onClick={handleLogout}>Logout</li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <button
              className="hamburger-button"
              onClick={() => setPopup(!popup)}
            >
              <div className="line"></div>
              <div className="line short"></div>
              <div className="line"></div>
            </button>
          )}

          {popup && !isAuthenticated && (
            <div className="profile-dropdown">
              <ul>
                <li onClick={toggleLoginPopup}>Login</li>
                <li onClick={toggleSignupPopup}>Sign Up</li>
              </ul>
            </div>
          )}

          {loginPopup && (
            <div className="login-popup">
              <button
                style={{ width: "20px", background: "none" }}
                className="close-popup-btn"
                onClick={() => setLoginPopup(false)}
              >
                ✖
              </button>
              <h4>Login or Sign up</h4>
              <h3>Welcome to paradise</h3>
              <div id="log-in-phoneNo-div">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email"
                />
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Your Password"
                />
              </div>
              <button onClick={handleLogin}>Continue</button>
              {error && <p style={{ color: "red" }}>{error}</p>}
            </div>
          )}
        </div>
      </div>

 
   
  );
};

export default Header;
