import React, { useState } from "react";
import '../Host-Registration/css/pageFifteen.css';
import { ThreeDots } from "react-loading-icons";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export function PageFifteen({ handleNext, handleBack, handleSaveProperty, setSaveProperty }) {
  const [cards, setCards] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [newCard, setNewCard] = useState({ cardType: "", cardNumber: "" });
  const [editIndex, setEditIndex] = useState(null);
  const [selectedPayoutMethod, setSelectedPayoutMethod] = useState("Bank account");
  const [billingCountry, setBillingCountry] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate(); // Use the useNavigate hook for navigation

  // List of regions for the dropdown
  const regions = ["United Kingdom", "United States", "India", "Canada", "Australia", "Germany", "France"];

  // Handle Save or Edit Card
  const handleSaveCard = () => {
    if (!newCard.cardType || !newCard.cardNumber) {
      alert("Please fill in all card details!");
      return;
    }
    if (editIndex !== null) {
      const updatedCards = [...cards];
      updatedCards[editIndex] = newCard;
      setCards(updatedCards);
    } else {
      setCards([...cards, newCard]);
    }
    setNewCard({ cardType: "", cardNumber: "" });
    setEditIndex(null);
    setShowPopup(false);
    handleNext();
  };

  // Open Card Editor
  const handleEditCard = (index) => {
    setEditIndex(index);
    setNewCard(cards[index]);
    setShowPopup(true);
  };

  // Delete Card
  const handleDeleteCard = (index) => {
    const updatedCards = cards.filter((_, i) => i !== index);
    setCards(updatedCards);
  };

  // Save All Data and Show Loading, then navigate to home screen
  const handleSave = () => {
    if (!billingCountry) {
      alert("Please select a billing country/region.");
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      const data = {
        cards,
        payoutMethod: selectedPayoutMethod,
        billingCountry,
      };
      handleSaveProperty(data);
      setSaveProperty(true);
      setIsLoading(false);
      handleNext()
   
    }, 5000); // 5-second loading delay

  };

  return (
    <div className="PageFifteen-container">
      {isLoading ? (
        <div className="PageFifteen-loading">
          <ThreeDots fill="#4A90E2" width="100" />
        </div>
      ) : (
        <>
          {/* Saved Cards Section */}
          <div className="PageFifteen-saved-cards">
            <div className="PageFifteen-header">
              <h5>Saved Card</h5>
              <button onClick={() => setShowPopup(true)} className="PageFifteen-add-card-btn">
                + Add More Card
              </button>
            </div>
            {cards.length === 0 ? (
              <p className="PageFifteen-no-cards">No saved cards yet.</p>
            ) : (
              <div className="PageFifteen-card-list">
                {cards.map((card, index) => (
                  <div key={index} className="PageFifteen-card-item">
                    <div className="PageFifteen-card-info">
                      <span className="PageFifteen-card-type">{card.cardType}</span>
                      <span className="PageFifteen-card-number">...{card.cardNumber.slice(-4)}</span>
                    </div>
                    <div className="PageFifteen-card-actions">
                      <button onClick={() => handleEditCard(index)}>Edit</button>
                      <button onClick={() => handleDeleteCard(index)}>Delete</button>
                      <button>Choose Primary</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Payments & Payouts Section */}
          <div className="PageFifteen-payments">
            <h2>Payments & Payouts</h2>
            <h4>Your payments</h4>
            <p>Keep track of all your payments and refunds.</p>
            <button className="PageFifteen-manage-payments-btn">Manage payments</button>

            <h4>Let's add a payout method</h4>
            <p>To start, let us know where you'd like us to send your money.</p>
            <label>Billing country/region</label>
            <select
              value={billingCountry}
              onChange={(e) => setBillingCountry(e.target.value)}
              className="PageFifteen-input"
            >
              <option value="" disabled>
                Select your region
              </option>
              {regions.map((region) => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </select>
            <h4>How would you like to get paid?</h4>
            <div className="PageFifteen-payout-method">
              <label>
                <input
                  type="radio"
                  name="payout"
                  value="Bank account"
                  checked={selectedPayoutMethod === "Bank account"}
                  onChange={(e) => setSelectedPayoutMethod(e.target.value)}
                />
                Bank account (3–5 business days, No fees)
              </label>
              <label>
                <input
                  type="radio"
                  name="payout"
                  value="PayPal"
                  checked={selectedPayoutMethod === "PayPal"}
                  onChange={(e) => setSelectedPayoutMethod(e.target.value)}
                />
                PayPal (1 business day, PayPal fees may apply)
              </label>
            </div>
          </div>

          {/* Footer */}
          <div className="PageFifteen-footer">
            <button className="PageFifteen-footer-button" onClick={handleBack}>
              Back
            </button>
            <div className="PageFifteen-progress-bar"></div>
            <button className="PageFifteen-footer-button" onClick={handleSave}>
              Finish
            </button>
          </div>

          {/* Popup for Adding/Editing Card */}
          {showPopup && (
            <div className="PageFifteen-popup">
              <div className="PageFifteen-popup-content">
                <h4>{editIndex !== null ? "Edit Card" : "Add Card"}</h4>
                <label>Card Type</label>
                <input
                  type="text"
                  placeholder="e.g., VISA or MasterCard"
                  value={newCard.cardType}
                  onChange={(e) => setNewCard({ ...newCard, cardType: e.target.value })}
                  className="PageFifteen-input"
                />
                <label>Card Number</label>
                <input
                  type="text"
                  placeholder="Enter card number"
                  value={newCard.cardNumber}
                  onChange={(e) => setNewCard({ ...newCard, cardNumber: e.target.value })}
                  className="PageFifteen-input"
                />
                <div className="PageFifteen-popup-actions">
                  <button onClick={handleSaveCard}>Save</button>
                  <button onClick={() => setShowPopup(false)}>Cancel</button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
