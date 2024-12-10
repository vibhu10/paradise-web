import React, { useState, useEffect } from 'react';
import './house-manula.css';

export default function HouseManual({ onSave, selectedPropertyData }) {
    const [manualText, setManualText] = useState('');
    const [propertyId, setPropertyId] = useState(null);

    // Sync with selectedPropertyData when it changes
    useEffect(() => {
        if (selectedPropertyData) {
            setManualText(selectedPropertyData.
                manualText || '');
            setPropertyId(selectedPropertyData.id || null); // Set the property ID
        }
    }, [selectedPropertyData]);

    const handleSave = () => {
        if (onSave) {
            onSave({
                propertyId,  // Include the property ID
                manualText,   // Include the updated manual text
            });
        }
    };

    const handleCancel = () => {
        if (selectedPropertyData) {
            setManualText(selectedPropertyData.houseManual || ''); // Reset to original text
        }
    };

    return (
        <div className="house-manual-container">
            <h2 className="house-manual-title">House Manual</h2>
            <textarea
                className="house-manual-textarea"
                value={manualText}
                onChange={(e) => setManualText(e.target.value)}
                placeholder="Enter details for the house manual"
            />
            <div className="house-manual-actions">
                <button className="cancel-button" onClick={handleCancel}>Cancel</button>
                <button className="save-button" style={{ background: "#198E78" }} onClick={handleSave}>Save</button>
            </div>
        </div>
    );
}
