import { useState } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css";

export function PageThirteen({ handleNext, handleBack, handleSaveProperty }) {
  const [checkinOut, setCheckInOut] = useState({
    checkin: null,
    checkout: null,
  });
  const [quiteHour, setQuiteHour] = useState({
    quiteHourStart: null,
    quiteHourEnd: null,
  });
  const [AddInstruction, setAddInstruction] = useState(["", ""]);

  const [formError, setFormError] = useState(false);

  function handleInstruction(index, value) {
    const updatedInstruction = [...AddInstruction];
    updatedInstruction[index] = value;
    setAddInstruction(updatedInstruction);
  }

  function addTextArea() {
    setAddInstruction([...AddInstruction, ""]);
  }

  function handleTime(type, value) {
    if (type === "quiteHourStart" || type === "quiteHourEnd") {
      setQuiteHour({ ...quiteHour, [type]: value });
    } else {
      setCheckInOut({ ...checkinOut, [type]: value });
    }
  }

  // Function to handle saving data and validation when Next is pressed
  const handleNextWithSave = () => {
    // Validate if Quiet Hours and Check-in/Check-out fields are filled
    if (
      !quiteHour.quiteHourStart ||
      !quiteHour.quiteHourEnd ||
      !checkinOut.checkin ||
      !checkinOut.checkout
    ) {
      setFormError(true);
      return;
    }

    // Save data and move to the next page
    handleSaveProperty({
      checkinOut: checkinOut,
      quiteHour: quiteHour,
      AddInstruction: AddInstruction,
    });

    setFormError(false); // Clear error if validation passes
    handleNext();
  };

  return (
    <div className="main-container">
      <div className="body-host-with-scroll">
        <div className="pannel-box-page13">
          <h5>Check-in/Out</h5>

          {/* Quiet Hours Section */}
          <div className="pannel-box-page12-div1">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h8 style={{ fontWeight: 600 }}>Quiet Hours</h8>
              <div style={{ marginBottom: 5 }}>
                <h9 style={{ marginRight: "280px", fontSize: "12px" }}>
                  Start Time
                </h9>
                <h9 style={{ fontSize: "12px" }}>End Time</h9>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div className="input-group" style={{ width: 250, height: 40 }}>
                  <Flatpickr
                    style={{ fontWeight: 600, fontSize: 17 }}
                    id="timePicker"
                    className="form-control"
                    value={quiteHour.quiteHourStart}
                    onChange={(date) => handleTime("quiteHourStart", date)}
                    options={{
                      enableTime: true,
                      noCalendar: true,
                      dateFormat: "h:i K",
                      time_24hr: false,
                    }}
                  />
                </div>

                <div className="input-group" style={{ width: 250, height: 40 }}>
                  <Flatpickr
                    style={{ fontWeight: 600, fontSize: 17 }}
                    id="timePicker"
                    className="form-control"
                    value={quiteHour.quiteHourEnd}
                    onChange={(date) => handleTime("quiteHourEnd", date)}
                    options={{
                      enableTime: true,
                      noCalendar: true,
                      dateFormat: "h:i K",
                      time_24hr: false,
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Check-in/Check-out Section */}
            <div style={{ display: "flex", flexDirection: "column", marginTop: 15 }}>
              <h8 style={{ fontWeight: 600 }}>Check-in and Check-out</h8>
              <div>
                <h9 style={{ marginRight: "280px", fontSize: "12px" }}>Check-in</h9>
                <h9 style={{ fontSize: "12px" }}>Check-out</h9>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div className="input-group" style={{ width: 250, height: 40 }}>
                  <Flatpickr
                    style={{ fontWeight: 600, fontSize: 17 }}
                    id="timePicker"
                    className="form-control"
                    value={checkinOut.checkin}
                    onChange={(date) => handleTime("checkin", date)}
                    options={{
                      enableTime: true,
                      noCalendar: true,
                      dateFormat: "h:i K",
                      time_24hr: false,
                    }}
                  />
                </div>

                <div className="input-group" style={{ width: 250, height: 40 }}>
                  <Flatpickr
                    style={{ fontWeight: 600, fontSize: 17 }}
                    id="timePicker"
                    className="form-control"
                    value={checkinOut.checkout}
                    onChange={(date) => handleTime("checkout", date)}
                    options={{
                      enableTime: true,
                      noCalendar: true,
                      dateFormat: "h:i K",
                      time_24hr: false,
                    }}
                  />
                </div>
              </div>
            </div>
            <h8>Arrive between 4:00 pm and Flexible Leave before 10:00 am</h8>
          </div>

          {/* Error Message */}
          {formError && (
            <p style={{ color: "red", marginTop: 10 }}>
              Please fill in all Quiet Hours and Check-in/Check-out fields before proceeding.
            </p>
          )}

          {/* Check-in Instructions */}
          <div className="pannel-box-page12-div2">
            <h5>Check-in instructions</h5>
            {AddInstruction.map((inst, index) => (
              <div key={index}>
                <textarea
                  style={{
                    width: "560px",
                    height: "80px",
                    borderRadius: "10px",
                  }}
                  value={inst}
                  onChange={(e) => handleInstruction(index, e.target.value)}
                  rows={4}
                />
              </div>
            ))}
            <button
              onClick={addTextArea}
              style={{
                borderRadius: "10px",
                padding: "5px",
                backgroundColor: "white",
              }}
            >
              + Add instruction
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="PageThirteen-footer">
        <button className="PageThirteen-back-btn" onClick={handleBack}>
          Back
        </button>
        <div className="PageThirteen-progress-bar"></div>
        <button className="PageThirteen-next-btn" onClick={handleNextWithSave}>
          Next
        </button>
      </footer>
    </div>
  );
}
