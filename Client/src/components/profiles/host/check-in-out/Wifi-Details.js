import { useState, useEffect } from 'react';
import './wifi-details.css';

export default function WifiDetails({ onSave, selectedPropertyData }) {
    const [wifiDetails, setWifiDetails] = useState({
        networkName: '',
        password: ''
    });
    const [propertyId, setPropertyId] = useState(null); // Add state for propertyId

    // Populate wifiDetails and propertyId from selectedPropertyData on component mount or when data changes
    useEffect(() => {
        if (selectedPropertyData) {
            setPropertyId(selectedPropertyData.id || null); // Set the propertyId
            if (selectedPropertyData.wifiDetails) {
                setWifiDetails(selectedPropertyData.wifiDetails); // Populate wifiDetails
            }
        }
    }, [selectedPropertyData]);

    // Function to handle input changes
    const handleChange = (field, value) => {
        setWifiDetails({ ...wifiDetails, [field]: value });
    };

    // Function to save wifi details
    const handleSave = () => {
        onSave({ ...selectedPropertyData, wifiDetails, propertyId }); // Pass the propertyId along with wifiDetails
    };

    return (
        <div className="wifi-details-container">
            <h3>WiFi Details</h3>
            <p>Create a guidebook to easily share local tips with guests.</p>

            <div className="input-group">
                {/* WiFi network name */}
                <input
                    type="text"
                    value={wifiDetails.networkName}
                    onChange={(e) => handleChange('networkName', e.target.value)}
                    placeholder="Enter WiFi network name"
                />
            </div>

            <div className="input-group">
                {/* WiFi password */}
                <input
                    type="text"
                    value={wifiDetails.password}
                    onChange={(e) => handleChange('password', e.target.value)}
                    placeholder="Enter WiFi password"
                />
            </div>

            <p className="note">Shared 24–48 hours before check-in</p>

            <div className="action-buttons">
                <button className="cancel">Cancel</button>
                <button className="save" onClick={handleSave}>Save</button>
            </div>
        </div>
    );
}
