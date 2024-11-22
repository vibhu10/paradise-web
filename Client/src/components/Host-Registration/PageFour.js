import React, { useState, useEffect } from 'react';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import '../Host-Registration/css/pageFour.css';

const mapContainerStyle = {
  width: '100%',
  height: '400px',
  borderRadius: '20px',
};

const centerDefault = { lat: 25.7617, lng: -80.1918 }; // Default: Miami

export function PageFour({ handleNext, handleBack }) {
  const [location, setLocation] = useState(centerDefault); // Current map center
  const [searchInput, setSearchInput] = useState(''); // Address input
  const [formattedAddress, setFormattedAddress] = useState(''); // Formatted address

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'YOUR_GOOGLE_MAPS_API_KEY', // Replace with your API key
    libraries: ['places'],
  });

  // Get the user's current location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      () => console.log('Could not fetch location')
    );
  }, []);

  // Function to update map center based on user input
  const handleSearch = async () => {
    if (!searchInput) return;

    const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      searchInput
    )}&key=YOUR_GOOGLE_MAPS_API_KEY`;

    try {
      const response = await fetch(geocodeUrl);
      const data = await response.json();
      if (data.results && data.results[0]) {
        const newLocation = data.results[0].geometry.location;
        setLocation(newLocation);
        setFormattedAddress(data.results[0].formatted_address); // Store the formatted address
      } else {
        alert('Location not found. Please try again.');
      }
    } catch (error) {
      console.error('Error fetching location:', error);
    }
  };

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="page-four-container">
      <div className="page-four-body-host">
        <div className="page-four-map">
          <div className="page-four-text">
            <h1>Where's your place located?</h1>
            <p>Your address is only shared with guests after they've made a reservation.</p>
          </div>

          {/* Input field overlay */}
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

          {/* Google Map */}
          <GoogleMap mapContainerStyle={mapContainerStyle} center={location} zoom={14}>
            <Marker position={location} />
          </GoogleMap>

          {/* Display the formatted address */}
          {formattedAddress && (
            <p className="formatted-address">Address: {formattedAddress}</p>
          )}
        </div>
      </div>

      <div className="page-four-host-footer">
        <button className="page-four-host-button page-four-back-button" onClick={handleBack}>
          Back
        </button>
        <button
          className="page-four-host-button page-four-next-button"
          onClick={() => handleNext(formattedAddress)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
