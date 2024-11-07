import { useState } from "react";

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

  // Function to save data and navigate to the next page
  const handleNextClick = async () => {
    await handleSaveProperty(counter); // Save the counter data
    handleNext(); // Navigate to the next page
  };

  return (
    <div>
      <header className="header-host">
        <img src="/48564e5fe8898cf62b0bbf42276d6cf3.jpeg" alt="paradise" />
        <button>Exit</button>
      </header>

      <div className="body-host">
        <div className="page-6-div">
          <div className="page-6-div-text">
            <h3 style={{ textAlign: "center" }}>Share some basics about your place</h3>
            <p style={{ textAlign: "center", color: "gray", fontWeight: "600" }}>
              You'll add more details later, such as bed types.
            </p>
          </div>

          <div className="page-6-button-div-outer">
            {["Guests", "Bedrooms", "Beds", "Bathrooms"].map((item) => (
              <div className="page-6-button-div-inner" key={item}>
                <h5 style={{ textAlign: "center" }}>{item}</h5>
                <div className="page-6-button-div-inner-2">
                  <button
                    onClick={() => handleDecrement(item)}
                    style={{ margin: "10px", borderRadius: "2px", paddingLeft: "8px", paddingRight: "8px" }}
                  >
                    -
                  </button>
                  <span style={{ color: "black" }}>{counter[item]}</span>
                  <button onClick={() => handleIncrement(item)} style={{ margin: "10px" }}>
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="host-footer">
        <button onClick={handleBack}>Back</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
}
