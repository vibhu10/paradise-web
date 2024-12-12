import React, { useState, useEffect } from "react";
import "./CalendarWithBookings.css";

const generateRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const Sidebar = ({ properties, onPropertyClick }) => (
  <div className="Sidebar">
    <h2 className="Sidebar__header">Available Listings</h2>
    <input
      type="text"
      className="Sidebar__search"
      placeholder="Search all listings"
    />
    <ul className="Sidebar__list">
      {properties.map((property, index) => (
        <li
          key={index}
          className="Sidebar__item"
          onClick={() => onPropertyClick(property)}
        >
          <div className="Sidebar__itemImage"></div>
          <div className="Sidebar__itemInfo">
            <h3 className="Sidebar__itemName">{property.name}</h3>
            <p className="Sidebar__itemDescription">{property.description}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

const Calendar = ({ bookings, selectedMonth, transition, currentDate, selectedYear }) => {
  const daysInMonth = new Date(selectedYear, monthNames.indexOf(selectedMonth) + 1, 0).getDate(); // Correct number of days in selected month

  return (
    <div className={`Calendar ${transition}`}>
      <div className="Calendar__header">
        <h2 className="Calendar__headerTitle">
          {selectedMonth} {selectedYear}
        </h2>
        <div className="Calendar__headerActions">
          <button className="Calendar__headerButton">Pricing</button>
          <button className="Calendar__headerButton">Availability</button>
        </div>
      </div>
      <div className="Calendar__grid">
        {Array.from({ length: daysInMonth }).map((_, dayIndex) => {
          const day = dayIndex + 1;
          const isToday = currentDate.day === day && currentDate.month === selectedMonth && currentDate.year === selectedYear;  // Fix comparison to include year
          const dayBookings = bookings.filter(
            (booking) =>
              booking.startDay <= day &&
              booking.endDay >= day &&
              booking.month === selectedMonth
          );

          return (
            <div
              key={day}
              className={`Calendar__day ${isToday ? "Calendar__day--today" : ""}`}
            >
              <span className="Calendar__dayNumber">{day}</span>
              <span className="Calendar__dayPrice">$122</span>
              {dayBookings.map((booking, index) => {
                const isStart = day === booking.startDay;
                const isEnd = day === booking.endDay;
                const span = booking.endDay - booking.startDay + 1;

                return (
                  <div
                    key={index}
                    className="Calendar__event"
                    style={{
                      gridColumn: isStart ? `span ${span}` : undefined,
                      backgroundColor: booking.color,
                      borderTopLeftRadius: isStart ? "18px" : "0px",
                      borderBottomLeftRadius: isStart ? "18px" : "0px",
                      borderTopRightRadius: isEnd ? "18px" : "0px",
                      borderBottomRightRadius: isEnd ? "18px" : "0px",
                      width:"120%",
                      position:"relative",
                      
                    }}
                  >
                    {isStart && (
                      <div className="Calendar__eventDetails">
                        <img
                          src={booking.image}
                          alt={booking.name}
                          className="Calendar__eventImage"
                        />
                        <span className="Calendar__eventText">
                          {booking.name} <br />
                          {`${booking.month} ${booking.startDay}-${booking.endDay}`}
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const CalendarApp = () => {
  const properties = [
    {
      name: "Miami, Florida",
      description: "Oceanfront paradise with modern amenities.",
      bookings: [
        {
          name: "Jacqueline",
          startDay: 7,
          endDay: 9,
          month: "August",
          color: generateRandomColor(),
          image: "https://via.placeholder.com/30",
        },
        {
          name: "George",
          startDay: 15,
          endDay: 17,
          month: "August",
          color: generateRandomColor(),
          image: "https://via.placeholder.com/30",
        },
      ],
    },
    {
      name: "Los Angeles, California",
      description: "Spacious and vibrant urban retreat.",
      bookings: [
        {
          name: "Sarah",
          startDay: 12,
          endDay: 14,
          month: "September",
          color: generateRandomColor(),
          image: "https://via.placeholder.com/30",
        },
        {
          name: "Tom",
          startDay: 25,
          endDay: 30,
          month: "September",
          color: generateRandomColor(),
          image: "https://via.placeholder.com/30",
        },
      ],
    },
    {
      name: "New York City, New York",
      description: "Luxury apartment with city views.",
      bookings: [
        {
          name: "Emily",
          startDay: 5,
          endDay: 10,
          month: "October",
          color: generateRandomColor(),
          image: "https://via.placeholder.com/30",
        },
        {
          name: "Chris",
          startDay: 20,
          endDay: 22,
          month: "October",
          color: generateRandomColor(),
          image: "https://via.placeholder.com/30",
        },
      ],
    },
    {
      name: "Paris, France",
      description: "Romantic apartment near Eiffel Tower.",
      bookings: [
        {
          name: "Monica",
          startDay: 1,
          endDay: 3,
          month:"December",
          color: generateRandomColor(),
          image: "https://via.placeholder.com/30",
        },
        {
          name: "Liam",
          startDay: 10,
          endDay: 14,
          month: "December",
          color: generateRandomColor(),
          image: "https://via.placeholder.com/30",
        },
      ],
    },
    {
      name: "Tokyo, Japan",
      description: "Modern apartment with stunning city views.",
      bookings: [
        {
          name: "Yuki",
          startDay: 18,
          endDay: 20,
          month: "December",
          color: generateRandomColor(),
          image: "https://via.placeholder.com/30",
        },
        {
          name: "Kenji",
          startDay: 22,
          endDay: 25,
          month: "December",
          color: generateRandomColor(),
          image: "https://via.placeholder.com/30",
        },
      ],
    },
  ];

  const today = new Date();
  const [selectedBookings, setSelectedBookings] = useState([]);
  const [currentMonthIndex, setCurrentMonthIndex] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [transition, setTransition] = useState("");

  const currentDate = {
    day: today.getDate(),
    month: monthNames[today.getMonth()],
  };

  const handlePropertyClick = (property) => {
    setSelectedBookings(property.bookings);
  };

  const handleNextMonth = () => {
    setTransition("slide-left");
    setTimeout(() => {
      if (currentMonthIndex === 11) {
        setCurrentMonthIndex(0);
        setCurrentYear((prev) => prev + 1); // Move to next year
      } else {
        setCurrentMonthIndex((prev) => prev + 1);
      }
      setTransition("");
    }, 500);
  };

  const handlePrevMonth = () => {
    setTransition("slide-right");
    setTimeout(() => {
      if (currentMonthIndex === 0) {
        setCurrentMonthIndex(11);
        setCurrentYear((prev) => prev - 1); // Move to previous year
      } else {
        setCurrentMonthIndex((prev) => prev - 1);
      }
      setTransition("");
    }, 500);
  };

  const selectedMonth = monthNames[currentMonthIndex];

  return (
    <div className="CalendarApp__container">
      <Sidebar properties={properties} onPropertyClick={handlePropertyClick} />
      <Calendar
        bookings={selectedBookings}
        selectedMonth={selectedMonth}
        transition={transition}
        currentDate={currentDate}
        selectedYear={currentYear}
      />
      <div className="CalendarApp__arrows">
        <button className="CalendarApp__arrow" onClick={handlePrevMonth}>
          &#x25C0;
        </button>
        <button className="CalendarApp__arrow" onClick={handleNextMonth}>
          &#x25B6;
        </button>
      </div>
    </div>
  );
};

export default CalendarApp;
