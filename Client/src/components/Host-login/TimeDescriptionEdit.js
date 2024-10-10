import React, { useState } from 'react';
import './Host-login-Css/TimeDescription.css'
export default function TimeAndDescriptionEdit({ selectedPropertyData, onSave }) {
  // Destructure data with default values to prevent 'undefined' errors
  const {
    title: initialTitle = '',
    internalName: initialInternalName = '',
    description: initialDescription = '',
  } = selectedPropertyData || {};

  // Local state to hold the editable data
  const [title, setTitle] = useState(initialTitle);
  const [internalName, setInternalName] = useState(initialInternalName);
  const [description, setDescription] = useState(initialDescription);

  // Handle save button click - this will update the parent component
  const handleSave = () => {
    const updatedData = {
      title,
      internalName,
      description,
    };

    // Call the onSave function passed from the parent
    onSave(updatedData);
  };

  // Handle cancel button click - reset to initial data
  const handleCancel = () => {
    setTitle(initialTitle);
    setInternalName(initialInternalName);
    setDescription(initialDescription);
  };

  return (
    <div className="timeandDescriptionEdit-body">
      <h3 className="section-heading">Title & Description</h3>

      {/* English Title Section */}
      <div className="form-group">
        <label className="form-label">English</label>
        <textarea
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="form-input"
          maxLength={50}
        />
        <p className="char-limit">{`${title.length}/50`}</p>
      </div>

      {/* Internal Name Section */}
      <div className="form-group">
        <label className="form-label">Internal name</label>
        <textarea
          value={internalName}
          onChange={(e) => setInternalName(e.target.value)}
          className="form-input"
          maxLength={50}
        />
        <p className="internal-note">
          The internal title is just for you – guests won't see it.
        </p>
        <p className="char-limit">{`${internalName.length}/50`}</p>
      </div>

      {/* Description Section */}
      <div className="form-group">
        <label className="form-label">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="form-textarea"
        />
      </div>

      {/* Buttons */}
      <div className="button-group">
        <button className="cancel-button" onClick={handleCancel}>Cancel</button>
        <button className="save-button" onClick={handleSave}>Save</button>
      </div>
    </div>
  );
}
