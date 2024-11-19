import React, { useState } from "react";
import "./LoginSecurity.css";

const LoginSecurity = () => {
  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswords({ ...passwords, [name]: value });
  };

  const updatePassword = () => {
    alert("Password updated successfully!");
  };

  const connectAccount = (platform) => {
    alert(`Connecting to ${platform}`);
  };

  const deactivateAccount = () => {
    alert("Account deactivated.");
  };

  return (
    <div className="login-security-container">
      <h2>Login & Security</h2>
      <p>Lorem Ipsum has been the industry's standard dummy text ever since</p>

      <div className="password-section">
        <div className="form-group">
          <label>Current password</label>
          <input
            type="password"
            name="currentPassword"
            value={passwords.currentPassword}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="form-group">
          <label>New password</label>
          <input
            type="password"
            name="newPassword"
            value={passwords.newPassword}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="form-group">
          <label>Confirm password</label>
          <input
            type="password"
            name="confirmPassword"
            value={passwords.confirmPassword}
            onChange={handlePasswordChange}
          />
        </div>
        <button className="update-password-btn" onClick={updatePassword}>
          Update Password
        </button>
      </div>

      <div className="social-accounts-section">
        <h3>Social accounts</h3>
        {["Facebook", "Instagram", "YouTube", "TikTok", "Google"].map((platform, index) => (
          <div key={index} className="social-account-row">
            <span>{platform}</span>
            <button
              className={`social-connect-btn ${
                platform === "Google" ? "disconnect-btn" : "connect-btn"
              }`}
              onClick={() => connectAccount(platform)}
            >
              {platform === "Google" ? "Disconnect" : "Connect"}
            </button>
          </div>
        ))}
      </div>

      <div className="deactivate-section">
        <button className="deactivate-btn" onClick={deactivateAccount}>
          Deactivate your account
        </button>
      </div>
    </div>
  );
};

export default LoginSecurity;
