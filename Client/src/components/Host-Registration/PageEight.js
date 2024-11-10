import React, { useState } from 'react';

export function PageEight({ handleNext, handleBack, handleSaveProperty }) {
    const [selectedImage, setSelectedImage] = useState(null);
    const [propertyName, setPropertyName] = useState('');  // New state for property name

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);  // Store the image URL in state
        }
    };

    const handleNextButtonClick = () => {
        // Pass the selected image URL and property name to the parent via handleSaveProperty
        const propertyData = {
            propertyCoverPhoto: selectedImage,
            propertyName: propertyName,
        };
        handleSaveProperty(propertyData);
        
        // Call the handleNext function to move to the next page
        handleNext();
    };

    return (
        <div>
            <header className="header-host">
                <img src="/48564e5fe8898cf62b0bbf42276d6cf3.jpeg" alt="paradise" />
                <button>Exit</button>
            </header>
            
            <div className="body-host">
                <p className="page-question">How does this look?</p>
                
                <div className="panel-box-page8">
                    <div className="photo-container">
                        <img
                            style={{ width: "500px", height: "300px" }}
                            src={selectedImage ||"https://images.pexels.com/photos/462235/pexels-photo-462235.jpg"}
                            alt="Property"
                            className="cover-photo"
                        />
                        <button style={{ position: "absolute", left: "700px", top: "500px" }}>
                            <label htmlFor="image-upload">Change cover photo</label>
                        </button>
                        <input
                            type="file"
                            id="image-upload"
                            accept="image/*"
                            style={{ display: 'none' }}
                            onChange={handleImageChange}
                        />
                    </div>

                    {/* New input field for property name */}
                    <div className="property-name-input">
                        <label htmlFor="property-name">Add Property Name</label>
                        <input
                            type="text"
                            id="property-name"
                            value={propertyName}
                            onChange={(e) => setPropertyName(e.target.value)}  // Update state with input value
                            placeholder="Enter property name"
                        />
                    </div>
                </div>
            </div>
            
            <div className="host-footer">
                <button onClick={handleBack}>Back</button>
                <button onClick={handleNextButtonClick}>Next</button>
            </div>
        </div>
    );
}
