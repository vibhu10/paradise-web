import { useState, useEffect } from 'react';
import './wifi-details.css'

export default function WifiDetails({ onSave, selectedPropertyData }) {
    const [wifiDetails, setWifiDetails] = useState({
        networkName: '',
        password: ''
    });

    // Populate the wifiDetails from selectedPropertyData on component mount or when data changes
    useEffect(() => {
        if (selectedPropertyData && selectedPropertyData.wifiDetails) {
            setWifiDetails(selectedPropertyData.wifiDetails);
        }
    }, [selectedPropertyData]);

    // Function to handle input changes
    const handleChange = (field, value) => {
        setWifiDetails({ ...wifiDetails, [field]: value });
    };

    // Function to save wifi details
    const handleSave = () => {
        onSave({ ...selectedPropertyData, wifiDetails });
    };

    return (
        <div className="wifi-details-container">
            <h3>WiFi Details</h3>
            <p>Create a guidebook to easily share local tips with guests.</p>

            <div className="input-group">
                {/* <label>WiFi network name</label> */}
                <input
                    type="text"
                    value={wifiDetails.networkName}
                    onChange={(e) => handleChange('networkName', e.target.value)}
                    placeholder="Enter WiFi network name"
                />
            </div>

            <div className="input-group">
                {/* <label>WiFi password</label> */}
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
