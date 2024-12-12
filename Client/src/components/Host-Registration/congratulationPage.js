import React from "react";
import { useNavigate } from "react-router-dom";
import '../Host-Registration/css/congratulation.css'

export default function CongratulationsPage({ name }){
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/");
  };

  return (
    <div className="congratulations-container">
      <div className="message-box">
        <h1>Congratulations, {name}!</h1>
        <p>
          From one Host to another – welcome aboard. Thank you for sharing your
          home and helping to create incredible experiences for our guests.
        </p>
        <div className="signature">
          <p>Brian Chesky, CEO</p>
        </div>
        <button onClick={handleButtonClick} className="cta-button">
          Let’s get started
        </button>
      </div>
    </div>
  );
};
