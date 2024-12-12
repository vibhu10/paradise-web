import React, { useState } from "react";

import './ReservationPage.css'
const ReservationsPage = () => {
  const reservations = [
    { days: "Completed on Nov 1", location: "New York, NY", dates: "Oct 25-28" },
    { days: "Completed on Oct 20", location: "Los Angeles, CA", dates: "Oct 15-17" },
    { days: "Completed on Oct 10", location: "Chicago, IL", dates: "Oct 5-7" },
    { days: "Completed on Sep 30", location: "Miami, FL", dates: "Sep 25-27" },
    { days: "Completed on Sep 15", location: "Dallas, TX", dates: "Sep 10-12" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle Next button click
  const handleNext = () => {
    if (currentIndex < reservations.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  // Handle Previous button click
  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="reservations-container">
      <h1>Welcome back, Webnext</h1>
      <p className="description">
        Lorem Ipsum has been the industry's standard dummy text ever since
      </p>

      <div className="reservations-section">
        <h2>Your reservations</h2>
        <div className="tabs">
          <span className="tab">Upcoming</span>
          <span className="tab active">Completed (6)</span>
          <span className="tab">Cancelled</span>
          <span className="tab">All</span>
        </div>

        {/* Carousel Wrapper */}
        <div className="carousel">
          <div
            className="carousel-track"
            style={{
              transform: `translateX(-${currentIndex * (100 / 3)}%)`,
              transition: "transform 0.5s ease-in-out",
            }}
          >
            {reservations.map((reservation, index) => (
              <div key={index} className="carousel-card">
                <span className="reservation-days">{reservation.days}</span>
                <div className="reservation-info">
                  <div className="reservation-image">
                    <img
                      src={`https://via.placeholder.com/100`}
                      alt="Reservation"
                    />
                  </div>
                  <div>
                    <h3>{reservation.location}</h3>
                    <p>{reservation.dates}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Controls */}
        <div className="pagination">
          <button
            className="pagination-button"
            onClick={handlePrevious}
            disabled={currentIndex === 0}
          >
            ❮
          </button>
          <button
            className="pagination-button"
            onClick={handleNext}
            disabled={currentIndex === reservations.length - 3}
          >
            ❯
          </button>
        </div>
      </div>

      <div className="help-section">
        <h2>We're here to help</h2>
        <div className="help-card">
          <div className="help-icon">
            <img src="https://via.placeholder.com/50" alt="Help icon" />
          </div>
          <div>
            <h3>Contact specialised support</h3>
            <p>
              As a new Host, you get one-tap access to a specially trained
              support team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationsPage;
