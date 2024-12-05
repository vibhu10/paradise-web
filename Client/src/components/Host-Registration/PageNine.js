import { useState, useEffect } from "react";
import '../Host-Registration/css/pageNine.css';

export function PageNine({ handleNext, handleBack, handleSaveProperty }) {
  const [text, setText] = useState("");
  const [charCount, setCharCount] = useState(0);
  const [error, setError] = useState(""); // State to handle error message

  useEffect(() => {
    const count = text.length;
    setCharCount(count);

    if (count > 50) {
      alert("You have reached your limit of 50 characters.");
      setText(text.slice(0, 50));
    }
  }, [text]);

  // Function to handle saving data and moving to the next page
  const handleNextClick = async () => {
    if (text.trim() === "") {
      setError("Please enter a title for your property."); // Set error message
      return;
    }

    setError(""); // Clear error message if title is valid
    await handleSaveProperty({ title: text });
    handleNext();
  };

  return (
    <div className="page-nine-container">
      <div className="page-nine-body-host">
        <div className="page-nine-panel-box">
          <div className="page-nine-title-box">
            <h5 className="page-nine-title">Now, let's give your property a short title</h5>
            <p className="page-nine-subtitle">Short titles work best</p>
          </div>
          <textarea
            id="page-nine-textarea"
            className="page-nine-textarea"
            name="textarea-page9"
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows="4"
            cols="50"
            placeholder="Enter a short title for your property"
          />
          <p className="page-nine-char-count">{charCount}/50</p>
          {error && <p className="error-message">{error}</p>} {/* Conditionally render error message */}
        </div>
      </div>
      <footer className="page-nine-footer">
        <button className="page-nine-back-btn" onClick={handleBack}>
          Back
        </button>
        <div className="page-nine-progress-bar"></div>
        <button className="page-nine-next-btn" onClick={handleNextClick}>
          Next
        </button>
      </footer>
    </div>
  );
}
