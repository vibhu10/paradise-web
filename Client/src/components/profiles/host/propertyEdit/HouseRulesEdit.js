import React, { useState } from 'react';
import './houseRules.css';

export default function HouseRulesEdit({ selectedPropertyData, onEditProperty }) {
  const initialState = {
    petsAllowed: selectedPropertyData?.petsAllowed || false,
    maxPets: selectedPropertyData?.maxPets || 1,
    eventsAllowed: selectedPropertyData?.eventsAllowed || false,
    smokingAllowed: selectedPropertyData?.smokingAllowed || false,
    quietHoursEnabled: selectedPropertyData?.quietHoursEnabled || false,
    quietHoursStart: selectedPropertyData?.quietHoursStart || '23:00',
    quietHoursEnd: selectedPropertyData?.quietHoursEnd || '11:00',
    commercialPhotography: selectedPropertyData?.commercialPhotography || false,
    maxGuests: selectedPropertyData?.maxGuests || 1,
    checkInTime: selectedPropertyData?.checkInTime || '15:00',
    checkOutTime: selectedPropertyData?.checkOutTime || '11:00',
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSave = () => {
    onEditProperty(formData);
  };

  const handleCancel = () => {
    setFormData(initialState);
  };

  return (
    <div className="house-rules-edit">
      <h2>House Rules</h2>

      {/* Pets Allowed */}
      <div className="rule-item">
        <label>
          <input
            style={{ accentColor: "#198E78" }}
            type="checkbox"
            name="petsAllowed"
            checked={formData.petsAllowed}
            onChange={handleChange}
          />
          Pets allowed
        </label>
        {formData.petsAllowed && (
          <div className="sub-item">
            <label>Maximum number of pets allowed:</label>
            <input
              type="number"
              name="maxPets"
              value={formData.maxPets}
              onChange={handleChange}
              min="1"
            />
          </div>
        )}
      </div>

      {/* Events Allowed */}
      <div className="rule-item">
        <label>
          <input
            style={{ accentColor: "#198E78" }}
            type="checkbox"
            name="eventsAllowed"
            checked={formData.eventsAllowed}
            onChange={handleChange}
          />
          Events allowed
        </label>
      </div>

      {/* Smoking Allowed */}
      <div className="rule-item">
        <label>
          <input
            style={{ accentColor: "#198E78" }}
            type="checkbox"
            name="smokingAllowed"
            checked={formData.smokingAllowed}
            onChange={handleChange}
          />
          Smoking, vaping, e-cigarettes allowed
        </label>
      </div>

      {/* Quiet Hours */}
      <div className="rule-item">
        <label>Quiet hours</label>
        <label className="switch">
          <input
            type="checkbox"
            name="quietHoursEnabled"
            checked={formData.quietHoursEnabled}
            onChange={handleChange}
          />
          <span className="slider"></span>
        </label>
        {formData.quietHoursEnabled && (
          <div className="sub-item grid">
            <div>
              <label>Start Time:</label>
              <input
                type="time"
                name="quietHoursStart"
                value={formData.quietHoursStart}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>End Time:</label>
              <input
                type="time"
                name="quietHoursEnd"
                value={formData.quietHoursEnd}
                onChange={handleChange}
              />
            </div>
          </div>
        )}
      </div>

      {/* Commercial Photography */}
      <div className="rule-item">
        <label>
          <input
            style={{ accentColor: "#198E78" }}
            type="checkbox"
            name="commercialPhotography"
            checked={formData.commercialPhotography}
            onChange={handleChange}
          />
          Commercial photography and filming allowed
        </label>
      </div>

      {/* Maximum Guests */}
      <div className="rule-item">
        <label>Maximum number of guests:</label>
        <input
          type="number"
          name="maxGuests"
          value={formData.maxGuests}
          onChange={handleChange}
          min="1"
        />
      </div>

      {/* Check-in and Check-out Times */}
      <div className="rule-item">
        <label>Check-in and Check-out times:</label>
        <div className="sub-item grid">
          <div>
            <label>Check-in:</label>
            <input
              type="time"
              name="checkInTime"
              value={formData.checkInTime}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Check-out:</label>
            <input
              type="time"
              name="checkOutTime"
              value={formData.checkOutTime}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="buttons">
        <button className="cancel" onClick={handleCancel}>
          Cancel
        </button>
        <button className="save" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
}
