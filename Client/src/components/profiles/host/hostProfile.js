import React from "react";
import "./hostProfile.css";

const properties = [
  { id: 1, status: "Listed", imgSrc: "image1.jpg", location: "Miami, Florida", dates: "Aug 18 - 23" },
  { id: 2, status: "In Progress", imgSrc: "image2.jpg", location: "Miami, Florida", dates: "Aug 18 - 23" },
  { id: 3, status: "In Progress", imgSrc: "image3.jpg", location: "Miami, Florida", dates: "Aug 18 - 23" },
  { id: 4, status: "In Progress", imgSrc: "image4.jpg", location: "Miami, Florida", dates: "Aug 18 - 23" },
  { id: 5, status: "In Progress", imgSrc: "image5.jpg", location: "Miami, Florida", dates: "Aug 18 - 23" },
  { id: 6, status: "In Progress", imgSrc: "image6.jpg", location: "Miami, Florida", dates: "Aug 18 - 23" },
];

export default function HostProfile() {
  return (
    <div className="host-profile">
      <header className="host-profile-header">
        <div className="host-profile-logo">
          <span>Paradise</span> Vacation Rentals
        </div>
        <nav className="host-profile-nav">
          <ul>
            <li>Influencers</li>
            <li>Calendar</li>
            <li>Properties</li>
            <li>Inbox</li>
            <li>Upcoming</li>
            <li>Menu</li>
          </ul>
        </nav>
      </header>
      <main className="host-profile-property-grid">
        {properties.map((property) => (
          <div className="host-profile-property-card" key={property.id}>
            <div className="host-profile-image-container">
              <img src={property.imgSrc} alt="Property" />
              <span className={`host-profile-status ${property.status.toLowerCase().replace(" ", "-")}`}>
                {property.status}
              </span>
            </div>
            <div className="host-profile-property-info">
              <h3>{property.location}</h3>
              <p>{property.dates}</p>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
