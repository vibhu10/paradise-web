import React, { useState } from 'react';
import './guide-book.css'

export default function HouseManual({ onSave, selectedPropertyData }) {
    const [manualText, setManualText] = useState(selectedPropertyData?.houseManual || '');

    const handleSave = () => {
        if (onSave) {
            onSave(manualText); // Pass the updated manual text back to the parent
        }
    };

    return (
        <div className="house-manual-container">
            <h2 className="house-manual-title">House Manual</h2>
            <textarea 
                className="house-manual-textarea"
                value={manualText}
                onChange={(e) => setManualText(e.target.value)}
            />
            <div className="house-manual-actions">
                <button className="cancel-button">Cancel</button>
                <button style={{background:"#198E78"}} className="save-button" onClick={handleSave}>Save</button>
            </div>
        </div>
    );
}
