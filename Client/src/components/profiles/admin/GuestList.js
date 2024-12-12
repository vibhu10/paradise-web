import React, { useState } from "react";
import "./GuestList.css";

// Correcting any typos in the data, e.g., "CCanceled" → "Canceled"
const bookings = [
    { id: "#GS-2234", name: "Yonna", avatar: "/image.png", dateOrder: "Sunday, Oct 24th, 2023", checkIn: "Oct 29th, 2023", checkOut: "Oct 31st, 2023", time: "08:29 AM", specialRequest: "View Notes", roomType: "Queen A-2345", roomNumber: "Room No. 0024", status: "Pending" },
    { id: "#GS-2235", name: "Michael", avatar: "/image.png", dateOrder: "Monday, Oct 25th, 2023", checkIn: "Nov 1st, 2023", checkOut: "Nov 3rd, 2023", time: "10:15 AM", specialRequest: "Extra Towels", roomType: "King B-1234", roomNumber: "Room No. 0025", status: "Canceled" },
    { id: "#GS-2236", name: "Sophia", avatar: "/image.png", dateOrder: "Wednesday, Oct 26th, 2023", checkIn: "Nov 2nd, 2023", checkOut: "Nov 5th, 2023", time: "03:40 PM", specialRequest: "Early Check-in", roomType: "Twin A-3345", roomNumber: "Room No. 0026", status: "Booked" },
    { id: "#GS-2237", name: "James", avatar: "/image.png", dateOrder: "Thursday, Oct 27th, 2023", checkIn: "Nov 3rd, 2023", checkOut: "Nov 7th, 2023", time: "09:55 AM", specialRequest: "Sea View", roomType: "King C-2234", roomNumber: "Room No. 0027", status: "Pending" },
    { id: "#GS-2238", name: "Emma", avatar: "/image.png", dateOrder: "Friday, Oct 28th, 2023", checkIn: "Nov 5th, 2023", checkOut: "Nov 8th, 2023", time: "02:30 PM", specialRequest: "Late Checkout", roomType: "Queen B-4545", roomNumber: "Room No. 0028", status: "Refund" },
    { id: "#GS-2239", name: "William", avatar: "/image.png", dateOrder: "Saturday, Oct 29th, 2023", checkIn: "Nov 10th, 2023", checkOut: "Nov 12th, 2023", time: "01:10 PM", specialRequest: "Extra Pillows", roomType: "Twin A-5678", roomNumber: "Room No. 0029", status: "Booked" },
    { id: "#GS-2240", name: "Olivia", avatar: "/image.png", dateOrder: "Sunday, Oct 30th, 2023", checkIn: "Nov 12th, 2023", checkOut: "Nov 15th, 2023", time: "04:05 PM", specialRequest: "High Floor", roomType: "Queen C-7890", roomNumber: "Room No. 0030", status: "Canceled" },
    { id: "#GS-2241", name: "Liam", avatar: "/image.png", dateOrder: "Monday, Oct 31st, 2023", checkIn: "Nov 15th, 2023", checkOut: "Nov 18th, 2023", time: "06:45 AM", specialRequest: "Vegetarian Meals", roomType: "King D-7890", roomNumber: "Room No. 0031", status: "Refund" },
    { id: "#GS-2242", name: "Ava", avatar: "/image.png", dateOrder: "Tuesday, Nov 1st, 2023", checkIn: "Nov 18th, 2023", checkOut: "Nov 22nd, 2023", time: "11:25 AM", specialRequest: "Early Check-in", roomType: "Queen B-9876", roomNumber: "Room No. 0032", status: "Pending" },
    { id: "#GS-2243", name: "Ethan", avatar: "/image.png", dateOrder: "Wednesday, Nov 2nd, 2023", checkIn: "Nov 22nd, 2023", checkOut: "Nov 25th, 2023", time: "08:35 AM", specialRequest: "Smoking Room", roomType: "King A-2345", roomNumber: "Room No. 0033", status: "Refund" },
    { id: "#GS-2244", name: "Charlotte", avatar: "/image.png", dateOrder: "Thursday, Nov 3rd, 2023", checkIn: "Nov 25th, 2023", checkOut: "Nov 27th, 2023", time: "10:50 AM", specialRequest: "Non-Smoking", roomType: "Twin C-8765", roomNumber: "Room No. 0034", status: "Booked" },
    { id: "#GS-2245", name: "Benjamin", avatar: "/image.png", dateOrder: "Friday, Nov 4th, 2023", checkIn: "Nov 27th, 2023", checkOut: "Nov 30th, 2023", time: "09:30 AM", specialRequest: "City View", roomType: "Queen A-1234", roomNumber: "Room No. 0035", status: "Pending" },
    { id: "#GS-2246", name: "Amelia", avatar: "/image.png", dateOrder: "Saturday, Nov 5th, 2023", checkIn: "Dec 1st, 2023", checkOut: "Dec 3rd, 2023", time: "03:40 PM", specialRequest: "Allergy-Free Bedding", roomType: "King B-6543", roomNumber: "Room No. 0036", status: "Refund" },
    { id: "#GS-2247", name: "Mason", avatar: "/image.png", dateOrder: "Sunday, Nov 6th, 2023", checkIn: "Dec 3rd, 2023", checkOut: "Dec 5th, 2023", time: "12:15 PM", specialRequest: "Accessible Room", roomType: "Twin D-3334", roomNumber: "Room No. 0037", status: "Booked" },
    { id: "#GS-2248", name: "Harper", avatar: "/image.png", dateOrder: "Monday, Nov 7th, 2023", checkIn: "Dec 5th, 2023", checkOut: "Dec 8th, 2023", time: "07:55 AM", specialRequest: "Extra Towels", roomType: "Queen A-5432", roomNumber: "Room No. 0038", status: "Pending" },
    { id: "#GS-2249", name: "Alexander", avatar: "/image.png", dateOrder: "Tuesday, Nov 8th, 2023", checkIn: "Dec 8th, 2023", checkOut: "Dec 10th, 2023", time: "09:10 AM", specialRequest: "King Bed", roomType: "King C-2341", roomNumber: "Room No. 0039", status: "Canceled" },
    { id: "#GS-2250", name: "Ella", avatar: "/image.png", dateOrder: "Wednesday, Nov 9th, 2023", checkIn: "Dec 10th, 2023", checkOut: "Dec 12th, 2023", time: "10:05 AM", specialRequest: "Extra Pillows", roomType: "Queen D-1234", roomNumber: "Room No. 0040", status: "Booked" },
    { id: "#GS-2251", name: "Jacob", avatar: "/image.png", dateOrder: "Thursday, Nov 10th, 2023", checkIn: "Dec 12th, 2023", checkOut: "Dec 15th, 2023", time: "02:45 PM", specialRequest: "Non-Smoking", roomType: "King B-7654", roomNumber: "Room No. 0041", status: "Refund" },
    { id: "#GS-2252", name: "Evelyn", avatar: "/image.png", dateOrder: "Friday, Nov 11th, 2023", checkIn: "Dec 15th, 2023", checkOut: "Dec 18th, 2023", time: "08:20 AM", specialRequest: "Sea View", roomType: "Queen C-2342", roomNumber: "Room No. 0042", status: "Pending" },
    // Add more as needed...
  ];
  

