import React from "react";
import './UserInfo.css'

function App() {
  return (
    <div className="user-info">
      {/* Title and Description */}
      <div className="title">Personal Info</div>
      <div className="description">
        Lorem Ipsum has been the industry's standard dummy text ever since.
      </div>

      {/* Profile Picture Section */}
      <div className="profile-picture">
        <img src="profile.jpg" alt="Profile" className="profile-img" />
        <button className="edit-btn">Edit</button>
      </div>

      {/* Name Row */}
      <div className="info-row">
        <label>Name</label>
        <span>Wenkatesh</span>
        <button className="edit-btn">Edit</button>
      </div>

      {/* Email Row */}
      <div className="info-row">
        <label>Email Address</label>
        <span>W*******125@gmail.com</span>
        <button className="edit-btn">Edit</button>
      </div>

      {/* Phone Number Row */}
      <div className="info-row">
        <label>Phone Numbers</label>
        <span>+91 xxxx xx 1234</span>
        <button className="edit-btn">Edit</button>
      </div>

      {/* Government ID Row */}
      <div className="info-row">
        <label>Government ID</label>
        <span>Not Provided</span>
        <button className="add-btn">Add</button>
      </div>

      {/* Upload Section */}
      <div className="info-row">
        <label>Upload your government ID (license)</label>
        <span>License_name.jpg</span>
        <button className="update-btn">Update</button>
      </div>

      {/* Address Row */}
      <div className="info-row">
        <label>Address</label>
        <span>Not Provided</span>
        <button className="add-btn">Add</button>
      </div>
    </div>
  );
}

export default App;
