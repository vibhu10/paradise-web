import { useState } from "react";
import '../Host-Registration/css/pageSix.css'
export function PageSix({ handleNext, handleBack, handleSaveProperty }) {
  const [counter, setCounter] = useState({
    Guests: 1,
    Bedrooms: 1,
    Beds: 1,
    Bathrooms: 1,
  });

  function handleIncrement(item) {
    setCounter((prevCounter) => ({
      ...prevCounter,
      [item]: prevCounter[item] + 1,
    }));
  }

  function handleDecrement(item) {
    setCounter((prevCounter) => ({
      ...prevCounter,
      [item]: prevCounter[item] > 1 ? prevCounter[item] - 1 : 1,
    }));
  }

  const handleNextClick = async () => {
    const basicData = { basicDetails: counter };
    await handleSaveProperty(basicData);
    handleNext();
  };

  return (
    <div className="page-six-container">
      <div className="page-six-header">
        <h2>Share some basics about your place</h2>
        <p>You'll add more details later, such as bed types.</p>
      </div>
      <div className="page-six-counter-grid">
        {["Guests", "Bedrooms", "Beds", "Bathrooms"].map((item) => (
          <div className="page-six-counter-box" key={item}>
            <span className="page-six-counter-label">{item}</span>
            <div className="page-six-counter-controls">
              <button
                className="page-six-counter-button"
                onClick={() => handleDecrement(item)}
              >
                –
              </button>
              <span className="page-six-counter-value">{counter[item]}</span>
              <button
                className="page-six-counter-button"
                onClick={() => handleIncrement(item)}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="page-six-footer">
        <button className="page-six-footer-button" onClick={handleBack}>
          Back
        </button>
        <div className="page-six-progress-bar"></div>
       
        <button className="page-six-footer-button" onClick={handleNextClick}>
          Next
        </button>
      </div>
    </div>
  );
}
