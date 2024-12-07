import React, { useState, useEffect } from "react";
import "./HostProfile.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Import all child components for "Your Property"
import PhotoEdit from "./propertyEdit/PhotoEdit";
import TimeAndDescriptionEdit from "./propertyEdit/TimeDescriptionEdit";
import AmenitiesEdit from "./propertyEdit/AmenitiesEdit";
import PricingAvailabilityEdit from "./propertyEdit/PricingAvailabilityEdit";
import HouseRulesEdit from "./propertyEdit/HouseRulesEdit";
import AccessibilityEdit from "./propertyEdit/AccessibilityEdit";
import InfluencerSettings from "./propertyEdit/InfluencerSettings";

// Import all child components for "Check-in Guide"
import CheckInOut from "./check-in-out/Check-In-Out";
import Directions from "./check-in-out/Directions";
import GuideBook from "./check-in-out/Guide-book";
import HouseManual from "./check-in-out/House-Manual";
import HouseRules from "./check-in-out/House-Rules";
import WifiDetails from "./check-in-out/Wifi-Details";
import UpcomingReservations from "./host-nav-bar/UpcomingReservations";

import ListingsCalendar from "./host-nav-bar/ListingsCalendar";
// Placeholder components for other sections
const Menu = () => <div>Menu Component</div>;

const Influencers = () => <div>Influencers Component</div>;
const Inbox = () => <div>Inbox Component</div>;


export default function HostProfile() {
  const [myProperty, setMyProperty] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeSection, setActiveSection] = useState("Your Property");
  const [activeTab, setActiveTab] = useState("Photos");
  const [activeSubSection, setActiveSubSection] = useState("Your Property");

  // Fetch all properties when the component mounts
  useEffect(() => {
    const fetchProperties = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const token = localStorage.getItem("token");
        if (!token) throw new Error("Token not found. Please log in again.");

        const response = await fetch(
          "http://localhost:3000/api/property/propertiesByEmail",
          {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (!response.ok) {
          const errorMessage =
            response.status === 401
              ? "Unauthorized - Invalid token."
              : "Failed to fetch properties.";
          throw new Error(errorMessage);
        }

        const data = await response.json();
        setMyProperty(data.properties || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProperties();
  }, []);

  // Fetch single property details
  const handlePropertyClick = async (property) => {
    setIsLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("Token not found. Please log in again.");

      const response = await fetch(
        `http://localhost:3000/api/property/propertyDetails?title=${encodeURIComponent(
          property.title
        )}&internalName=${encodeURIComponent(property.internalName)}`,
        {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch property details.");
      }

      const propertyDetails = await response.json();
      setSelectedProperty(propertyDetails.property);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Save updates from child components
  const handleSaveFromChild = async (updatedData) => {
    setIsLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("Token not found. Please log in again.");

      const response = await fetch(
        `http://localhost:3000/api/property/updateProperty/${updatedData.propertyId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(updatedData),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to update property.");
      }

      const data = await response.json();
      setSelectedProperty(data.property);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Render the tabs for "Your Property" or "Check-in Guide"
  const renderTabs = () => {
    const tabs =
      activeSubSection === "Your Property"
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

  // Render the active child component based on the active tab
  const renderComponent = () => {
    const commonProps = {
      selectedPropertyData: selectedProperty,
      onSave: handleSaveFromChild,
    };

    if (activeSubSection === "Your Property") {
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
    } else if (activeSubSection === "Check-in Guide") {
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

  // Render the active section
  const renderActiveSection = () => {
    if (activeSection === "Your Property") {
      return selectedProperty ? (
        <>
          <div className="host-profile-section-toggle-buttons">
            <button
              onClick={() => setActiveSubSection("Your Property")}
              className={`host-profile-toggle-button ${
                activeSubSection === "Your Property" ? "active" : ""
              }`}
            >
              Your Property
            </button>
            <button
              onClick={() => setActiveSubSection("Check-in Guide")}
              className={`host-profile-toggle-button ${
                activeSubSection === "Check-in Guide" ? "active" : ""
              }`}
            >
              Check-in Guide
            </button>
          </div>
          <button
            onClick={() => setSelectedProperty(null)}
            className="host-profile-back-button"
          >
            ← Back
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
                <img
                  src={property.coverPhotos?.cover?.image}
                  alt={property.propertyName}
                />
                <div
                  className={`property-status ${
                    property.type === "listed" ? "listed" : "in-progress"
                  }`}
                >
                  {property.type === "listed" ? "Listed" : "In Progress"}
                </div>
              </div>
              <div style={{ border: "none" }}>
                <h3 style={{ color: "#198E78", marginBottom: "5px" }}>
                  {property.internalName}
                </h3>
                <p style={{ marginTop: "0" }}>{property.title}</p>
              </div>
            </div>
          ))}
        </div>
      );
    } else if (activeSection === "Menu") {
      return <Menu />;
    } else if (activeSection === "Calendar") {
      return <ListingsCalendar/>;
    } else if (activeSection === "Influencers") {
      return <Influencers />;
    } else if (activeSection === "Inbox") {
      return <Inbox />;
    } else if (activeSection === "Upcoming") {
      return <UpcomingReservations/>;
    }
  };

  return (
    <div className="host-profile-container">
      <header className="host-profile-header">
        <img
          className="host-profile-logo"
          src="/48564e5fe8898cf62b0bbf42276d6cf3.jpeg"
          alt="Paradise"
        />
        <nav className="host-profile-nav">
          <ul>
            <li onClick={() => setActiveSection("Influencers")}>Influencers</li>
            <li onClick={() => setActiveSection("Calendar")}>Calendar</li>
            <li
              onClick={() => setActiveSection("Your Property")}
              className={activeSection === "Your Property" ? "active" : ""}
            >
              Properties
            </li>
            <li onClick={() => setActiveSection("Inbox")}>Inbox</li>
            <li onClick={() => setActiveSection("Upcoming")}>Upcoming</li>
            <li onClick={() => setActiveSection("Menu")}>Menu</li>
          </ul>
        </nav>
      </header>
      <main className="host-profile-main">{renderActiveSection()}</main>
    </div>
  );
}
