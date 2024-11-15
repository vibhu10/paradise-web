import React, { useState } from 'react';

export function PageEight({ handleNext, handleBack, handleSaveProperty }) {
    const [selectedImage, setSelectedImage] = useState(null);
    const [propertyName, setPropertyName] = useState('');

    const defaultImage = "https://images.pexels.com/photos/462235/pexels-photo-462235.jpg";

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
        }
    };

    const handleNextButtonClick = () => {
        const propertyData = {
            propertyCoverPhoto: selectedImage,
            propertyName: propertyName,
        };
        handleSaveProperty(propertyData);
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
                    <div className="photo-container" style={{ position: 'relative' }}>
                        <img
                            style={{ width: "500px", height: "300px" }}
                            src={selectedImage || defaultImage}
                            alt="Property Cover"
                            className="cover-photo"
                            onError={(e) => { 
                                console.log("Image failed to load, using default."); 
                                e.target.src = defaultImage; 
                            }}
                        />
                        <button 
                            style={{ 
                                position: "absolute", 
                                left: "400px", 
                                top: "200px", 
                              
                                backgroundColor: '#007BFF', 
                                color: '#fff', 
                                border: 'none', 
                                cursor: 'pointer',
                                borderRadius: '4px' 
                            }}
                        >
                            <label htmlFor="image-upload" style={{ cursor: 'pointer' }}>cover photo</label>
                        </button>
                        <input
                            type="file"
                            id="image-upload"
                            accept="image/*"
                            style={{ display: 'none' }}
                            onChange={handleImageChange}
                        />
                    </div>

                    {/* Input field for property name */}
                    <div className="property-name-input" style={{ marginTop: '20px' }}>
                        <label htmlFor="property-name" style={{ display: 'block', marginBottom: '5px' }}>Add Property Name</label>
                        <input
                            type="text"
                            id="property-name"
                            value={propertyName}
                            onChange={(e) => setPropertyName(e.target.value)}
                            placeholder="Enter property name"
                            style={{
                                width: '100%',
                                padding: '10px',
                                borderRadius: '4px',
                                border: '1px solid #ccc',
                                boxSizing: 'border-box'
                            }}
                        />
                    </div>
                </div>
            </div>
            
            <div className="host-footer" style={{ marginTop: '20px', textAlign: 'center' }}>
                <button onClick={handleBack} style={{ marginRight: '10px', padding: '8px 16px' }}>Back</button>
                <button onClick={handleNextButtonClick} style={{ padding: '8px 16px' }}>Next</button>
            </div>
        </div>
    );
}
