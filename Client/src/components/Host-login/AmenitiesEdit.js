import React, { useState } from 'react';
import './Host-login-Css/amenites.css'
// List of amenities with their corresponding Font Awesome icon classes
const amenitiesList = [
  { name: 'Wifi', icon: 'fas fa-wifi' },
  { name: 'TV', icon: 'fas fa-tv' },
  { name: 'Kitchen', icon: 'fas fa-utensils' },
  { name: 'Washing machine', icon: 'fas fa-soap' },
  { name: 'Free parking on premises', icon: 'fas fa-parking' },
  { name: 'Paid parking on premises', icon: 'fas fa-car' },
  { name: 'Air conditioning', icon: 'fas fa-snowflake' },
  { name: 'Dedicated workspace', icon: 'fas fa-laptop' },
  { name: 'Pool', icon: 'fas fa-swimmer' },
  { name: 'Hot tub', icon: 'fas fa-hot-tub' },
  { name: 'Firepit', icon: 'fas fa-fire' },
  { name: 'Outdoor shower', icon: 'fas fa-shower' }
];

export default function AmenitiesEdit({ selectedPropertyData, onSave }) {
  const [selectedAmenities, setSelectedAmenities] = useState(selectedPropertyData.amenities || []);
console.log(selectedAmenities,"fdfd")
  const toggleAmenity = (amenity) => {
    if (selectedAmenities.includes(amenity)) {
      setSelectedAmenities(selectedAmenities.filter(a => a !== amenity));
    } else {
      setSelectedAmenities([...selectedAmenities, amenity]);
    }
  };

  const handleCancel = () => {
    // Reset to the initial data from props
    setSelectedAmenities(selectedPropertyData.amenities || []);
  };

function handeSave(){
onSave(selectedAmenities)
}

  return (
    <div className="amenities-edit-container">
      <h2>Amenities</h2>
      <div className="amenities-grid">
        {amenitiesList.map((amenity) => (
          <div
            key={amenity.name}
            className={`amenity-item ${selectedAmenities.includes(amenity.name) ? 'selected' : ''}`}
            onClick={() => toggleAmenity(amenity.name)}
          >
            <div className="amenity-icon">
              <i className={amenity.icon}></i>
            </div>
            <span>{amenity.name}</span>
          </div>
        ))}
      </div>
      <div className="button-group">
        <button className="cancel-button" onClick={handleCancel}>Cancel</button>
        <button className="save-button" onClick={handeSave}>Save</button>
      </div>
    </div>
  );
}
