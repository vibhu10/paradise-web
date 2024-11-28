import React, { useState, useEffect } from 'react';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import '../Host-Registration/css/pageFour.css';

const mapContainerStyle = {
  width: '100%',
  height: '400px',
  borderRadius: '20px',
};

const centerDefault = { lat: 25.7617, lng: -80.1918 }; // Default location (Miami)

// Define the libraries outside of the component to avoid recreating the array on each render
const libraries = ['places'];

export function PageFour({ handleNext, handleBack }) {
  const [location, setLocation] = useState(centerDefault); // Current map center
  const [searchInput, setSearchInput] = useState(''); // Address input
  const [formattedAddress, setFormattedAddress] = useState(''); // Formatted address
  const [errorMessage, setErrorMessage] = useState(null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY, // Use environment variable
    libraries: libraries, // Use the static libraries constant here
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        setErrorMessage(null);
      },
      () => {
        setErrorMessage('Unable to fetch your current location. Showing default location.');
      }
    );
  }, []);

  const handleSearch = async () => {
    const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      searchInput
    )}&key=${process.env.GOOGLE_MAPS_API_KEY}`;

    try {
      const response = await fetch(geocodeUrl);
      const data = await response.json();
      if (data.results && data.results[0]) {
        const newLocation = data.results[0].geometry.location;
        setLocation(newLocation);
        setFormattedAddress(data.results[0].formatted_address);
        setErrorMessage(null);
      } else {
        setErrorMessage('Location not found. Please try again.');
      }
    } catch (error) {
      console.error('Error fetching location:', error);
      setErrorMessage('Error fetching location. Please try again later.');
    }
  };

  const handleNextClick = () => {
    // Proceed without requiring `formattedAddress`
    handleNext(formattedAddress || null);
  };

  if (!isLoaded) return <div>Loading map...</div>;

  return (
    <div className="page-four-container">
      <div className="page-four-body-host">
        <div className="page-four-map">
          <div className="page-four-text">
            <h1>Where's your place located?</h1>
            <p>Your address is only shared with guests after they've made a reservation.</p>
          </div>

          <div className="page-four-address-input-container">
            <input
              type="text"
              placeholder="Enter your address"
              className="page-four-address-input"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button className="page-four-search-button" onClick={handleSearch}>
              Search
            </button>
          </div>

          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={location}
            zoom={14}
          >
            <Marker position={location} />
          </GoogleMap>

          {formattedAddress && (
            <p className="formatted-address">Address: {formattedAddress}</p>
          )}

          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
      </div>

      <div className="page-4-footer">
        <button onClick={handleBack} className="page-4-back-btn">
          Back
        </button>
        <div className="page-4-progress-bar"></div>
        <button onClick={handleNextClick} className="page-4-next-btn">
          Next
        </button>
      </div>
    </div>
  );
}
