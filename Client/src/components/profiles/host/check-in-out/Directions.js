import React, { useEffect, useState } from "react";
import "./direction.css";

export default function Directions({ selectedPropertyData, onSave }) {
  const [propertyId, setPropertyId] = useState(null); // Store property ID
  const [addressDirections, setAddressDirections] = useState("");
  const [guestOptions, setGuestOptions] = useState({
    stepFreeEntrance: false,
    widerEntrance: false,
    accessibleParking: false,
    stepFreePath: false,
  });
  const [addressData, setAddressData] = useState({
    country: "",
    flat: "",
    street: "",
    landmark: "",
    district: "",
    city: "",
    state: "",
    pinCode: "",
  });
  const [showLocation, setShowLocation] = useState(false);
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedPropertyData) {
      const {
        id,
        addressDirections: directions,
        guestOptions: options,
        Address: address,
        showLocation: location,
      } = selectedPropertyData;

      setPropertyId(id || null); // Ensure property ID is set
      setAddressDirections(directions || "");
      setGuestOptions({
        stepFreeEntrance: options?.stepFreeEntrance || false,
        widerEntrance: options?.widerEntrance || false,
        accessibleParking: options?.accessibleParking || false,
        stepFreePath: options?.stepFreePath || false,
      });
      setAddressData({
        country: address?.country || "",
        flat: address?.flat
 || "",
        street: address?.
street
 || "",
        landmark: address?.landmark || "",
        district: address?.district || "",
        city: address?.city || "",
        state: address?.state || "",
        pinCode
: address?.pinCode
 || "",
      });
      setShowLocation(location || false);
    }
  }, [selectedPropertyData]);

  useEffect(() => {
    const fetchCountries = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        const countriesList = data.map((country) => ({
          name: country.name.common,
          code: country.cca2,
          callingCode: country.idd.root + (country.idd.suffixes?.[0] || ""),
        }));
        setCountries(countriesList);
      } catch (error) {
        console.error("Error fetching countries:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  const handleSave = async () => {
    setLoading(true);
    try {
      const updatedData = {
        propertyId, // Include the propertyId
        addressDirections,
        guestOptions,
        Address: addressData,
        showLocation,
      };
      await onSave(updatedData); // Call parent save function
    } catch (error) {
      console.error("Error saving data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    if (selectedPropertyData) {
      const {
        addressDirections: directions,
        guestOptions: options,
        Address: address,
        showLocation: location,
      } = selectedPropertyData;

      setAddressDirections(directions || "");
      setGuestOptions({
        stepFreeEntrance: options?.stepFreeEntrance || false,
        widerEntrance: options?.widerEntrance || false,
        accessibleParking: options?.accessibleParking || false,
        stepFreePath: options?.stepFreePath || false,
      });
      setAddressData({
        country: address?.country || "",
        flat: address?.flat
 || "",
        street: address?.
street
 || "",
        landmark: address?.landmark || "",
        district: address?.district || "",
        city: address?.city || "",
        state: address?.state || "",
        pinCode:address?.pinCode
 || "",
      });
      setShowLocation(location || false);
    }
  };

  const handleCheckboxChange = (e) => {
    setGuestOptions({
      ...guestOptions,
      [e.target.name]: e.target.checked,
    });
  };

  const handleInputChange = (e) => {
    setAddressData({
      ...addressData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="directions-container">
      <h2 className="directions-title">Directions</h2>

      <textarea
        className="address-directions"
        value={addressDirections}
        onChange={(e) => setAddressDirections(e.target.value)}
        rows="3"
      />

      <div className="guest-options">
        <label>
          <input
            type="checkbox"
            name="stepFreeEntrance"
            checked={guestOptions.stepFreeEntrance}
            onChange={handleCheckboxChange}
          />
          Step-free guest entrance
        </label>
        <label>
          <input
            type="checkbox"
            name="widerEntrance"
            checked={guestOptions.widerEntrance}
            onChange={handleCheckboxChange}
          />
          Guest entrance wider than 32 inches (81 centimeters)
        </label>
        <label>
          <input
            type="checkbox"
            name="accessibleParking"
            checked={guestOptions.accessibleParking}
            onChange={handleCheckboxChange}
          />
          Accessible parking spot
        </label>
        <label>
          <input
            type="checkbox"
            name="stepFreePath"
            checked={guestOptions.stepFreePath}
            onChange={handleCheckboxChange}
          />
          Step-free path to the guest entrance
        </label>
      </div>

      <div className="address-inputs">
        {loading ? (
          <div>Loading countries...</div>
        ) : (
          <select
            name="country"
            value={addressData.country}
            onChange={handleInputChange}
            className="full-width"
          >
            {countries.map((country) => (
              <option key={country.code} value={country.name}>
                {country.name} ({country.callingCode})
              </option>
            ))}
          </select>
        )}

        <input
          type="text"
          name="flat"
          placeholder="Flat, house, etc."
          value={addressData.flat}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="street"
          placeholder="Street address"
          value={addressData.street}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="landmark"
          placeholder="Nearby landmark (if applicable)"
          value={addressData.landmark}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="district"
          placeholder="District/locality (if applicable)"
          value={addressData.district}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="city"
          placeholder="City / town"
          value={addressData.city}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="state"
          placeholder="State/union territory"
          value={addressData.state}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="pinCode"
          placeholder="pinCode"
          value={addressData.pinCode
}
          onChange={handleInputChange}
        />
      </div>

      <div className="location-toggle">
        <label className="toggle-label">
          Show your specific location
          <input
            type="checkbox"
            className="toggle-switch"
            checked={showLocation}
            onChange={() => setShowLocation(!showLocation)}
          />
        </label>
      </div>

      <div className="map-placeholder">
        <img src="https://via.placeholder.com/600x300" alt="Map location" />
      </div>

      <div className="directions-actions">
        <button className="cancel-button" onClick={handleCancel}>
          Cancel
        </button>
        <button className="save-button" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
}
