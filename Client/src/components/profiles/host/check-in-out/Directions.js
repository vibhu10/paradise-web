import React, { useEffect, useState } from 'react';
import './direction.css';

// Fetch all countries from the API
const fetchCountries = async () => {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
    return data.map(country => ({
        name: country.name.common,
        code: country.cca2,
        callingCode: country.idd.root + (country.idd.suffixes ? country.idd.suffixes[0] : "")
    }));
};

export default function Directions({ onEditProperty, selectedPropertyData }) {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);

    // Extracting data from selectedPropertyData
    const [addressDirections, setAddressDirections] = useState(
        selectedPropertyData?.addressDirections || 'Address is [example address]. There is plenty of parking available. 4-6 in the driveway and 1 in the street.'
    );

    const [guestOptions, setGuestOptions] = useState({
        stepFreeEntrance: selectedPropertyData?.guestOptions?.stepFreeEntrance || false,
        widerEntrance: selectedPropertyData?.guestOptions?.widerEntrance || false,
        accessibleParking: selectedPropertyData?.guestOptions?.accessibleParking || false,
        stepFreePath: selectedPropertyData?.guestOptions?.stepFreePath || false,
    });

    const [addressData, setAddressData] = useState({
        country: selectedPropertyData?.Address?.country || '',
        flat: selectedPropertyData?.Address?.houseAndFlat || '',
        street: selectedPropertyData?.Address?.streetAddress || '',
        landmark: selectedPropertyData?.Address?.landmark || '',
        district: selectedPropertyData?.Address?.district || '',
        city: selectedPropertyData?.Address?.city || '',
        state: selectedPropertyData?.Address?.state || '',
        pinCode: selectedPropertyData?.Address?.pin || '',
    });

    const [showLocation, setShowLocation] = useState(selectedPropertyData?.showLocation || false);

    useEffect(() => {
        // Fetch countries on component mount
        async function loadCountries() {
            const countries = await fetchCountries();
            setCountries(countries);
            setLoading(false);
        }
        loadCountries();
    }, []);

    // Handle checkbox changes for guest options
    const handleCheckboxChange = (e) => {
        setGuestOptions({
            ...guestOptions,
            [e.target.name]: e.target.checked
        });
    };

    // Handle text input changes for address data
    const handleInputChange = (e) => {
        setAddressData({
            ...addressData,
            [e.target.name]: e.target.value
        });
    };

    // Save the updated property data
    const handleSave = () => {
        const updatedData = {
            addressDirections,
            guestOptions,
            addressData,
            showLocation,
        };
        if (onEditProperty) {
            onEditProperty(updatedData);
        }
    };

    return (
        <div className="directions-container">
            <h2 className="directions-title">Directions</h2>

            {/* Editable Address Directions */}
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

            {/* Address Inputs */}
            <div className="address-inputs">
                {/* Country Selector */}
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
                    placeholder="PIN code"
                    value={addressData.pinCode}
                    onChange={handleInputChange}
                />
            </div>

            {/* Location Toggle */}
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

            {/* Map Placeholder */}
            <div className="map-placeholder">
                <img src="https://via.placeholder.com/600x300" alt="Map location" />
            </div>

            {/* Save/Cancel Buttons */}
            <div className="directions-actions">
                <button className="cancel-button">Cancel</button>
                <button className="save-button" onClick={handleSave}>Save</button>
            </div>
        </div>
    );
}