export default function GuestList() {
  const [guests, setGuests] = useState(bookings);
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const guestsPerPage = 5;

  // Filter and search logic
  const filteredGuests = guests.filter((guest) => {
    const guestStatus = guest.status.trim().toLowerCase(); // Normalize
    const currentFilter = filter.trim().toLowerCase(); // Normalize

    return (
      (currentFilter === "all" || guestStatus === currentFilter) &&
      (guest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        guest.id.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  // Pagination logic
  const indexOfLastGuest = currentPage * guestsPerPage;
  const indexOfFirstGuest = indexOfLastGuest - guestsPerPage;
  const currentGuests = filteredGuests.slice(indexOfFirstGuest, indexOfLastGuest);
  const totalPages = Math.ceil(filteredGuests.length / guestsPerPage);

  return (
    <div className="guestlist-container">
      <div className="guestlist-header">
        <h2>Guest List</h2>
        <div className="guestlist-tabs">
          {["All", "Pending", "Booked", "Canceled", "Refund"].map((status) => (
            <button
              key={status}
              className={`guestlist-tab ${filter === status ? "active" : ""}`}
              onClick={() => {
                setFilter(status);
                setCurrentPage(1); // Reset to first page when filter changes
              }}
            >
              {status}
            </button>
          ))}
        </div>
        <div className="guestlist-actions">
          <input
            type="text"
            placeholder="Search"
            className="guestlist-search"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
          />
          <button className="guestlist-generate-btn" onClick={() => alert("Report Generated!")}>
            Generate Report
          </button>
        </div>
      </div>

      {/* Table */}
      <table className="guestlist-table">
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
            <th>Guest</th>
            <th>Date Order</th>
            <th>Check In</th>
            <th>Check Out</th>
            <th>Special Request</th>
            <th>Room Type</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentGuests.map((guest) => (
            <tr key={guest.id}>
              <td><input type="checkbox" /></td>
              <td className="guestlist-guest">
                <img src={guest.avatar} alt="Guest Avatar" />
                <div>
                  <p style={{ color: "#198E78" }}>{guest.id}</p>
                  <p>{guest.name}</p>
                </div>
              </td>
              <td>{guest.dateOrder}</td>
              <td>{guest.checkIn}</td>
              <td>{guest.checkOut}</td>
              <td>{guest.specialRequest}</td>
              <td>{guest.roomType}</td>
              <td className={`guestlist-status ${guest.status.toLowerCase()}`}>
                {guest.status}
              </td>
              <td className="guestlist-action-menu">
                <div className="guestlist-dots-menu">
                  <button className="guestlist-dots">...</button>
                  <div className="dropdown-content">
                    <button onClick={() => alert(`Edit ${guest.name}`)}>Edit</button>
                    <button onClick={() => setGuests(guests.filter((g) => g.id !== guest.id))}>
                      Delete
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="guestlist-pagination">
        <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}
