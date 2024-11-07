import { useState, useEffect } from 'react';
import './UserHome.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropertyEdit from './property-edit/Property-edit';

export default function UserHome() {
  const [myProperty, setMyProperty] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from the API when the component mounts
  useEffect(() => {
    async function fetchProperties() {
      setIsLoading(true); // Set loading to true before starting fetch
      try {
        const response = await fetch("http://localhost:3000/api/property/");
        if (!response.ok) {
          throw new Error('Failed to fetch properties');
        }
        const data = await response.json();
        setMyProperty(data);  // Set fetched data to state
      } catch (error) {
        setError(error.message);
      } finally {
        setTimeout(() => setIsLoading(false), 3000); // Show spinner for at least 3 seconds
      }
    }
    fetchProperties();
  }, []);

  function handleSave(updatedAmenities) {
    setMyProperty(prevProperties =>
      prevProperties.map(property =>
        property === selectedProperty
          ? { ...property, amenities: updatedAmenities }
          : property
      )
    );
  }

  const handlePropertyClick = (property) => {
    setSelectedProperty(property);
  };

  const handleBackToList = () => {
    setSelectedProperty(null);
  };

  return (
    <div className="userHome-container">
      <header>
        <div>
          <img
            style={{ width: '240px', height: '76px', marginLeft: '10px' }}
            src="/48564e5fe8898cf62b0bbf42276d6cf3.jpeg"
            alt="paradise"
          />
        </div>
        <div className="nav-bar">
          <ul>
            <li>Influencer</li>
            <li>Calendar</li>
            <li>Properties</li>
            <li>Inbox</li>
            <li>Upcoming</li>
            <li>Menu</li>
          </ul>
        </div>

        <div className="userhome-login">
          {/* Optional login content */}
        </div>
      </header>

      <main>
        {isLoading ? (
          <div className="loading-overlay">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : error ? (
          <p>Error: {error}</p>
        ) : selectedProperty ? (
          <>
            {/* Back button */}
            <button className="back-button" onClick={handleBackToList}>
              ←
            </button>
            
            {/* Property edit component */}
            <PropertyEdit selectedPropertyData={selectedProperty} handleSave={handleSave} />
          </>
        ) : (
          <div className="property-list">
            {myProperty.map((property, index) => (
              <div key={index} className="property-card" onClick={() => handlePropertyClick(property)}>
                <div className="card-image">
                  <img src={property.photo} alt={property.name} />
                  <div className="card-status">
                    <span className="status-dot"></span> {property.type === "listed" ? "Listed" : "In Progress"}
                  </div>
                </div>
                <div className="card-info">
                  <h4>{property.location}</h4>
                  <h6 style={{ color: "#198E78" }}>{property.name}</h6>
                  <p>{property.dates}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
