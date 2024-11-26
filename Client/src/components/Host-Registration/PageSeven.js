import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../Host-Registration/css/pageSeven.css"; // Reference the new CSS file

export function PageSeven({ handleBack, handleNext, handleSaveProperty }) {
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [error, setError] = useState(""); // Error state for validation

  const amenities = [
    { id: "wifi", label: "Wifi", icon: "fas fa-wifi" },
    { id: "tv", label: "TV", icon: "fas fa-tv" },
    { id: "kitchen", label: "Kitchen", icon: "fas fa-utensils" },
    { id: "washing_machine", label: "Washing Machine", icon: "fas fa-tshirt" },
    { id: "free_parking", label: "Free parking on premises", icon: "fas fa-parking" },
    { id: "paid_parking", label: "Paid parking on premises", icon: "fas fa-dollar-sign" },
    { id: "air_conditioning", label: "Air Conditioning", icon: "fas fa-snowflake" },
    { id: "workspace", label: "Dedicated Workspace", icon: "fas fa-laptop" },
    { id: "pool", label: "Pool", icon: "fas fa-swimming-pool" },
    { id: "hot_tub", label: "Hot tub", icon: "fas fa-hot-tub" },
    { id: "firepit", label: "Firepit", icon: "fas fa-fire-alt" },
    { id: "outdoor_shower", label: "Outdoor shower", icon: "fas fa-shower" },
  ];

  const toggleAmenity = (id) => {
    setSelectedAmenities((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((amenityId) => amenityId !== id)
        : [...prevSelected, id]
    );
    setError(""); // Clear the error when an amenity is selected
  };

  const handleNextClick = async () => {
    if (selectedAmenities.length === 0) {
      setError("Please select at least one amenity to proceed.");
      return;
    }
    await handleSaveProperty({ amenities: selectedAmenities });
    handleNext();
  };

  return (
    <div className="page-seven-container">
      {/* Header */}
      <p className="page-seven-title">Tell guests what your place has to offer</p>
      <p className="page-seven-subtitle">
        You can add more amenities after you publish your listing.
      </p>

      {/* Amenities Section */}
      <div className="page-seven-amenities-section">
        <p className="page-seven-question">What about these guest favourites?</p>
        <div className="page-seven-grid">
          {amenities.map((amenity) => {
            const isSelected = selectedAmenities.includes(amenity.id);
            return (
              <div
                onClick={() => toggleAmenity(amenity.id)}
                key={amenity.id}
                className={`page-seven-amenity ${isSelected ? "selected" : ""}`}
              >
                <i className={`${amenity.icon} page-seven-icon`}></i>
                <p className="page-seven-label">{amenity.label}</p>
              </div>
            );
          })}
        </div>
        {error && <p className="page-seven-error">{error}</p>} {/* Display error message */}
      </div>

 {/* Footer Buttons */}
 <div className="page-seven-footer">
                <button className="page-seven-footer-button" onClick={handleBack}>
                    Back
                </button>
                <div className="page-seven-progress-bar"></div>
                <button className="page-seven-footer-button" onClick={handleNextClick}>
                    Next
                </button>
            </div>
    </div>
  );
}
