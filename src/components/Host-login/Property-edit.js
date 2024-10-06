import React, { useState } from 'react';
import PhotoEdit from './PhotoEdit';
import TimeAndDescriptionEdit from './TimeDescriptionEdit';
import AmenitiesEdit from './AmenitiesEdit';
import PricingAvailabilityEdit from './PricingAvailabilityEdit';
import HouseRulesEdit from './HouseRulesEdit';
import AccessibilityEdit from './AccessibilityEdit';
import InfluencerSettings from './InfluencerSettings';

export default function PropertyEdit({ selectedPropertyData }) {
 
  const [activeTab, setActiveTab] = useState('Photos');


  const renderComponent = () => {
    switch (activeTab) {
      case 'Photos':
        return <PhotoEdit/>;
      case 'Time&Description':
        return <TimeAndDescriptionEdit/>;
      case 'Amenities':
        return <AmenitiesEdit />;
      case 'Pricing & Availability':
        return <PricingAvailabilityEdit />;
      case 'House Rules':
        return <HouseRulesEdit/>;
      case 'Accesibility':
        return <AccessibilityEdit />;
      case 'Influencer Settings':
        return <InfluencerSettings />;
      default:
        return null;
    }
  };

  return (
    <div className="host-Propertyedit-page">
      <div className="Propertyedit-head">
        <div className="Propertyedit-head-div1">
          <h4 style={{ fontWeight: 700 }}>Listing editor</h4>
          <p>Your Property</p>
          <p>Check-in Guide</p>
        </div>
        <div className="Propertyedit-head-div2">
          <ul>
            {['Photos', 'Time&Description', 'Amenities', 'Pricing & Availability', 'House Rules', 'Accesibility', 'Influencer Settings'].map((item) => (
              <li
                key={item}
                onClick={() => setActiveTab(item)}
                style={{
                  cursor: 'pointer',
                  color: activeTab === item ? 'green' : 'black', 
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="propertyEdit-body">
        {/* Render the selected component */}
        {renderComponent()}
      </div>
    </div>
  );
}
