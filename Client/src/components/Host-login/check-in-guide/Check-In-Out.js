import { useState, useEffect } from "react";
import "./check-in-guide-css/check-in-out.css";

const CheckInOut = ({ onEditProperty, selectedPropertyData }) => {
  const [instructions, setInstructions] = useState([]);
  const [checkInTime, setCheckInTime] = useState("11:00 am");
  const [checkOutTime, setCheckOutTime] = useState("11:00 am");

  // Helper function to format ISO time to readable format
  const formatTime = (isoTimeArray) => {
    if (!isoTimeArray || isoTimeArray.length === 0) return "11:00 am"; // Default fallback
    const isoTime = isoTimeArray[0];
    const date = new Date(isoTime);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const suffix = hours >= 12 ? "pm" : "am";
    const formattedHours = ((hours + 11) % 12) + 1;
    return `${formattedHours}:${minutes.toString().padStart(2, "0")} ${suffix}`;
  };

  useEffect(() => {
    if (selectedPropertyData) {
      setInstructions(selectedPropertyData.AddInstruction || []);
      setCheckInTime(formatTime(selectedPropertyData.checkinOut?.checkin));
      setCheckOutTime(formatTime(selectedPropertyData.checkinOut?.checkout));
    }
  }, [selectedPropertyData]);

  const handleInstructionChange = (e, index) => {
    const updatedInstructions = [...instructions];
    updatedInstructions[index] = e.target.value;
    setInstructions(updatedInstructions);
  };

  const addInstruction = () => {
    setInstructions([...instructions, ""]);
  };

  const handleSave = () => {
    onEditProperty({
      ...selectedPropertyData,
      AddInstruction: instructions,
      checkinOut: {
        checkin: [new Date(`1970-01-01T${checkInTime}:00`).toISOString()],
        checkout: [new Date(`1970-01-01T${checkOutTime}:00`).toISOString()],
      },
    });
  };

  const handleCancel = () => {
    if (selectedPropertyData) {
      setInstructions(selectedPropertyData.AddInstruction || []);
      setCheckInTime(formatTime(selectedPropertyData.checkinOut?.checkin));
      setCheckOutTime(formatTime(selectedPropertyData.checkinOut?.checkout));
    }
  };

  const generateTimeOptions = () =>
    [
      "12:00 am",
      "1:00 am",
      "2:00 am",
      "3:00 am",
      "4:00 am",
      "5:00 am",
      "6:00 am",
      "7:00 am",
      "8:00 am",
      "9:00 am",
      "10:00 am",
      "11:00 am",
      "12:00 pm",
      "1:00 pm",
      "2:00 pm",
      "3:00 pm",
      "4:00 pm",
      "5:00 pm",
      "6:00 pm",
      "7:00 pm",
      "8:00 pm",
      "9:00 pm",
      "10:00 pm",
      "11:00 pm",
    ].map((time) => time);

  return (
    <div className="check-in-out-container">
      <h2>Check-in/out</h2>

      {/* Time Section */}
      <div className="time-section">
        <div className="time-box">
          <label htmlFor="checkin-time">Check-in</label>
          <select
            id="checkin-time"
            value={checkInTime}
            onChange={(e) => setCheckInTime(e.target.value)}
          >
            {generateTimeOptions().map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>

        <div className="time-box">
          <label htmlFor="checkout-time">Checkout</label>
          <select
            id="checkout-time"
            value={checkOutTime}
            onChange={(e) => setCheckOutTime(e.target.value)}
          >
            {generateTimeOptions().map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
        <p>
          Arrive between {checkInTime} and Flexible Leave before {checkOutTime}
        </p>
      </div>

      {/* Instructions Section */}
      <div className="instructions-section">
        <h3>Check-in instructions</h3>
        {instructions.map((instruction, index) => (
          <div key={index} className="instruction-box">
            <textarea
              placeholder="Enter instruction"
              value={instruction}
              onChange={(e) => handleInstructionChange(e, index)}
            />
          </div>
        ))}
        <button className="add-instruction" onClick={addInstruction}>
          + Add instructions
        </button>
      </div>

      {/* Check-in Method */}
      <div className="method-section">
        <h3>Check-in method</h3>
        <ul>
          <li>
            <strong>Smart lock:</strong> Guests use a code or app to open a
            Wi-Fi-connected lock.
          </li>
          <li>
            <strong>Keypad:</strong> Guests use the code you provide to open an
            electronic lock.
          </li>
          <li>
            <strong>Lockbox:</strong> Guests use a code to access a small safe
            with a key inside.
          </li>
          <li>
            <strong>Building staff:</strong> Staff is available 24/7 to assist
            guests.
          </li>
        </ul>
      </div>

      {/* Checkout Instructions */}
      <div className="checkout-section">
        <h3>Checkout instructions</h3>
        <ul>
          <li>
            <strong>Throw rubbish away:</strong> Dispose of garbage in bins and
            place them at the curb on collection day.
          </li>
          <li>
            <strong>Turn things off:</strong> Switch off all lights, especially
            outdoor ones.
          </li>
          <li>
            <strong>Lock up:</strong> Press the lock button on your way out.
          </li>
          <li>
            <strong>Additional requests:</strong> Wash dishes and clear the
            fridge.
          </li>
        </ul>
      </div>

      {/* Action Buttons */}
      <div className="action-buttons">
        <button className="cancel" onClick={handleCancel}>
          Cancel
        </button>
        <button className="save" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default CheckInOut;
