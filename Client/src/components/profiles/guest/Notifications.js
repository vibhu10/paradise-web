import React, { useState } from "react";
import "./Notifications.css";

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      text: "Lorem Ipsum is simply dummy Lorem Ipsum has been the industry's standard dummy text ever since",
      date: "29–31 Aug",
    },
    {
      id: 2,
      text: "Lorem Ipsum is simply dummy Lorem Ipsum has been the industry's standard dummy text ever since",
      date: "29–31 Aug",
    },
    {
      id: 3,
      text: "Lorem Ipsum is simply dummy Lorem Ipsum has been the industry's standard dummy text ever since",
      date: "29–31 Aug",
    },
    {
      id: 4,
      text: "Lorem Ipsum is simply dummy Lorem Ipsum has been the industry's standard dummy text ever since",
      date: "29–31 Aug",
    },
  ];

  // State for toggle switches
  const [preferences, setPreferences] = useState({
    email: false,
    sms: false,
    text: false,
  });

  // Handle toggle switch changes
  const handleToggle = (preference) => {
    setPreferences({ ...preferences, [preference]: !preferences[preference] });
  };

  return (
    <div className="notifications-page">
      <h1>Notifications</h1>
      <p className="notifications-description">
        Lorem Ipsum has been the industry's standard dummy text ever since
      </p>

      <div className="notifications-list">
        {notifications.map((notification) => (
          <div key={notification.id} className="notification-item">
            <div className="notification-content">
              <img
                src="https://via.placeholder.com/50"
                alt="User Avatar"
                className="notification-avatar"
              />
              <div className="notification-text">
                <p>{notification.text}</p>
                <span>{notification.date}</span>
              </div>
            </div>
            <button style={{backgroundColor:"white",color:"black ",width:"1px"}}>✕</button>
          </div>
        ))}
      </div>

      <div className="notification-preferences">
        <h3>Edit Notification preferences</h3>
        <div className="preferences-options">
          <div className="preference-item">
            <span>Email</span>
            <div
              className={`toggle-switch ${
                preferences.email ? "active" : ""
              }`}
              onClick={() => handleToggle("email")}
            >
              <div className="toggle-thumb"></div>
            </div>
          </div>
          <div className="preference-item">
            <span>SMS</span>
            <div
              className={`toggle-switch ${
                preferences.sms ? "active" : ""
              }`}
              onClick={() => handleToggle("sms")}
            >
              <div className="toggle-thumb"></div>
            </div>
          </div>
          <div className="preference-item">
            <span>Text</span>
            <div
              className={`toggle-switch ${
                preferences.text ? "active" : ""
              }`}
              onClick={() => handleToggle("text")}
            >
              <div className="toggle-thumb"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
