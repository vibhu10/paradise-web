import React, { useState } from 'react';
import '../Host-Registration/css/pageEight.css'; // Import the CSS styles

export function PageEight({ handleNext, handleBack, handleSaveProperty }) {
    const [selectedImage, setSelectedImage] = useState(null);
    const [propertyName, setPropertyName] = useState('');
    const [errors, setErrors] = useState({ name: '' }); // Error state for validation

    const defaultImage = "https://images.pexels.com/photos/462235/pexels-photo-462235.jpg"; // Default cover photo

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
        }
    };

    const validateInputs = () => {
        let isValid = true;
        const newErrors = {};

        if (!propertyName.trim()) {
            newErrors.name = 'Property name is required!';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleNextButtonClick = () => {
        if (!validateInputs()) {
            return; // Stop here if validation fails
        }

        const propertyData = {
            propertyCoverPhoto: selectedImage || defaultImage, // Use default photo if no image is selected
            propertyName: propertyName.trim(),
        };
        handleSaveProperty(propertyData);
        handleNext();
    };

    return (
        <div className="page-eight-container">
            {/* Header */}
            <p className="page-eight-question">How does this look?</p>

            {/* Photo section */}
            <div className="page-eight-panel-box">
                <div className="page-eight-photo-container">
                    <img
                        className="page-eight-cover-photo"
                        src={selectedImage || defaultImage} // Default image if none is uploaded
                        alt="Property Cover"
                        onError={(e) => { 
                            console.log("Image failed to load, using default."); 
                            e.target.src = defaultImage; 
                        }}
                    />
                    <button className="page-eight-cover-photo-button" style={{backgroundColor:"white",border:"2px solid gray"}}>
                        <label style={{color:"black"}}htmlFor="image-upload">Change Photo</label>
                    </button>
                    <input
                        type="file"
                        id="image-upload"
                        accept="image/*"
                        style={{ display: 'none' }}
                        onChange={handleImageChange}
                    />
                </div>

                {/* Property Name Input */}
                <div className="page-eight-property-name-input">
                    <label htmlFor="property-name">Add Property Name</label>
                    <input
                        type="text"
                        id="property-name"
                        value={propertyName}
                        onChange={(e) => setPropertyName(e.target.value)}
                        placeholder="Enter property name"
                    />
                    {errors.name && <p className="page-eight-error" style={{color:"red"}}>{errors.name}</p>}
                </div>
            </div>

            {/* Footer Buttons */}
            <div className="page-eight-footer">
                <button className="page-eight-footer-button" onClick={handleBack}>
                    Back
                </button>
                <div className="page-eight-progress-bar"></div>
                <button className="page-eight-footer-button" onClick={handleNextButtonClick}>
                    Next
                </button>
            </div>
        </div>
    );
}
