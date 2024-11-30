import React, { useState, useEffect } from "react";
import './HostProfile.css';
import "bootstrap/dist/css/bootstrap.min.css";
import PhotoEdit from './propertyEdit/PhotoEdit';
import TimeAndDescriptionEdit from './propertyEdit/TimeDescriptionEdit';
import AmenitiesEdit from './propertyEdit/AmenitiesEdit';
import PricingAvailabilityEdit from './propertyEdit/PricingAvailabilityEdit';
import HouseRulesEdit from './propertyEdit/HouseRulesEdit';
import AccessibilityEdit from './propertyEdit/AccessibilityEdit';
import InfluencerSettings from './propertyEdit/InfluencerSettings';
import CheckInOut from './check-in-out/Check-In-Out';
import Directions from './check-in-out/Directions';
import GuideBook from './check-in-out/Guide-book';
import HouseManual from './check-in-out/House-Manual';
import HouseRules from './check-in-out/House-Rules';
import WifiDetails from './check-in-out/Wifi-Details';

export default function HostProfile() {
  const [myProperty, setMyProperty] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeSection, setActiveSection] = useState("Your Property");
  const [activeTab, setActiveTab] = useState("Photos");

  useEffect(() => {
    async function fetchProperties() {
      setIsLoading(true);
      setError(null);

      try {
        const token = localStorage.getItem("token");
        if (!token) throw new Error("Token not found, please log in again.");

        const response = await fetch(
          "http://localhost:3000/api/property/propertiesByEmail",
          {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (!response.ok) {
          if (response.status === 401)
            throw new Error("Unauthorized - Invalid token");
          else throw new Error("Failed to fetch properties");
        }

        const data = await response.json();
        setMyProperty(data.properties || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProperties();
  }, []);

  const handlePropertyClick = (property) => {
    setSelectedProperty(property);
  };

  const handleEditProperty = async (updatedProperty) => {
    setIsLoading(true);

    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("Token not found, please log in again.");

      const response = await fetch(
        "http://localhost:3000/api/property/editProperty",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ ...updatedProperty, id: selectedProperty.id }),
        }
      );

      if (!response.ok) throw new Error("Failed to update property");

      const updatedData = await response.json();
      setMyProperty((prev) =>
        prev.map((property) =>
          property.id === updatedData.id ? updatedData : property
        )
      );
      setSelectedProperty(updatedData);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const renderTabs = () => {
    const tabs =
      activeSection === "Your Property"
        ? [
            "Photos",
            "Time & Description",
            "Amenities",
            "Pricing & Availability",
            "House Rules",
            "Accessibility",
            "Influencer Settings",
          ]
        : [
            "Check-in/out",
            "Directions",
            "House Manual",
            "House Rules",
            "Guidebook",
            "Wifi Details",
          ];

    return (
      <ul className="host-profile-tab-list">
        {tabs.map((tab) => (
          <li
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={activeTab === tab ? "active-tab" : ""}
          >
            {tab}
          </li>
        ))}
      </ul>
    );
  };

  const renderComponent = () => {
    if (!selectedProperty) return null;

    const commonProps = { selectedPropertyData: selectedProperty, onEditProperty: handleEditProperty };

    if (activeSection === "Your Property") {
      switch (activeTab) {
        case "Photos":
          return <PhotoEdit {...commonProps} />;
        case "Time & Description":
          return <TimeAndDescriptionEdit {...commonProps} />;
        case "Amenities":
          return <AmenitiesEdit {...commonProps} />;
        case "Pricing & Availability":
          return <PricingAvailabilityEdit {...commonProps} />;
        case "House Rules":
          return <HouseRulesEdit {...commonProps} />;
        case "Accessibility":
          return <AccessibilityEdit {...commonProps} />;
        case "Influencer Settings":
          return <InfluencerSettings {...commonProps} />;
        default:
          return null;
      }
    } else if (activeSection === "Check-in Guide") {
      switch (activeTab) {
        case "Check-in/out":
          return <CheckInOut {...commonProps} />;
        case "Directions":
          return <Directions {...commonProps} />;
        case "House Manual":
          return <HouseManual {...commonProps} />;
        case "House Rules":
          return <HouseRules {...commonProps} />;
        case "Guidebook":
          return <GuideBook {...commonProps} />;
        case "Wifi Details":
          return <WifiDetails {...commonProps} />;
        default:
          return null;
      }
    }
  };

  return (
    <div className="host-profile-container">
      <header className="host-profile-header">
        <img
          className="host-profile-logo"
          src="/48564e5fe8898cf62b0bbf42276d6cf3.jpeg"
          alt="paradise"
        />
        <nav className="host-profile-nav">
          <ul>
            <li onClick={() => setActiveSection("influencer")}>Influencers</li>
            <li onClick={() => setActiveSection("calendar")}>Calendar</li>
            <li
              onClick={() => setActiveSection("properties")}
              className={activeSection === "properties" ? "active" : ""}
            >
              Properties
            </li>
            <li onClick={() => setActiveSection("inbox")}>Inbox</li>
            <li onClick={() => setActiveSection("upcoming")}>Upcoming</li>
            <li onClick={() => setActiveSection("menu")}>Menu</li>
          </ul>
        </nav>
      </header>

      <main className="host-profile-main">
        {selectedProperty ? (
          <>
            <div className="host-profile-section-toggle-buttons">
              <button
                className={`host-profile-toggle-button ${activeSection === 'Your Property' ? 'active' : ''}`}
                onClick={() => setActiveSection('Your Property')}
              >
                Your Property
              </button>
              <button
                className={`host-profile-toggle-button ${activeSection === 'Check-in Guide' ? 'active' : ''}`}
                onClick={() => setActiveSection('Check-in Guide')}
              >
                Check-in Guide
              </button>
            </div>

            <button onClick={() => setSelectedProperty(null)} className="host-profile-back-button">
              ←
            </button>
            {renderTabs()}
            {renderComponent()}
          </>
        ) : isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <div className="host-profile-property-grid">
            {myProperty.map((property) => (
              <div
                key={property.id}
                className="host-profile-property-card"
                onClick={() => handlePropertyClick(property)}
              >
                <div className="host-profile-property-image">
                  <img src={property.propertyCoverPhoto} alt={property.propertyName} />
                  <div
                    className={`property-status ${property.type === "listed" ? "listed" : "in-progress"}`}
                  >
                    {property.type === "listed" ? "Listed" : "In Progress"}
                  </div>
                </div>
                <div className="host-profile-property-details">
                  <h4>{property.propertyName}</h4>
                  <p>{property.title || "No title"}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
