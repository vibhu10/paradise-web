import React, { useDebugValue } from 'react';
import './Sidebar.css';
import {
  FaUser,
  FaShieldAlt,
  FaCalendarAlt,
  FaMoneyBillWave,
  FaHome,
  FaBullhorn,
  FaBell,
  FaGift,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Sidebar = ({ activeComponent, setActiveComponent, userData }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div className="sidebar-profilePage-container">
      <div className="sidebar-profilePage-div1">
        <div className="profile-header">
          <img
            className="profile-picture"
            src="https://via.placeholder.com/60" // Replace with actual image URL
            alt="User"
          />
          <div className="profile-info">
            <h4>{userData.firstName}</h4>
            <p className="profile-role">Guest</p>
          </div>
        </div>
        <div className="profile-confirmed">
          <p>
            <strong>{userData.firstName} confirmed information</strong>
          </p>
          <p>
            <i className="bi bi-envelope"></i> Email address
          </p>
        </div>
        <div className="profile-verify">
          <h5>Verify your identity</h5>
          <p>
            Before you book or host on Paradise, you'll need to complete this step.
          </p>
          <button className="btn-verify">Get verified</button>
          {userData.isHost === 'true' ? (
            <button
              className="btn-switch"
              onClick={() => navigate('/hostlogin')} // Navigate to /hostlogin
            >
              Switch to Host
            </button>
          ) : null}
        </div>
      </div>

      <div className="sidebar-profilePage-div2">
        <ul className="menu">
          <li
            className={`menu-item ${activeComponent === 'UserInfo' ? 'active' : ''}`}
            onClick={() => setActiveComponent('UserInfo')}
          >
            <FaUser className="menu-icon" />
            User Info
          </li>
          <li
            className={`menu-item ${activeComponent === 'LoginSecurity' ? 'active' : ''}`}
            onClick={() => setActiveComponent('LoginSecurity')}
          >
            <FaShieldAlt className="menu-icon" />
            Login & Security
          </li>
          <li
            className={`menu-item ${activeComponent === 'Reservations' ? 'active' : ''}`}
            onClick={() => setActiveComponent('Reservations')}
          >
            <FaCalendarAlt className="menu-icon" />
            Reservations
          </li>
          <li
            className={`menu-item ${activeComponent === 'Payments' ? 'active' : ''}`}
            onClick={() => setActiveComponent('Payments')}
          >
            <FaMoneyBillWave className="menu-icon" />
            Payments
          </li>
          <li
            className={`menu-item ${activeComponent === 'ListYourProperty' ? 'active' : ''}`}
            onClick={() => setActiveComponent('ListYourProperty')}
          >
            <FaHome className="menu-icon" />
            List Your Property
          </li>
          <li
            className={`menu-item ${activeComponent === 'BecomeInfluencer' ? 'active' : ''}`}
            onClick={() => setActiveComponent('BecomeInfluencer')}
          >
            <FaBullhorn className="menu-icon" />
            Become an Influencer
          </li>
          <li
            className={`menu-item ${activeComponent === 'Notifications' ? 'active' : ''}`}
            onClick={() => setActiveComponent('Notifications')}
          >
            <FaBell className="menu-icon" />
            Notifications
          </li>
          <li
            className={`menu-item ${activeComponent === 'ReferralProgram' ? 'active' : ''}`}
            onClick={() => setActiveComponent('ReferralProgram')}
          >
            <FaGift className="menu-icon" />
            Referral Program
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
