import { useState, useEffect } from 'react';
import './check-in-guide-css/check-in-out.css'

const CheckInOut = ({ onSave, selectedPropertyData }) => {
  // State to store the instructions, check-in, and check-out times
  const [instructions, setInstructions] = useState([]);
  const [checkInTime, setCheckInTime] = useState('00:00');  // Default check-in time
  const [checkOutTime, setCheckOutTime] = useState('00:00'); // Default check-out time

  // Populate the instructions, check-in, and check-out times from selectedPropertyData
  useEffect(() => {
    if (selectedPropertyData) {
      // Set instructions if available
      if (selectedPropertyData.instructions) {
        setInstructions(selectedPropertyData.instructions);
      }
      // Set check-in time if available
      if (selectedPropertyData.checkInTime) {
        setCheckInTime(selectedPropertyData.checkInTime);
      }
      // Set check-out time if available
      if (selectedPropertyData.checkOutTime) {
        setCheckOutTime(selectedPropertyData.checkOutTime);
      }
    }
  }, [selectedPropertyData]);

  // Function to handle instruction change (editing existing instructions)
  const handleInstructionChange = (e, index) => {
    const updatedInstructions = [...instructions];
    updatedInstructions[index] = e.target.value;
    setInstructions(updatedInstructions);
  };

  // Function to add a new empty instruction
  const addInstruction = () => {
    setInstructions([...instructions, "New check-in instruction..."]);
  };

  // Function to save updated instructions, check-in, and check-out times
  const handleSave = () => {
    // Pass the updated data to the parent component via onSave
    onSave({
      ...selectedPropertyData,
      instructions,
      checkInTime,
      checkOutTime
    });
  };

  // Generate time options from 00:00 to 23:59 (24-hour format)
  const generateTimeOptions = () => {
    let times = [];
    for (let i = 0; i < 24; i++) {
      for (let j = 0; j < 60; j += 30) {
        const hour = i < 10 ? `0${i}` : i; // Add leading zero for single-digit hours
        const minute = j === 0 ? '00' : j;
        times.push(`${hour}:${minute}`);
      }
    }
    return times;
  };

  return (
    <div className="check-in-out-container">
      <h2>Check-in/out</h2>
      
      <div className="time-select">
        <div className="checkin">
          <label htmlFor="checkin-time">Check-in</label>
          <select
            id="checkin-time"
            value={checkInTime} // Set the value from state
            onChange={(e) => setCheckInTime(e.target.value)} // Update state when changed
          >
            {generateTimeOptions().map((time, index) => (
              <option key={index} value={time}>{time}</option>
            ))}
          </select>
          <p>Arrive between {checkInTime} and Flexible Leave before {checkOutTime}</p>
        </div>

        <div className="checkout">
          <label htmlFor="checkout-time">Checkout</label>
          <select
            id="checkout-time"
            value={checkOutTime} // Set the value from state
            onChange={(e) => setCheckOutTime(e.target.value)} // Update state when changed
          >
            {generateTimeOptions().map((time, index) => (
              <option key={index} value={time}>{time}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="instructions-section">
        <h3>Check-in instructions</h3>
        {instructions.map((instruction, index) => (
          <div key={index} className="instruction-box">
            <textarea className="instructions-section-textarea"
              value={instruction}
              onChange={(e) => handleInstructionChange(e, index)}
            />
          </div>
        ))}
        <button className="add-instruction" onClick={addInstruction}>
          + Add instructions
        </button>
      </div>

      <div className="method-section">
        <h3>Check-in method</h3>
        <ul>
          <li><strong>Smart lock:</strong> Guests will use a code or app to open a wifi-connected lock.</li>
          <li><strong>Keypad:</strong> Guests will use the code you provide to open an electronic lock.</li>
          <li><strong>Lockbox:</strong> Guests will use a code you provide to open a small safe that has a key inside.</li>
          <li><strong>Building staff:</strong> Someone will be available 24 hours a day to let guests in.</li>
        </ul>
      </div>

      <div className="checkout-section">
        <h3>Checkout instructions</h3>
        <ul>
          <li><strong>Throw rubbish away:</strong> Throw garbage in bins. Place the bins at the curb on Thursday...</li>
          <li><strong>Turn things off:</strong> Turn off all the lights especially the string lights in the back yard.</li>
          <li><strong>Lock up:</strong> Press the lock button on your way out.</li>
          <li><strong>Additional requests:</strong> Please wash all your dishes and throw away everything in the fridge.</li>
        </ul>
      </div>

      <div className="action-buttons">
        <button className="cancel">Cancel</button>
        <button className="save" onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default CheckInOut;
