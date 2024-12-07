import React, { useState } from "react";
import "./ListingsCalendar.css";

const ListingsCalendar = () => {
  const [selectedListing, setSelectedListing] = useState(null);

  // Sidebar Listings
  const listings = [
    { id: 1, location: "Miami, Florida", description: "Beachfront property with stunning views." },
    { id: 2, location: "Orlando, Florida", description: "Family-friendly home near theme parks." },
  ];

  // Bookings Data
  const bookingsData = {
    1: [
      {
        guest: "Jacqueline",
        avatar: "https://via.placeholder.com/32",
        startDate: "2024-08-03",
        endDate: "2024-08-10",
        price: "$204",
        color: "#6c757d",
      },
      {
        guest: "Michael",
        avatar: "https://via.placeholder.com/32",
        startDate: "2024-08-22",
        endDate: "2024-08-24",
        price: "$250",
        color: "#007bff",
      },
    ],
    2: [
      {
        guest: "Sophia",
        avatar: "https://via.placeholder.com/32",
        startDate: "2024-08-11",
        endDate: "2024-08-15",
        price: "$180",
        color: "#28a745",
      },
    ],
  };

  const bookings = selectedListing ? bookingsData[selectedListing.id] || [] : [];

  const renderCalendar = () => {
    const daysInMonth = 31; // August 2024
    const firstDayOfWeek = new Date(2024, 7, 1).getDay(); // August starts on Thursday
    const calendar = new Array(42).fill(null);

    // Prepare the days in the calendar
    for (let i = firstDayOfWeek; i < daysInMonth + firstDayOfWeek; i++) {
      const day = i - firstDayOfWeek + 1;
      calendar[i] = { day, bookings: [] };
    }

    // Map bookings into the calendar
    bookings.forEach((booking) => {
      const startDay = new Date(booking.startDate).getDate();
      const endDay = new Date(booking.endDate).getDate();

      const startIndex = startDay + firstDayOfWeek - 1;
      const endIndex = endDay + firstDayOfWeek - 1;

      if (calendar[startIndex]) {
        calendar[startIndex].bookings.push({
          ...booking,
          span: endIndex - startIndex + 1, // Calculate span based on start and end dates
        });
      }
    });

    return calendar.map((cell, index) => {
      if (!cell) return <div key={index} className="calendar-cell empty"></div>;

      return (
        <div key={index} className="calendar-cell">
          <span className="day-number">{cell.day}</span>
          {cell.bookings.map((booking, idx) => (
            <div
              key={idx}
              className="booking-bar"
              style={{
                backgroundColor: booking.color,
                gridColumn: `span ${booking.span}`, // Span across multiple days
              }}
            >
              <img src={booking.avatar} alt={booking.guest} className="avatar" />
              <div className="booking-info">
                <strong>{booking.guest}</strong>
                <span>{booking.price}</span>
              </div>
            </div>
          ))}
        </div>
      );
    });
  };

  return (
    <div className="listings-calendar-container">
      <div className="sidebar">
        <h5>{listings.length} Listings</h5>
        <input type="text" placeholder="Search all listings" className="search-bar" />
        <ul className="listings-list">
          {listings.map((listing) => {
            const totalBookings = bookingsData[listing.id]?.length || 0;
            return (
              <li
                key={listing.id}
                className={`listing-item ${selectedListing?.id === listing.id ? "active" : ""}`}
                onClick={() => setSelectedListing(listing)}
              >
                <img src="https://via.placeholder.com/50" alt="Listing" className="listing-image" />
                <div className="listing-details">
                  <h6>{listing.location}</h6>
                  <p>{listing.description}</p>
                  <span className="booking-count">{totalBookings} Bookings</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="calendar-container">
        <header className="calendar-header">
          <h5>August 2024</h5>
          <div className="header-buttons">
            <button className="pricing-button">Pricing</button>
            <button className="availability-button">Availability</button>
          </div>
        </header>
        <div className="calendar-grid">{renderCalendar()}</div>
      </div>
    </div>
  );
};

export default ListingsCalendar;
