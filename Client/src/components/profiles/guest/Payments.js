import React, { useState } from "react";
import "./Payments.css";

const Payments = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("bank");

  return (
    <div className="manage-payment-container">
      <h2 className="title">Manage Payment</h2>
      <p className="subtitle">
        Lorem Ipsum has been the industry’s standard dummy text ever since
      </p>

      <div className="saved-cards">
        <h4>Saved Card</h4>

        {/* Card 1 */}
        <div className="card-section">
          <div className="card-details">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Visa_2021.svg"
              alt="Visa"
              className="card-logo"
            />
            <span className="card-number">...xxx125</span>
          </div>
          <div className="card-actions">
            <span className="primary-checkmark">✔</span>
            <button className="three-dots">⋮</button>
            <div className="dropdown">
              <button>Edit</button>
              <button>Delete</button>
              <button>Set Primary</button>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card-section">
          <div className="card-details">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg"
              alt="MasterCard"
              className="card-logo"
            />
            <span className="card-number">...xxx125</span>
          </div>
          <div className="card-actions">
            <button className="three-dots">⋮</button>
            <div className="dropdown">
              <button>Edit</button>
              <button>Delete</button>
              <button>Set Primary</button>
            </div>
          </div>
        </div>

        <button className="add-card-btn">+ Add More Card</button>
      </div>

      <hr className="divider" />

      {/* Payments and Payouts */}
      <div className="payments-payouts">
        <h3>Payments & payouts</h3>
        <p className="section-description">Your payments</p>
        <button className="manage-payments-btn">Manage payments</button>

        <h4>Let's add a payout method</h4>
        <p className="section-description">
          To start, let us know where you'd like us to send your money.
        </p>

        <div className="payout-section">
          <label htmlFor="billing-country" className="field-label">
            Billing country/region
          </label>
          <input
            id="billing-country"
            type="text"
            value="United Kingdom"
            readOnly
            className="input-field"
          />

          <h5 className="field-label">How would you like to get paid?</h5>
          <div className="payment-method">
            <label className="radio-item">
              <input
                type="radio"
                name="payout"
                value="bank"
                checked={selectedPaymentMethod === "bank"}
                onChange={() => setSelectedPaymentMethod("bank")}
              />
              <span className="radio-label">
                <strong>Bank account</strong>
                <small>3–5 business days • No fees</small>
              </span>
            </label>
            <label className="radio-item">
              <input
                type="radio"
                name="payout"
                value="paypal"
                checked={selectedPaymentMethod === "paypal"}
                onChange={() => setSelectedPaymentMethod("paypal")}
              />
              <span className="radio-label">
                <strong>PayPal</strong>
                <small>1 business day • PayPal fees may apply</small>
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;
