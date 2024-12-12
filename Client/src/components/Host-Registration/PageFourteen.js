import { useState } from "react";
import '../Host-Registration/css/pageFourteen.css';

export function PageFourteen({ handleNext, handleBack, handleSaveProperty }) {
  const [houseRules, setHouseRules] = useState({
    petsAllowed: false,
    maxNoPets: 0,
    smokingAllowed: false,
    commercialPhotography: false,
    eventAllowed: false,
    numberOfGuests: 0,
  });

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setHouseRules((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const incrementValue = (key) => {
    setHouseRules((prev) => ({
      ...prev,
      [key]: prev[key] + 1,
    }));
  };

  const decrementValue = (key) => {
    setHouseRules((prev) => ({
      ...prev,
      [key]: prev[key] > 0 ? prev[key] - 1 : 0,
    }));
  };

  // Function to handle saving data when Next is pressed
  const handleNextWithSave = () => {
    handleSaveProperty({
      houseRules: houseRules,
    });

    handleNext();
  };

  return (
    <div className="PageFourteen-container">
    
        <div className="PageFourteen-panel-box">
          <h4>House Rules</h4>
          <p>
            Guests are expected to follow your rules and may be removed from
            Paradise if they don't.
          </p>

          {/* Pets Allowed */}
          <h6>Pets allowed</h6>
          <p>
            You can refuse pets, but must reasonably accommodate service
            animals.
            <input
              style={{ marginLeft: "40px" }}
              type="checkbox"
              name="petsAllowed"
              checked={houseRules.petsAllowed}
              onChange={handleCheckboxChange}
            />
          </p>

          {/* Maximum Number of Pets */}
          <h6>
            Maximum number of pets allowed{" "}
            <button
              style={{
                marginLeft: "232px",
                border: "1px solid gray",
                borderRadius: "5px",
              }}
              onClick={() => incrementValue("maxNoPets")}
            >
              +
            </button>
            <span style={{ margin: "0 10px" }}>{houseRules.maxNoPets}</span>
            <button
              style={{ border: "1px solid gray", borderRadius: "5px" }}
              onClick={() => decrementValue("maxNoPets")}
            >
              -
            </button>
          </h6>

          {/* Smoking Allowed */}
          <h6>
            Smoking, vaping, e‑cigarettes allowed
            <input
              style={{ marginLeft: "270px" }}
              type="checkbox"
              name="smokingAllowed"
              checked={houseRules.smokingAllowed}
              onChange={handleCheckboxChange}
            />
          </h6>

          {/* Commercial Photography Allowed */}
          <h6>
            Commercial photography and filming allowed
            <input
              style={{ marginLeft: "213px" }}
              type="checkbox"
              name="commercialPhotography"
              checked={houseRules.commercialPhotography}
              onChange={handleCheckboxChange}
            />
          </h6>

          {/* Event Allowed */}
          <h6>
            Event allowed
            <input
              style={{ marginLeft: "444px" }}
              type="checkbox"
              name="eventAllowed"
              checked={houseRules.eventAllowed}
              onChange={handleCheckboxChange}
            />
          </h6>

          {/* Number of Guests */}
          <h6>
            Number of Guests{" "}
            <button
              style={{
                marginLeft: "350px",
                border: "1px solid gray",
                borderRadius: "5px",
              }}
              onClick={() => incrementValue("numberOfGuests")}
            >
              +
            </button>
            <span style={{ margin: "0 10px" }}>{houseRules.numberOfGuests}</span>
            <button
              style={{ border: "1px solid gray", borderRadius: "5px" }}
              onClick={() => decrementValue("numberOfGuests")}
            >
              -
            </button>
          </h6>
        </div>
      
      <div className="PageFourteen-footer">
        <button className="PageFourteen-footer-button" onClick={handleBack}>
          Back
        </button>
        <div className="PageFourteen-progress-bar"></div>
       
        <button className="PageFourteen-footer-button" onClick={handleNextWithSave}>
          Next
        </button>
      </div>
    </div>
  );
}
