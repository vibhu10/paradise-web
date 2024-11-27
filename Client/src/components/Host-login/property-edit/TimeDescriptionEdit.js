import React, { useState } from 'react';
import '../Host-login-Css/TimeDescription.css';

export default function TimeAndDescriptionEdit({ selectedPropertyData, onEditProperty }) {
  // Destructure and set default values
  const {
    title: initialTitle = '',
    internalName: initialInternalName = '',
    description: initialDescription = '',
  } = selectedPropertyData || {};

  const [title, setTitle] = useState(initialTitle);
  const [internalName, setInternalName] = useState(initialInternalName);
  const [description, setDescription] = useState(initialDescription);

  // Save button handler
  const handleSave = () => {
    const updatedData = { title, internalName, description };
    onEditProperty(updatedData);
  };

  // Cancel button handler
  const handleCancel = () => {
    setTitle(initialTitle);
    setInternalName(initialInternalName);
    setDescription(initialDescription);
  };

  return (
    <div className="time-and-description-edit">
      <h3 className="section-heading">Title & Description</h3>

      {/* Title Section */}
      <div className="form-group">
        <label htmlFor="title" className="form-label">English Title</label>
        <textarea
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="form-input"
          maxLength={50}
          placeholder="Enter a catchy title (up to 50 characters)"
        />
        <p className={`char-limit ${title.length > 50 ? 'error' : ''}`}>
          {`${title.length}/50`}
        </p>
      </div>

      {/* Internal Name Section */}
      <div className="form-group">
        <label htmlFor="internalName" className="form-label">Internal Name</label>
        <textarea
          id="internalName"
          value={internalName}
          onChange={(e) => setInternalName(e.target.value)}
          className="form-input"
          maxLength={50}
          placeholder="For internal use only (up to 50 characters)"
        />
        <p className="internal-note">
          The internal name is for your reference only – guests won't see it.
        </p>
        <p className={`char-limit ${internalName.length > 50 ? 'error' : ''}`}>
          {`${internalName.length}/50`}
        </p>
      </div>

      {/* Description Section */}
      <div className="form-group">
        <label htmlFor="description" className="form-label">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="form-textarea"
          placeholder="Provide a detailed description of your property"
        />
        <p className="description-note">
          Add a compelling description to attract guests.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="button-group">
        <button className="cancel-button" onClick={handleCancel}>
          Cancel
        </button>
        <button className="save-button" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
}
