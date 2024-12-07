import React, { useState } from "react";
import "./UpcomingReservations.css";

const UpcomingReservations = () => {
  const allReservations = [
    { status: "Upcoming", days: "3 days left", location: "New York, NY", dates: "Dec 10-12" },
    { status: "Upcoming", days: "7 days left", location: "San Francisco, CA", dates: "Dec 15-17" },
    { status: "Completed", days: "Completed on Nov 1", location: "New York, NY", dates: "Oct 25-28" },
    { status: "Completed", days: "Completed on Oct 20", location: "Los Angeles, CA", dates: "Oct 15-17" },
    { status: "Cancelled", days: "Cancelled on Sep 30", location: "Miami, FL", dates: "Sep 25-27" },
    { status: "Cancelled", days: "Cancelled on Sep 15", location: "Dallas, TX", dates: "Sep 10-12" },
  ];

  const [selectedTab, setSelectedTab] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredReservations =
    selectedTab === "All" ? allReservations : allReservations.filter((res) => res.status === selectedTab);

  const handleNext = () => {
    if (currentIndex < filteredReservations.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="upcoming-reservations-container">
      <h1>Welcome back, Webnext</h1>
      <p className="upcoming-reservations-description">
        Lorem Ipsum has been the industry's standard dummy text ever since
      </p>

      <div className="upcoming-reservations-section">
        <h2>Your reservations</h2>
        <div className="upcoming-reservations-tabs">
          {["Upcoming", "Completed", "Cancelled", "All"].map((tab) => (
            <span
              key={tab}
              className={`upcoming-reservations-tab ${selectedTab === tab ? "active" : ""}`}
              onClick={() => {
                setSelectedTab(tab);
                setCurrentIndex(0); // Reset index on tab change
              }}
            >
              {tab}
            </span>
          ))}
        </div>

        {filteredReservations.length > 0 ? (
          <>
            <div className="upcoming-reservations-carousel">
              <div
                className="upcoming-reservations-carousel-track"
                style={{
                  transform: `translateX(-${currentIndex * (100 / 3)}%)`,
                  transition: "transform 0.5s ease-in-out",
                }}
              >
                {filteredReservations.map((reservation, index) => (
                  <div key={index} className="upcoming-reservations-carousel-card">
                    <span className="upcoming-reservations-days">{reservation.days}</span>
                    <div className="upcoming-reservations-info">
                      <div className="upcoming-reservations-image">
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

            <div className="upcoming-reservations-pagination">
              <button
                className="upcoming-reservations-pagination-button"
                onClick={handlePrevious}
                disabled={currentIndex === 0}
              >
                ❮
              </button>
              <button
                className="upcoming-reservations-pagination-button"
                onClick={handleNext}
                disabled={currentIndex === filteredReservations.length - 3}
              >
                ❯
              </button>
            </div>
          </>
        ) : (
          <p className="upcoming-reservations-no-data">No reservations available.</p>
        )}
      </div>

      <div className="upcoming-reservations-help-section">
        <h2>We're here to help</h2>
        <div className="upcoming-reservations-help-card">
          <div className="upcoming-reservations-help-icon">
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

export default UpcomingReservations;
