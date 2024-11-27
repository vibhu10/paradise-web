import React, { useState, useEffect } from "react";
import "../Host-login-Css/amenites.css";

// List of amenities with their corresponding Font Awesome icon classes
const amenitiesList = [
  { name: "wifi", displayName: "Wifi", icon: "fas fa-wifi" },
  { name: "tv", displayName: "TV", icon: "fas fa-tv" },
  { name: "kitchen", displayName: "Kitchen", icon: "fas fa-utensils" },
  { name: "washing_machine", displayName: "Washing Machine", icon: "fas fa-soap" },
  { name: "free_parking", displayName: "Free Parking", icon: "fas fa-parking" },
  { name: "paid_parking", displayName: "Paid Parking", icon: "fas fa-car" },
  { name: "air_conditioning", displayName: "Air Conditioning", icon: "fas fa-snowflake" },
  { name: "workspace", displayName: "Workspace", icon: "fas fa-laptop" },
  { name: "pool", displayName: "Pool", icon: "fas fa-swimmer" },
  { name: "hot_tub", displayName: "Hot Tub", icon: "fas fa-hot-tub" },
  { name: "firepit", displayName: "Firepit", icon: "fas fa-fire" },
  { name: "outdoor_shower", displayName: "Outdoor Shower", icon: "fas fa-shower" },
];

export default function AmenitiesEdit({ selectedPropertyData, onEditProperty }) {
  const [selectedAmenities, setSelectedAmenities] = useState([]);

  // Sync the state with incoming data
  useEffect(() => {
    if (selectedPropertyData && selectedPropertyData.amenities) {
      setSelectedAmenities(selectedPropertyData.amenities);
    }
  }, [selectedPropertyData]);

  // Toggle amenities selection
  const toggleAmenity = (amenity) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity)
        ? prev.filter((a) => a !== amenity)
        : [...prev, amenity]
    );
  };

  // Handle cancel action
  const handleCancel = () => {
    setSelectedAmenities(selectedPropertyData?.amenities || []);
  };

  // Handle save action
  const handleSave = () => {
    onEditProperty(selectedAmenities);
  };

  return (
    <div className="amenities-edit-container">
      <h2>Amenities</h2>
      <div className="amenities-grid">
        {amenitiesList.map((amenity) => (
          <div
            key={amenity.name}
            className={`amenity-item ${
              selectedAmenities.includes(amenity.name) ? "selected" : ""
            }`}
            onClick={() => toggleAmenity(amenity.name)}
          >
            <div className="amenity-icon">
              <i className={amenity.icon}></i>
            </div>
            <span>{amenity.displayName}</span>
          </div>
        ))}
      </div>
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
