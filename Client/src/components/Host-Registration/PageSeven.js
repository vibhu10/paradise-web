import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../Host-Registration/css/pageSeven.css"; // Reference your existing CSS file

export function PageSeven({ handleBack, handleNext, handleSaveProperty }) {
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [error, setError] = useState(""); // Error state for validation

  const amenities = [
    {
      category: "Essentials",
      options: [
        { id: "wifi", label: "Wifi", icon: "fas fa-wifi" },
        { id: "air_conditioning", label: "Air Conditioning", icon: "fas fa-snowflake" },
      ],
    },
    {
      category: "Kitchen & Dining",
      options: [
        { id: "kitchen", label: "Kitchen", icon: "fas fa-utensils" },
      ],
    },
    {
      category: "Laundry",
      options: [
        { id: "washing_machine", label: "Washing Machine", icon: "fas fa-tshirt" },
      ],
    },
    {
      category: "Parking",
      options: [
        { id: "free_parking", label: "Free parking on premises", icon: "fas fa-parking" },
        { id: "paid_parking", label: "Paid parking on premises", icon: "fas fa-dollar-sign" },
      ],
    },
    {
      category: "Workspace",
      options: [
        { id: "workspace", label: "Dedicated Workspace", icon: "fas fa-laptop" },
      ],
    },
    {
      category: "Entertainment",
      options: [
        { id: "tv", label: "TV", icon: "fas fa-tv" },
      ],
    },
    {
      category: "Outdoor & Recreation",
      options: [
        { id: "pool", label: "Pool", icon: "fas fa-swimming-pool" },
        { id: "firepit", label: "Firepit", icon: "fas fa-fire-alt" },
        { id: "outdoor_shower", label: "Outdoor Shower", icon: "fas fa-shower" },
      ],
    },
    {
      category: "Bathroom",
      options: [
        { id: "bathtub", label: "Bathtub", icon: "fas fa-bathtub" },
      ],
    },
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

    // Group selected amenities by category
    const formattedAmenities = amenities.map((category) => ({
      category: category.category,
      options: category.options
        .filter((option) => selectedAmenities.includes(option.id))
        .map((option) => option.label), // Map to labels or IDs
    })).filter((category) => category.options.length > 0); // Remove empty categories

    // Debugging log to ensure the format is correct
    console.log("Formatted Amenities:", formattedAmenities);

    // Save the formatted data to the parent
    await handleSaveProperty({ amenities: formattedAmenities });
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
        <p className="page-seven-question">What amenities does your place have?</p>
        <div className="page-seven-grid">
          {amenities.flatMap((category) => category.options).map((amenity) => (
            <div
              key={amenity.id}
              className={`page-seven-amenity ${
                selectedAmenities.includes(amenity.id) ? "selected" : ""
              }`}
              onClick={() => toggleAmenity(amenity.id)}
            >
              <i className={`${amenity.icon} page-seven-icon`}></i>
              <p className="page-seven-label">{amenity.label}</p>
            </div>
          ))}
        </div>
      </div>

      {error && <p className="page-seven-error">{error}</p>}

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
