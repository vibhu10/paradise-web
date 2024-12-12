import { useState } from "react";
import '../Host-Registration/css/pageTwo.css';

export function PageTwo({ handleBack, handleNext, handleSaveProperty }) {
  const [selectedValues, setSelectedValues] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const buttonData = [
    { icon: "bi-tree", label: "Unique" },
    { icon: "bi-house-door", label: "Luxury" },
    { icon: "bi-pencil-ruler", label: "Design" },
    { icon: "bi-water", label: "Waterfront" },
    { icon: "bi-people", label: "Group Stays" },
    { icon: "bi-mountain", label: "Scenic Views" },
    { icon: "bi-compass", label: "Adventure" },
    { icon: "bi-leaf", label: "Nature" },
    { icon: "bi-building", label: "City" },
    { icon: "bi-person-bounding-box", label: "Family" },
    { icon: "bi-controller", label: "Game House" },
    { icon: "bi-tree", label: "Countryside" },
    { icon: "bi-people", label: "Wellness" },
    { icon: "bi-bank", label: "Historical" },
    { icon: "bi-heart", label: "Romantic" },
    { icon: "bi-cash", label: "Budget-Friendly" },
    { icon: "bi-sun", label: "Seasonal" },
  ];

  const handleClick = (label) => {
    setSelectedValues((prevSelected) =>
      prevSelected.includes(label)
        ? prevSelected.filter((item) => item !== label)
        : [...prevSelected, label]
    );
    setErrorMessage("");
  };

  const handleNextClick = () => {
    if (selectedValues.length > 0) {
      const propertyData = { propertyType: selectedValues };
      handleSaveProperty(propertyData);
      handleNext();
    } else {
      setErrorMessage("Please select at least one property type before proceeding.");
    }
  };

  return (
    <div className="page-two-container">
      <div className="page-two-content">
        <h2 className="page-two-question">Which of these best describes your place?</h2>
        <p className="page-two-subtext">Select all that apply</p>

        <div className="page-two-grid">
          {buttonData.map((button, index) => (
            <button
              key={index}
              className={`page-two-button ${selectedValues.includes(button.label) ? "selected" : ""}`}
              onClick={() => handleClick(button.label)}
            >
              <i className={`bi ${button.icon} page-two-icon`}></i>
              <span className="page-two-label">{button.label}</span>
            </button>
          ))}
        </div>

        {errorMessage && <p className="page-two-error">{errorMessage}</p>}
      </div>

      <footer className="page-two-footer">
        <button className="page-two-back-btn" onClick={handleBack}>
          Back
        </button>
        <div className="page-two-progress-bar"></div>
        <button className="page-two-next-btn" onClick={handleNextClick}>
          Next
        </button>
      </footer>
    </div>
  );
}
