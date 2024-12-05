import { useEffect, useState } from "react";
import '../Host-Registration/css/pageTen.css'

export function PageTen({ handleNext, handleBack, handleSaveProperty }) {
  const [text, setText] = useState(""); // Description text
  const [wordCount, setWordCount] = useState(0);
  const [internalName, setinternalName] = useState(""); // Property name state
  const [errors, setErrors] = useState({ description: false, internalName: false });

  useEffect(() => {
    const words = text.trim().split(/\s+/);
    const count = words.filter((word) => word.length > 0).length;
    setWordCount(count);

    if (count > 400) {
      alert("You have reached your limit of 400 words.");
      setText(words.slice(0, 400).join(" "));
    }
  }, [text]);

  const validateForm = () => {
    const descriptionError = text.trim() === "";
    const internalNameError = internalName.trim() === "";
   
    setErrors({ description: descriptionError, internalName: internalNameError });
    return !(descriptionError || internalNameError); // Returns true only if no errors
  };

  const handleNextClick = async () => {
    if (validateForm()) {
      await handleSaveProperty({ description: text, internalName });
      handleNext();
    }
  };

  return (
    <div className="PageTen-container">
      <div className="PageTen-panel">
        <div className="PageTen-property-name">
          <h5>Property Name</h5>
          <p className="PageTen-subtitle">Give your property a internal name .will be visible to you only</p>
          <input
            type="text"
            value={internalName}
            onChange={(e) => setinternalName(e.target.value)}
            placeholder="Enter property name"
            className={`PageTen-property-name-input ${errors.internalName ? 'error' : ''}`}
          />
          {errors.internalName && <p className="PageTen-error">Property name is required.</p>}
        </div>

        <div className="PageTen-description">
          <h5>Create your description</h5>
          <p>Share what makes your place special.</p>
          <textarea
            id="PageTen-description-textarea"
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows="6"
            placeholder="Describe your property..."
          />
          <p className="PageTen-word-count">{wordCount}/400</p>
          {errors.description && <p className="PageTen-error">Description is required.</p>}
        </div>
      </div>

      <footer className="PageTen-footer">
        <button className="PageTen-back-btn" onClick={handleBack}>
          Back
        </button>
        <div className="PageTen-progress-bar"></div>
        <button className="PageTen-next-btn" onClick={handleNextClick}>
          Next
        </button>
      </footer>
    </div>
  );
}
