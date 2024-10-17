import React, { useState } from 'react';
import PhotoEdit from './PhotoEdit';
import TimeAndDescriptionEdit from './TimeDescriptionEdit';
import AmenitiesEdit from './AmenitiesEdit';
import PricingAvailabilityEdit from './PricingAvailabilityEdit';
import HouseRulesEdit from './HouseRulesEdit';
import AccessibilityEdit from './AccessibilityEdit';
import InfluencerSettings from './InfluencerSettings';

import CheckInOut from '../check-in-guide/Check-In-Out';
import Directions from '../check-in-guide/Directions';
import GuideBook from '../check-in-guide/Guide-book';
import HouseManual from '../check-in-guide/House-Manual';
import HouseRules from '../check-in-guide/House-Rules';
import WifiDetails from '../check-in-guide/Wifi-Details';
import "../Host-login-Css/property-edit.css";

export default function PropertyEdit({ selectedPropertyData, handleSave }) {
  const [activeTab, setActiveTab] = useState('Photos');
  const [activeSection, setActiveSection] = useState('Your Property'); // New state to handle section

  // Function to render the tabs for "Your Property"
  const renderPropertyTabs = () => {
    return (
      <ul style={{ fontWeight: 500 }}>
        {[
          'Photos',
          'Time&Description',
          'Amenities',
          'Pricing & Availability',
          'House Rules',
          'Accesibility',
          'Influencer Settings'
        ].map((item) => (
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
    );
  };

  // Function to render the tabs for "Check-in Guide"
  const renderCheckInGuideTabs = () => {
    return (
      <ul style={{ fontWeight: 500 }}>
        {[
          'Check-in/out',
          'Directions',
          'House Manual',
          'House Rules',
          'guidebook',
          'Wifi Details'
          
        ].map((item) => (
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
    );
  };

  // Function to render the correct component based on the active tab
  const renderComponent = () => {
    if (activeSection === 'Your Property') {
      switch (activeTab) {
        case 'Photos':
          return <PhotoEdit selectedPropertyData={selectedPropertyData} />;
        case 'Time&Description':
          return (
            <TimeAndDescriptionEdit
              selectedPropertyData={selectedPropertyData}
              onSave={handleSave} // Pass the onSave function to the child
            />
          );
        case 'Amenities':
          return (
            <AmenitiesEdit
              selectedPropertyData={selectedPropertyData}
              onSave={handleSave} // Pass the onSave function to the child
            />
          );
        case 'Pricing & Availability':
          return <PricingAvailabilityEdit selectedPropertyData={selectedPropertyData} onSave={handleSave} />;
        case 'House Rules':
          return <HouseRulesEdit selectedPropertyData={selectedPropertyData} onSave={handleSave} />;
        case 'Accesibility':
          return <AccessibilityEdit selectedPropertyData={selectedPropertyData} onSave={handleSave} />;
        case 'Influencer Settings':
          return <InfluencerSettings selectedPropertyData={selectedPropertyData} onSave={handleSave} />;
          default:
          return null;
      }
    } else if (activeSection === 'Check-in Guide') {
      // Placeholder content for Check-in Guide sections, modify as per your needs
      switch (activeTab) {
        case'Check-in/out':
         
         return <CheckInOut selectedPropertyData={selectedPropertyData} onSave={handleSave}/>
        case 'Directions':
          return <Directions selectedPropertyData={selectedPropertyData} onSave={handleSave}/>;
        case 'House Manual':
          return <HouseManual selectedPropertyData={selectedPropertyData} onSave={handleSave}/>;
        case 'House Rules':
          return <HouseRules selectedPropertyData={selectedPropertyData} onSave={handleSave}/>;
          case  'guidebook':
            return <GuideBook selectedPropertyData={selectedPropertyData} onSave={handleSave}/>
          case   'Wifi Details':
            return <WifiDetails selectedPropertyData={selectedPropertyData} onSave={handleSave}/>
        default:
          return null;
      }
    }
  };

  return (
    <div className="host-Propertyedit-page">
      <div className="Propertyedit-head">
        <div className="Propertyedit-head-div1">
        
          <h4 style={{ fontWeight: 700 }}>Listing editor</h4>
          <div className='button-div'>
            {/* Buttons to toggle between sections */}
            <button class={`toggle-button ${activeSection==='Your Property'?"active":""}`} onClick={() => setActiveSection('Your Property')}>Your Property</button>
            <button class={`toggle-button ${activeSection==='Check-in Guide'?"active":""}`} onClick={() => setActiveSection('Check-in Guide')}>Check-in Guide</button>
          </div>
          <button>filter</button>
        </div>
        <div className="Propertyedit-head-div2">
          {/* Conditionally render tabs based on the active section */}
          {activeSection === 'Your Property' ? renderPropertyTabs() : renderCheckInGuideTabs()}
        </div>
      </div>

      <div className="propertyEdit-body">
        {/* Render the selected component */}
        {renderComponent()}
      </div>
    </div>
  );
}
