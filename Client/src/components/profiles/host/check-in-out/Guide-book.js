import { useState, useEffect } from 'react';
import './guide-book.css';

export default function GuideBook({ onSave, selectedPropertyData }) {
    const [guideBooks, setGuideBooks] = useState([]);
    const [propertyId, setPropertyId] = useState(null);  // Add state for propertyId

    // Populate the guideBooks and propertyId from selectedPropertyData on component mount or when data changes
    useEffect(() => {
        if (selectedPropertyData) {
            setPropertyId(selectedPropertyData.id || null); // Set the propertyId
            if (selectedPropertyData.guideBooks) {
                setGuideBooks(selectedPropertyData.guideBooks);  // Populate guideBooks
            }
        }
    }, [selectedPropertyData]);

    // Function to handle guidebook title or description change
    const handleGuidebookChange = (index, field, value) => {
        const updatedGuideBooks = [...guideBooks];
        updatedGuideBooks[index][field] = value;
        setGuideBooks(updatedGuideBooks);
    };

    // Function to add a new empty guidebook
    const addGuidebook = () => {
        setGuideBooks([...guideBooks, { title: 'New Guidebook', content: 'Enter description...' }]);
    };

    // Function to delete a guidebook
    const deleteGuidebook = (index) => {
        const updatedGuideBooks = guideBooks.filter((_, i) => i !== index);
        setGuideBooks(updatedGuideBooks);
    };

    // Function to save updated guidebooks
    const handleSave = () => {
        onSave({ ...selectedPropertyData, guideBooks, propertyId });  // Pass the propertyId with the data
    };

    return (
        <div className="guidebook-container">
            <h2>Guidebooks</h2>
            <p>Create a guidebook to easily share local tips with guests.</p>

            <button className="add-guidebook-btn" onClick={addGuidebook}>+ Add a Guidebook</button>

            {guideBooks.map((guidebook, index) => (
                <div key={index} className="guidebook">
                    <input
                        type="text"
                        value={guidebook.title}
                        onChange={(e) => handleGuidebookChange(index, 'title', e.target.value)}
                        placeholder="Guidebook title"
                    />
                    <textarea
                        value={guidebook.content}
                        onChange={(e) => handleGuidebookChange(index, 'content', e.target.value)}
                        placeholder="Guidebook description"
                    />
                    <button className="delete-guidebook-btn" onClick={() => deleteGuidebook(index)}>X</button>
                </div>
            ))}

            <div className="action-buttons">
                <button className="cancel">Cancel</button>
                <button className="save" onClick={handleSave}>Save</button>
            </div>
        </div>
    );
}
