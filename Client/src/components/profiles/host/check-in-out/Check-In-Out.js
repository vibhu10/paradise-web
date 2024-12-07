import { useState, useEffect } from "react";
import "./check-in-out.css";

const CheckInOut = ({ onSave, selectedPropertyData }) => {
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

  // Helper function to parse time into a valid Date object
  const parseTime = (timeString) => {
    const [time, modifier] = timeString.split(" ");
    let [hours, minutes] = time.split(":").map(Number);

    if (modifier === "pm" && hours !== 12) hours += 12;
    if (modifier === "am" && hours === 12) hours = 0;

    return new Date(1970, 0, 1, hours, minutes, 0); // Use a fixed date for time-only values
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
    const checkInDate = parseTime(checkInTime);
    const checkOutDate = parseTime(checkOutTime);

    // if (checkInDate >= checkOutDate) {
    //   alert("Check-out time must be after check-in time!");
    //   return;
    // }

    onSave({
      ...selectedPropertyData,
      AddInstruction: instructions,
      checkinOut: {
        checkin: [checkInDate.toISOString()],
        checkout: [checkOutDate.toISOString()],
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
    <div className="check-in-out-container" id="check-in-out-container">
      <h2 id="title">Check-in/out</h2>

      {/* Time Section */}
      <div className="time-section">
        <div className="time-box" id="check-in-box">
          <label htmlFor="checkin-time">Check-in</label>
          <select
            id="checkin-time"
            value={checkInTime}
            onChange={(e) => setCheckInTime(e.target.value)}
            aria-label="Select check-in time"
          >
            {generateTimeOptions().map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>

        <div className="time-box" id="check-out-box">
          <label htmlFor="checkout-time">Checkout</label>
          <select
            id="checkout-time"
            value={checkOutTime}
            onChange={(e) => setCheckOutTime(e.target.value)}
            aria-label="Select check-out time"
          >
            {generateTimeOptions().map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
        <p>
          Arrive between <strong>{checkInTime}</strong> and leave before <strong>{checkOutTime}</strong>
        </p>
      </div>

      {/* Instructions Section */}
      <div className="instructions-section" id="instructions-section">
        <h3>Check-in instructions</h3>
        {instructions.map((instruction, index) => (
          <div key={index} className="instruction-box">
            <textarea
              placeholder="Enter instruction"
              value={instruction}
              onChange={(e) => handleInstructionChange(e, index)}
              aria-label={`Instruction ${index + 1}`}
            />
          </div>
        ))}
        <button className="add-instruction" onClick={addInstruction}>
          + Add instructions
        </button>
      </div>

      {/* Action Buttons */}
      <div className="action-buttons" id="action-buttons">
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
