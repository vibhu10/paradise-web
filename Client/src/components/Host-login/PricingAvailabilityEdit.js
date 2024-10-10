import React, { useState } from 'react';
import './Host-login-Css/pricingAndAvailability.css'
export default function PricingAvailabilityEdit({ selectedPropertyData, onSave }) {
  const [price, setPrice] = useState(selectedPropertyData.price || 0);
  const [minNights, setMinNights] = useState(selectedPropertyData.minNights || 1);
  const [maxNights, setMaxNights] = useState(selectedPropertyData.maxNights || 28);
  const [bookingNotice, setBookingNotice] = useState(selectedPropertyData.bookingNotice || 'Same day');
  const [checkinTime, setCheckinTime] = useState(selectedPropertyData.checkinTime || '12:00 am');

  const handleSave = () => {
    const updatedData = {
      price,
      minNights,
      maxNights,
      bookingNotice,
      checkinTime
    };
    onSave(updatedData);
  };

  return (
    <div className="pricing-availability-hostlogin">
      <h2>Pricing & Availability</h2>

      {/* Pricing Section */}
      <div className="price-section">
        <h3>Now, set your price</h3>
        <p>You can change it anytime.</p>
        <div className="price-input">
          <label htmlFor="price">Add price</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
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
            />
          </div>
          <div className="max-nights">
            <label htmlFor="max-nights">Maximum nights</label>
            <input
              type="number"
              id="max-nights"
              value={maxNights}
              onChange={(e) => setMaxNights(e.target.value)}
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

      {/* Buttons */}
      <div className="button-group">
        <button className="cancel-button" onClick={() => onSave(null)}>Cancel</button>
        <button className="save-button" onClick={handleSave}>Save</button>
      </div>
    </div>
  );
}
