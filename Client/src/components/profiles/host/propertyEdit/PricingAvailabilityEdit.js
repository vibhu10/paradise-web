import React, { useState, useEffect } from 'react';
import './pricingAndAvailability.css';

export default function PricingAvailabilityEdit({ selectedPropertyData, onSave }) {
  const [price, setPrice] = useState(0);
  const [minNights, setMinNights] = useState(1);
  const [maxNights, setMaxNights] = useState(28);
  const [bookingNotice, setBookingNotice] = useState('Same day');
  const [checkinTime, setCheckinTime] = useState('12:00 am');
  const [propertyId, setPropertyId] = useState(null); // For the ID
  const [loading, setLoading] = useState(false);

  // Sync state with `selectedPropertyData`
  useEffect(() => {
    if (selectedPropertyData) {
      const {
        price: { BaseCharge = 0 } = {},
        availability: {
          minimumNight = 1,
          maximumNight = 28,
          checkinTime = '12:00 am',
        } = {},
        bookingNotice = 'Same day',
        id = null, // Property ID
      } = selectedPropertyData;

      setPrice(BaseCharge);
      setMinNights(minimumNight);
      setMaxNights(maximumNight);
      setBookingNotice(bookingNotice);
      setCheckinTime(checkinTime);
      setPropertyId(id); // Save property ID
    }
  }, [selectedPropertyData]);

  // Handle Save
  const handleSave = async () => {
    setLoading(true);
    try {
      const updatedData = {
        propertyId, // Include the property ID in the save payload
        price: { BaseCharge: parseFloat(price) },
        availability: {
          minimumNight: parseInt(minNights, 10),
          maximumNight: parseInt(maxNights, 10),
          checkinTime,
        },
        bookingNotice,
      };
      await onSave(updatedData); // Call parent save function
    } catch (error) {
      console.error('Error saving data:', error);
    } finally {
      setLoading(false);
    }
  };

  // Handle Cancel
  const handleCancel = () => {
    if (selectedPropertyData) {
      const {
        price: { BaseCharge = 0 } = {},
        availability: {
          minimumNight = 1,
          maximumNight = 28,
          checkinTime = '12:00 am',
        } = {},
        bookingNotice = 'Same day',
      } = selectedPropertyData;

      setPrice(BaseCharge);
      setMinNights(minimumNight);
      setMaxNights(maximumNight);
      setBookingNotice(bookingNotice);
      setCheckinTime(checkinTime);
    }
  };

  return (
    <div className="pricing-availability-hostlogin">
      <h2>Pricing & Availability</h2>

      {loading ? (
        <div className="loading-overlay">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          {/* Pricing Section */}
          <div className="price-section">
            <h3>Set Your Price</h3>
            <p>You can change it anytime.</p>
            <div className="price-input">
              <label htmlFor="price">Price per night (Base Charge)</label>
              <input
                type="number"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                min="0"
              />
            </div>
            <div className="price-summary">
              <p>Base price: ${price}</p>
              <p>Guest service fee: ${(price * 0.14).toFixed(2)}</p>
              <p>Guest price before taxes: ${(price * 1.14).toFixed(2)}</p>
              <p className="you-earn">You earn: ${(price * 0.97).toFixed(2)}</p>
            </div>
          </div>

          {/* Availability Section */}
          <div className="availability-section">
            <h3>Availability</h3>
            <div className="nights-inputs">
              <div className="min-nights">
                <label htmlFor="min-nights">Minimum nights</label>
                <input
                  type="number"
                  id="min-nights"
                  value={minNights}
                  onChange={(e) => setMinNights(e.target.value)}
                  min="1"
                />
              </div>
              <div className="max-nights">
                <label htmlFor="max-nights">Maximum nights</label>
                <input
                  type="number"
                  id="max-nights"
                  value={maxNights}
                  onChange={(e) => setMaxNights(e.target.value)}
                  min="1"
                />
              </div>
            </div>
            <div className="booking-notice">
              <label htmlFor="booking-notice">
                How much notice do you need between a guest's booking and their arrival?
              </label>
              <select
                id="booking-notice"
                value={bookingNotice}
                onChange={(e) => setBookingNotice(e.target.value)}
              >
                <option value="Same day">Same day</option>
                <option value="1 day">1 day</option>
                <option value="2 days">2 days</option>
                <option value="3 days">3 days</option>
              </select>
            </div>
            <div className="checkin-time">
              <label htmlFor="checkin-time">
                Guests can book on the same day as check-in until this time.
              </label>
              <select
                id="checkin-time"
                value={checkinTime}
                onChange={(e) => setCheckinTime(e.target.value)}
              >
                <option value="12:00 am">12:00 am</option>
                <option value="1:00 am">1:00 am</option>
                <option value="2:00 am">2:00 am</option>
                <option value="3:00 am">3:00 am</option>
              </select>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="button-group">
            <button className="cancel-button" onClick={handleCancel}>
              Cancel
            </button>
            <button className="save-button" onClick={handleSave}>
              Save
            </button>
          </div>
        </>
      )}
    </div>
  );
}
