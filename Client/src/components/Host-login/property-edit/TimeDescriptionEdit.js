import React, { useState, useEffect } from "react";
import "../Host-login-Css/TimeDescription.css";

export default function TimeAndDescriptionEdit({
  selectedPropertyData,
  onEditProperty,
}) {
  const {
    title: initialTitle = "",
    internalName: initialInternalName = "",
    description: initialDescription = "",
  } = selectedPropertyData || {};

  const [title, setTitle] = useState(initialTitle);
  const [internalName, setInternalName] = useState(initialInternalName);
  const [description, setDescription] = useState(initialDescription);
  const [loading, setLoading] = useState(false); // Local loading state

  useEffect(() => {
    if (selectedPropertyData?.id) {
      setTitle(selectedPropertyData.title || "");
      setInternalName(selectedPropertyData.internalName || "");
      setDescription(selectedPropertyData.description || "");
    }
  }, [selectedPropertyData?.id]);

  const handleSave = async () => {
    setLoading(true); // Show loading spinner
    const updatedData = { title, internalName, description };

    try {
      await onEditProperty(updatedData); // Wait for the parent to handle the update
    } catch (error) {
      console.error("Failed to update property:", error);
    } finally {
      setLoading(false); // Hide loading spinner
    }
  };

  const handleCancel = () => {
    setTitle(initialTitle);
    setInternalName(initialInternalName);
    setDescription(initialDescription);
  };

  return (
    <div className="time-and-description-edit">
      <h3 className="section-heading">Title & Description</h3>

      {loading ? (
        <div className="loading-overlay">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <div className="form-group">
            <label htmlFor="title" className="form-label">
              English Title
            </label>
            <textarea
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="form-input"
              maxLength={50}
              placeholder="Enter a catchy title (up to 50 characters)"
            />
            <p className={`char-limit ${title.length > 50 ? "error" : ""}`}>
              {`${title.length}/50`}
            </p>
          </div>

          <div className="form-group">
            <label htmlFor="internalName" className="form-label">
              Internal Name
            </label>
            <textarea
              id="internalName"
              value={internalName}
              onChange={(e) => setInternalName(e.target.value)}
              className="form-input"
              maxLength={50}
              placeholder="For internal use only (up to 50 characters)"
            />
            <p
              className={`char-limit ${
                internalName.length > 50 ? "error" : ""
              }`}
            >
              {`${internalName.length}/50`}
            </p>
          </div>

          <div className="form-group">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="form-textarea"
              placeholder="Provide a detailed description of your property"
            />
          </div>

          <div className="button-group">
            <button className="cancel-button" onClick={handleCancel}>
              Cancel
            </button>
            <button className="save-button" onClick={handleSave}>
              Save
            </button>
          </div>
        </>
      )}
    </div>
  );
}
