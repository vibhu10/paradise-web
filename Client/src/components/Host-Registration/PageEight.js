import '../Host-Registration/css/pageEight.css';
import React, { useState } from 'react';

export function PageEight({ handleNext, handleBack, handleSaveProperty }) {
  const [coverPhotos, setcoverPhotos] = useState({
    cover: { name: 'Cover Photo', image: '/cover.jpg' },
    1: { name: 'Living Room', image: '/bedroom.jpg' },
    2: { name: 'Bedroom', image: '/image (1).png' },
  });
  const [menuVisible, setMenuVisible] = useState(null);
  const [propertyName, setPropertyName] = useState('');
  const [errors, setErrors] = useState({});
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [newPhoto, setNewPhoto] = useState({ name: '', file: null });

  // Handle image change logic
  const handleImageChange = (event, roomId) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setcoverPhotos((prevImages) => ({
        ...prevImages,
        [roomId]: { ...prevImages[roomId], image: imageUrl },
      }));
    }
  };

  const handleMenuToggle = (roomId) => {
    setMenuVisible((prev) => (prev === roomId ? null : roomId));
  };

  // Validate inputs
  const validateInputs = () => {
    let isValid = true;
    const newErrors = {};



    // Check if cover photo is uploaded
    if (!coverPhotos.cover.image || coverPhotos.cover.image === '/cover.jpg') {
      newErrors.cover = 'Cover Photo is required!';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle next button click
  const handleNextButtonClick = () => {
    if (!validateInputs()) return; // Do not proceed if validation fails

    const propertyData = {
      coverPhotos,
    };
    handleSaveProperty(propertyData);
    handleNext(); // Proceed to the next step if validation passes
  };

  // Delete a photo
  const handleDeletePhoto = (roomId) => {
    setcoverPhotos((prevImages) => {
      const updatedImages = { ...prevImages };
      delete updatedImages[roomId];
      return updatedImages;
    });
  };

  // Add a new photo
  const handleAddPhoto = () => {
    if (!newPhoto.name.trim() || !newPhoto.file) {
      alert('Please enter a photo name and select a file.');
      return;
    }

    const newPhotoId = Object.keys(coverPhotos).length + 1;
    const imageUrl = URL.createObjectURL(newPhoto.file);

    setcoverPhotos((prevImages) => ({
      ...prevImages,
      [newPhotoId]: { name: newPhoto.name.trim(), image: imageUrl },
    }));
    setNewPhoto({ name: '', file: null });
    setIsPopupOpen(false);
  };

  return (
    <div className="page-eight-specific-container">
      <h1 className="page-eight-specific-title">How does this look?</h1>

      <button
        className="page-eight-add-photo-button"
        onClick={() => setIsPopupOpen(true)}
      >
        +
      </button>

      <div className="page-eight-specific-layout">
        {/* Cover Photo */}
        <div className="page-eight-specific-cover-container">
          <button className="room-name-button">{coverPhotos.cover.name}</button>
          <img
            className="page-eight-specific-cover-photo"
            src={coverPhotos.cover.image}
            alt={coverPhotos.cover.name}
          />
          <div className="page-eight-specific-menu">
            <button
              className="page-eight-specific-menu-toggle"
              onClick={() => handleMenuToggle('cover')}
            >
              ...
            </button>
            {menuVisible === 'cover' && (
              <div className="page-eight-specific-menu-dropdown">
                <label htmlFor={`room-upload-cover`}>Change Photo</label>
                <input
                  type="file"
                  id={`room-upload-cover`}
                  style={{ display: 'none' }}
                  onChange={(e) => handleImageChange(e, 'cover')}
                />
                <button onClick={() => handleDeletePhoto('cover')}>
                  Delete Photo
                </button>
              </div>
            )}
          </div>
          {errors.cover && <div className="error-message">{errors.cover}</div>}
        </div>

        {/* Room Cards */}
        {Object.entries(coverPhotos)
          .filter(([id]) => id !== 'cover')
          .map(([id, room]) => (
            <div className="page-eight-specific-room-card" key={id}>
              <button className="room-name-button">{room.name}</button>
              <img
                className="page-eight-specific-room-image"
                src={room.image}
                alt={room.name}
              />
              <div className="page-eight-specific-menu">
                <button
                  className="page-eight-specific-menu-toggle"
                  onClick={() => handleMenuToggle(id)}
                >
                  ...
                </button>
                {menuVisible === id && (
                  <div className="page-eight-specific-menu-dropdown">
                    <label htmlFor={`room-upload-${id}`}>Change Photo</label>
                    <input
                      type="file"
                      id={`room-upload-${id}`}
                      style={{ display: 'none' }}
                      onChange={(e) => handleImageChange(e, id)}
                    />
                    <button onClick={() => handleDeletePhoto(id)}>
                      Delete Photo
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
      </div>

      <div className="page-eight-footer">
        <button className="page-eight-footer-button" onClick={handleBack}>
          Back
        </button>
        <div className="page-eight-progress-bar"></div>
        <button
          className="page-eight-footer-button"
          onClick={handleNextButtonClick}
        >
          Next
        </button>
      </div>

      {isPopupOpen && (
        <div className="page-eight-popup-overlay">
          <div className="page-eight-popup">
            <h3>Add New Photo</h3>
            <input
              type="text"
              placeholder="Enter Room Name"
              value={newPhoto.name}
              onChange={(e) =>
                setNewPhoto((prev) => ({ ...prev, name: e.target.value }))
              }
            />
            <input
              type="file"
              onChange={(e) =>
                setNewPhoto((prev) => ({ ...prev, file: e.target.files[0] }))
              }
            />
            <button
              className="page-eight-popup-button"
              onClick={handleAddPhoto}
            >
              Add
            </button>
            <button
              className="page-eight-popup-button"
              onClick={() => setIsPopupOpen(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
