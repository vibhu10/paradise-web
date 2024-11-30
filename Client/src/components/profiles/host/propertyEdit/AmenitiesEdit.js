import React, { useState } from "react";
import "./amenites.css";

const amenitiesData = [
  {
    category: "Essentials",
    options: [
      { id: "wifi", name: "Wi-Fi", selected: false },
      { id: "heating", name: "Heating", selected: false },
      { id: "airConditioning", name: "Air conditioning", selected: false },
      { id: "hotWater", name: "Hot water", selected: false },
      { id: "towels", name: "Towels, bed linens, soap...", selected: false },
      { id: "extraPillows", name: "Extra pillows and blankets", selected: false },
      { id: "clothingStorage", name: "Clothing storage", selected: false },
    ],
  },
  {
    category: "Kitchen & Dining",
    options: [
      { id: "microwave", name: "Microwave", selected: false },
      { id: "refrigerator", name: "Refrigerator", selected: false },
      { id: "stove", name: "Stove", selected: false },
    ],
  },
  {
    category: "Bathroom",
    options: [
      { id: "shampoo", name: "Shampoo", selected: false },
      { id: "conditioner", name: "Conditioner", selected: false },
      { id: "hairDryer", name: "Hair dryer", selected: false },
    ],
  },
];

export default function AmenitiesEdit({ selectedPropertyData, onEditProperty }) {
  // Initialize amenities with all options and set `selected` based on incoming data.
  const [amenities, setAmenities] = useState(() => {
    return amenitiesData.map((category) => {
      const incomingCategory = selectedPropertyData?.amenities?.find(
        (cat) => cat.category === category.category
      );
      return {
        ...category,
        options: category.options.map((option) => ({
          ...option,
          selected: incomingCategory?.options.some(
            (incomingOption) => incomingOption.id === option.id && incomingOption.selected
          ) || false,
        })),
      };
    });
  });

  const [selectedCategory, setSelectedCategory] = useState("Essentials");

  const handleToggleOption = (category, optionId) => {
    const updatedAmenities = amenities.map((cat) =>
      cat.category === category
        ? {
            ...cat,
            options: cat.options.map((option) =>
              option.id === optionId ? { ...option, selected: !option.selected } : option
            ),
          }
        : cat
    );
    setAmenities(updatedAmenities);
  };

  const handleSave = () => {
    if (onEditProperty) {
      onEditProperty({ ...selectedPropertyData, amenities });
    }
  };

  return (
    <div className="amenities-edit-container">
      {/* Category Tabs */}
      <div className="amenities-nav">
        {amenities.map((cat) => (
          <button
            key={cat.category}
            className={`amenity-tab ${
              cat.category === selectedCategory ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(cat.category)}
          >
            {cat.category}
          </button>
        ))}
      </div>

      {/* Amenities Grid */}
      <div className="amenities-grid">
        {amenities
          .find((cat) => cat.category === selectedCategory)
          ?.options.map((option) => (
            <div
              key={option.id}
              className={`amenity-item ${option.selected ? "selected" : ""}`}
              onClick={() => handleToggleOption(selectedCategory, option.id)}
            >
              <div className="amenity-icon">
                {/* Placeholder for actual icons */}
                <span>🔘</span>
              </div>
              <div className="amenity-name">{option.name}</div>
            </div>
          ))}
      </div>

      {/* Save and Cancel Buttons */}
      <div className="amenities-actions">
        <button
          className="btn btn-secondary"
          onClick={() =>
            setAmenities(
              amenitiesData.map((cat) => ({
                ...cat,
                options: cat.options.map((option) => ({ ...option, selected: false })),
              }))
            )
          }
        >
          Cancel
        </button>
        <button className="btn btn-primary" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
}
