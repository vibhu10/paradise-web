import React from 'react';
import './Host-login-Css/photos.css'
export default function PhotoEdit({ selectedPropertyData, onSave }) {
  return (
    <div className="photo-edit-container">
      {/* Sleeping arrangements section */}
      <div className="sleeping-arrangements">
        <h3>Sleeping arrangements</h3>
        <div className="arrangement-options">
          <div className="arrangement-column">
            <div className="arrangement-item">
              <span>Single</span>
              <div className="counter">
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
            </div>
            <div className="arrangement-item">
              <span>Double</span>
              <div className="counter">
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
            </div>
            <div className="arrangement-item">
              <span>Queen</span>
              <div className="counter">
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
            </div>
            <div className="arrangement-item">
              <span>King</span>
              <div className="counter">
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
            </div>
          </div>
          <div className="arrangement-column">
            <div className="arrangement-item">
              <span>Small double</span>
              <div className="counter">
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
            </div>
            <div className="arrangement-item">
              <span>Bunk bed</span>
              <div className="counter">
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
            </div>
            <div className="arrangement-item">
              <span>Sofa bed</span>
              <div className="counter">
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
            </div>
            <div className="arrangement-item">
              <span>Sofa</span>
              <div className="counter">
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
            </div>
          </div>
        </div>
        <div className="buttons">
          <button className="cancel-btn">Cancel</button>
          <button className="save-btn">Save</button>
        </div>
      </div>

      {/* Photo tour section */}
      <div className="photo-tour">
        <h3>Photo tour</h3>
        <div className="photo-options">
          <div className="photo-item">Living room <span>2 photos</span></div>
          <div className="photo-item">Full kitchen <span>2 photos</span></div>
          <div className="photo-item">Exterior <span>2 photos</span></div>
          <div className="photo-item">Dining area <span>2 photos</span></div>
          <div className="photo-item active">Bedroom 1 <span>2 photos</span></div>
        </div>

        {/* Bedroom 1 photos */}
        <div className="photo-edit">
          <h4>Bedroom 1</h4>
          <div className="add-photo-section">
            <div className="add-photo-box">
              <span>Add Bedroom1 Photo</span>
              <button className="add-photo-btn">+</button>
            </div>
          </div>
          <div className="photo-buttons">
            <button className="cancel-btn">Cancel</button>
            <button className="save-btn">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}
