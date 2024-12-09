import React, { useState } from "react";
import "./CalendarWithBookings.css";

const CalendarWithBookings = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth()); // 0-based index (0 = January)

  // Generate days for the current month
  const generateCalendar = () => {
    const firstDayOfMonth = new Date(year, month, 1).getDay(); // Day of the week (0 = Sunday)
    const daysInMonth = new Date(year, month + 1, 0).getDate(); // Total days in the month

    const calendarDays = [];

    // Add blank days for the first row
    for (let i = 0; i < firstDayOfMonth; i++) {
      calendarDays.push(null);
    }

    // Add actual days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      calendarDays.push(i);
    }

    return calendarDays;
  };

  // Handle month navigation
  const handlePrevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const handleNextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  // Month names for display
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="calendar-container">
      {/* Header */}
      <div className="calendar-header">
        <button onClick={handlePrevMonth}>&lt;</button>
        <h2>
          {monthNames[month]} {year}
        </h2>
        <button onClick={handleNextMonth}>&gt;</button>
      </div>

      {/* Days of the Week */}
      <div className="calendar-days-of-week">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="day-of-week">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="calendar-grid">
        {generateCalendar().map((day, index) => (
          <div key={index} className={`calendar-day ${day ? "" : "empty-day"}`}>
            {day && <span className="day-number">{day}</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarWithBookings;
