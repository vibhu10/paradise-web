import React, { useState } from "react";
import './UserInfo.css';

function UserInfo({ userData, updateProfile }) {
  const [editingField, setEditingField] = useState(null); // Track which field is being edited
  const [formValue, setFormValue] = useState(""); // Temporary value for input

  // Handle editing state
  const handleEdit = (field, currentValue) => {
    setEditingField(field);
    setFormValue(currentValue || ""); // Set the current value in the input
  };

  // Handle saving the updated value
  const handleSave = async (field) => {
    const updatedData = { ...userData, [field]: formValue };
    await updateProfile(updatedData); // Call the update function
    setEditingField(null); // Exit editing mode
  };

  // Handle canceling the edit
  const handleCancel = () => {
    setEditingField(null);
    setFormValue("");
  };

  return (
    <div className="user-info">
      <div className="title">Personal Info</div>
      <div className="description">
        Lorem Ipsum has been the industry's standard dummy text ever since.
      </div>

      {/* Profile Picture Section */}
      <div className="profile-picture">
        <img 
          src={userData.profilePicture || "default-profile.jpg"} 
          alt="Profile" 
          className="profile-img" 
        />
        <button 
          className="edit-btn" 
          onClick={() => handleEdit("profilePicture", userData.profilePicture)}
        >
          Edit
        </button>
      </div>

      {/* Name Row */}
      <div className="info-row">
        <label>Name</label>
        {editingField === "firstName" ? (
          <>
            <input 
              type="text" 
              value={formValue} 
              onChange={(e) => setFormValue(e.target.value)} 
            />
            <button className="save-btn" onClick={() => handleSave("firstName")}>
              Save
            </button>
            <button className="cancel-btn" onClick={handleCancel}>
              Cancel
            </button>
          </>
        ) : (
          <>
            <span>{userData.firstName || "Not Provided"}</span>
            <button 
              className="edit-btn" 
              onClick={() => handleEdit("firstName", userData.firstName)}
            >
              Edit
            </button>
          </>
        )}
      </div>

      {/* Email Row */}
      <div className="info-row">
        <label>Email Address</label>
        {editingField === "email" ? (
          <>
            <input 
              type="email" 
              value={formValue} 
              onChange={(e) => setFormValue(e.target.value)} 
            />
            <button className="save-btn" onClick={() => handleSave("email")}>
              Save
            </button>
            <button className="cancel-btn" onClick={handleCancel}>
              Cancel
            </button>
          </>
        ) : (
          <>
            <span>{userData.email || "Not Provided"}</span>
            {/* <button 
              className="edit-btn" 
              onClick={() => handleEdit("email", userData.email)}
            >
              Edit
            </button> */}
          </>
        )}
      </div>

      {/* Phone Number Row */}
      <div className="info-row">
        <label>Phone Numbers</label>
        {editingField === "mobile" ? (
          <>
            <input 
              type="text" 
              value={formValue} 
              onChange={(e) => setFormValue(e.target.value)} 
            />
            <button className="save-btn" onClick={() => handleSave("mobile")}>
              Save
            </button>
            <button className="cancel-btn" onClick={handleCancel}>
              Cancel
            </button>
          </>
        ) : (
          <>
            <span>{userData.mobile ? `+91 ${userData.mobile}` : "Not Provided"}</span>
            <button 
              className="edit-btn" 
              onClick={() => handleEdit("mobile", userData.mobile)}
            >
              Edit
            </button>
          </>
        )}
      </div>

      {/* Government ID Row */}
      <div className="info-row">
        <label>Government ID</label>
        {editingField === "governmentId" ? (
          <>
            <input 
              type="text" 
              value={formValue} 
              onChange={(e) => setFormValue(e.target.value)} 
            />
            <button className="save-btn" onClick={() => handleSave("governmentId")}>
              Save
            </button>
            <button className="cancel-btn" onClick={handleCancel}>
              Cancel
            </button>
          </>
        ) : (
          <>
            <span>{userData.governmentId || "Not Provided"}</span>
            <button 
              className="add-btn" 
              onClick={() => handleEdit("governmentId", userData.governmentId)}
            >
              {userData.governmentId ? "Edit" : "Add"}
            </button>
          </>
        )}
      </div>

      {/* Address Row */}
      <div className="info-row">
        <label>Address</label>
        {editingField === "address" ? (
          <>
            <input 
              type="text" 
              value={formValue} 
              onChange={(e) => setFormValue(e.target.value)} 
            />
            <button className="save-btn" onClick={() => handleSave("address")}>
              Save
            </button>
            <button className="cancel-btn" onClick={handleCancel}>
              Cancel
            </button>
          </>
        ) : (
          <>
            <span>{userData.address || "Not Provided"}</span>
            <button 
              className="add-btn" 
              onClick={() => handleEdit("address", userData.address)}
            >
              {userData.address ? "Edit" : "Add"}
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default UserInfo;
