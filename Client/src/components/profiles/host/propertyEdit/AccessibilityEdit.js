import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

import './accessibility.css'
export default function AccessibilityEdit() {
  const [expanded, setExpanded] = useState(null);
  const [parkingSpotPhoto, setParkingSpotPhoto] = useState(null);

  const handleFileChange = (e) => {
    setParkingSpotPhoto(e.target.files[0]);
  };

  const handleAccordionToggle = (section) => {
    setExpanded(expanded === section ? null : section);
  };

  const icons = {
    parkingSpot: 'bi bi-car-front',
    litPath: 'bi bi-lightbulb',
    stepFreePath: 'bi bi-signpost-2',
    stepFreeEntrance: 'bi bi-door-open',
    wideEntrance: 'bi bi-arrows-expand',
    poolHoist: 'bi bi-water',
    ceilingHoist: 'bi bi-life-preserver',
  };

  const featureTitles = {
    parkingSpot: 'Accessible parking spot',
    litPath: 'Lit path to the guest entrance',
    stepFreePath: 'Step-free path to the guest entrance',
    stepFreeEntrance: 'Step-free guest entrance',
    wideEntrance: 'Guest entrance wider than 32 inches (81 centimetres)',
    poolHoist: 'Swimming pool or hot tub hoist',
    ceilingHoist: 'Ceiling or mobile hoist',
  };

  return (
    <div className="accessibility-edit">
      <div className="accordion">
        {/* Accessible Parking Spot Accordion */}
        <div className="accordion-item">
          <div
            className="accordion-header"
            onClick={() => handleAccordionToggle('parkingSpot')}
          >
            <i className={`${icons.parkingSpot} icon`}></i>
            <span className="title">{featureTitles.parkingSpot}</span>
            <span className="toggle">
              {expanded === 'parkingSpot' ? '-' : '+'}
            </span>
          </div>
          {expanded === 'parkingSpot' && (
            <div className="accordion-content">
              <p>There is a disabled parking spot or a parking space at least 2.4m.</p>
              <div className="photo-upload">
                <input
                  type="file"
                  id="upload"
                  style={{ display: 'none' }}
                  onChange={handleFileChange}
                />
                <label htmlFor="upload" className="upload-placeholder">
                  {parkingSpotPhoto ? (
                    <span>{parkingSpotPhoto.name}</span>
                  ) : (
                    <div>
                      <i className="bi bi-image" style={{ fontSize: '24px' }}></i>
                      <p>Add photos</p>
                    </div>
                  )}
                </label>
                <p className="upload-note">
                  After you submit, we'll review your photos. Approved accessibility features will be added to your listing.
                </p>
              </div>
              <div className="buttons">
                <button className="btn btn-light">Cancel</button>
                <button className="btn btn-success">Save</button>
              </div>
            </div>
          )}
        </div>

        {/* Other Accessibility Features */}
        {Object.keys(featureTitles).map((feature, index) => (
          feature !== 'parkingSpot' && (
            <div key={index} className="accordion-item">
              <div
                className="accordion-header"
                onClick={() => handleAccordionToggle(feature)}
              >
                <i className={`${icons[feature]} icon`}></i>
                <span className="title">{featureTitles[feature]}</span>
                <span className="toggle">
                  {expanded === feature ? '-' : '+'}
                </span>
              </div>
              {expanded === feature && (
                <div className="accordion-content">
                  <p>Details about {featureTitles[feature]}</p>
                </div>
              )}
            </div>
          )
        ))}
      </div>
    </div>
  );
}
