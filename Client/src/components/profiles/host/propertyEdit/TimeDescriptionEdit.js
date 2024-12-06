import React, { useState, useEffect } from "react";
import "./TimeDescription.css";

export default function TimeAndDescriptionEdit({
  selectedPropertyData, // Data from the parent

  onSave,               // Save function from the parent
}) {
  console.log(selectedPropertyData,"tesing")
  // Initialize state with default values
  const [title, setTitle] = useState("");
  const [internalName, setInternalName] = useState("");
  const [description, setDescription] = useState("");
  const [propertyId, setPropertyId] = useState(null);
  const [loading, setLoading] = useState(false);

  // Sync with parent data when `selectedPropertyData` changes
  useEffect(() => {
    if (selectedPropertyData) {
      const { title, internalName, description, id } = selectedPropertyData;
      setTitle(title || "");
      setInternalName(internalName || "");
      setDescription(description || "");
      setPropertyId(id || null); // Ensure `id` is saved
    }
  }, [selectedPropertyData]);

  // Handle Save
  const handleSave = async () => {
    setLoading(true);
    try {
      const updatedData = {
        propertyId,  // Include the `propertyId`
        title,
        internalName,
        description,
      };
      await onSave(updatedData); // Call parent save function
    } catch (error) {
      console.error("Error saving data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Handle Cancel - Reset fields to initial parent values
  const handleCancel = () => {
    if (selectedPropertyData && selectedPropertyData.property) {
      const { title, internalName, description } = selectedPropertyData.property;
      setTitle(title || "");
      setInternalName(internalName || "");
      setDescription(description || "");
    }
  };

  // Display a loading state if no data
  if (!selectedPropertyData) {
    return <p>Loading data...</p>;
  }

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
          {/* Title */}
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

          {/* Internal Name */}
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
              className={`char-limit ${internalName.length > 50 ? "error" : ""}`}
            >
              {`${internalName.length}/50`}
            </p>
          </div>

          {/* Description */}
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

          {/* Action Buttons */}
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
