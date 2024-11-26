import { useEffect, useState } from "react";
import '../Host-Registration/css/pageTen.css'

export function PageTen({ handleNext, handleBack, handleSaveProperty }) {
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [price, setPrice] = useState({
    BaseCharge: 0,
    ServiceFees: 0,
    PriceBeforeTax: 0,
    YouEarn: 0,
  });

  const [errors, setErrors] = useState({ description: false, price: false });

  useEffect(() => {
    const words = text.trim().split(/\s+/);
    const count = words.filter((word) => word.length > 0).length;
    setWordCount(count);

    if (count > 400) {
      alert("You have reached your limit of 400 words.");
      setText(words.slice(0, 400).join(" "));
    }
  }, [text]);

  function handlePrice(e) {
    const baseCharge = parseFloat(e.target.value) || 0;
    const serviceFees = (baseCharge * 14) / 100;
    const youearn = (baseCharge * 3) / 100;

    setPrice((prevPrice) => ({
      ...prevPrice,
      BaseCharge: baseCharge,
      ServiceFees: serviceFees,
      PriceBeforeTax: baseCharge + serviceFees,
      YouEarn: baseCharge - youearn,
    }));
  }

  const validateForm = () => {
    const descriptionError = text.trim() === "";
    const priceError = price.BaseCharge <= 0;
    setErrors({ description: descriptionError, price: priceError });
    return !descriptionError && !priceError;
  };

  const handleNextClick = async () => {
    if (validateForm()) {
      await handleSaveProperty({ description: text, pricing: price });
      handleNext();
    }
  };

  return (
    <div className="PageTen-container">
      <div className="PageTen-panel">
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

        <div className="PageTen-pricing">
          <h5>Now, set your price</h5>
          <p>You can change it anytime.</p>
          <input
            className="PageTen-price-input"
            type="number"
            value={price.BaseCharge === 0 ? "" : price.BaseCharge}
            onChange={handlePrice}
            placeholder="Add price"
          />
          {errors.price && <p className="PageTen-error">Price is required.</p>}
          <div className="PageTen-price-details">
            <p>
              Base price <span>${price.BaseCharge.toFixed(2)}</span>
            </p>
            <p>
              Guest service fee <span>${price.ServiceFees.toFixed(2)}</span>
            </p>
            <p>
              Guest price before taxes <span>${price.PriceBeforeTax.toFixed(2)}</span>
            </p>
            <p className="PageTen-you-earn">
              You earn <span>${price.YouEarn.toFixed(2)}</span>
            </p>
          </div>
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
