import { useState, useEffect } from "react";
import "./UserHome.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PropertyEdit from "./property-edit/Property-edit";

export default function UserHome() {
  const [myProperty, setMyProperty] = useState([]);
  console.log(myProperty,"this is data in myproperty userhome")
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeSection, setActiveSection] = useState("properties");

  // Fetch user properties when "properties" section is active
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
        if (data.properties && Array.isArray(data.properties)) {
          setMyProperty(data.properties);
        } else {
          throw new Error("No properties found");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    if (activeSection === "properties") {
      fetchProperties();
    }
  }, [activeSection]);

  // Handle property selection
  const handlePropertyClick = (property) => {
    setSelectedProperty(property);
  };

  // Handle returning to the property list
  const handleBackToList = () => {
    setSelectedProperty(null);
  };

  // Handle editing a propertyconst
  const handleEditProperty = async (updatedProperty) => {
  setIsLoading(true);

  try {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("Token not found, please log in again.");

    const response = await fetch("http://localhost:3000/api/property/editProperty", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ ...updatedProperty, id: selectedProperty.id }),
    });

    if (!response.ok) throw new Error("Failed to update property");

    const updatedData = await response.json();

    setMyProperty((prevProperties) =>
      prevProperties.map((property) =>
        property.id === updatedData.id ? updatedData : property
      )
    );
    setSelectedProperty(updatedData); // Keep the edited property visible
  } catch (error) {
    setError(error.message);
  } finally {
    setIsLoading(false);
  }
   }
  return (
    <div className="UserHome-container">
      <header className="UserHome-header">
        <img
          className="UserHome-logo"
          src="/48564e5fe8898cf62b0bbf42276d6cf3.jpeg"
          alt="paradise"
        />
        <nav className="UserHome-nav">
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
        <div>
          
        </div>
      </header>

      <main className="UserHome-main">
        {isLoading ? (
          <div className="UserHome-loading-overlay">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : error ? (
          <p>Error: {error}</p>
        ) : selectedProperty ? (
          <>
            <button className="UserHome-back-button" onClick={handleBackToList}>
              ← Back
            </button>
            <PropertyEdit
              selectedPropertyData={selectedProperty}
              onEditProperty={handleEditProperty}
            />
          </>
        ) : (
          <div className="UserHome-property-grid">
            {myProperty.map((property, index) => (
              <div
                key={property.propertyName
                  }
                className="UserHome-property-card"
                onClick={() => handlePropertyClick(property)}
              >
                <div className="UserHome-property-image">
                  <img
                    src={property.propertyCoverPhoto}
                    alt={property.propertyName}
                  />
                  <div
                    className={`UserHome-property-status ${
                      property.type === "listed" ? "listed" : "in-progress"
                    }`}
                  >
                    {property.type === "listed" ? "Listed" : "In Progress"}
                  </div>
                </div>
                <div className="UserHome-property-details">
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
