import React, { useState } from "react";
import "./AdminHome.css";

// Components
import Dashboard from "./Dashboard";
import GuestList from "./GuestList";
import BookingList from "./BookingList";
import Host from "./Host";
import Influencer from "./Influencer";

export default function AdminHome() {
    const [activeSection, setActiveSection] = useState("Dashboard");
    const [guestMenuOpen, setGuestMenuOpen] = useState(false); // Tracks if Guest menu is open

    const renderContent = () => {
        switch (activeSection) {
            case "Dashboard":
                return <Dashboard />;
            case "GuestList":
                return <GuestList />;
            case "BookingList":
                return <BookingList />;
            case "Host":
                return <Host />;
            case "Influencer":
                return <Influencer />;
            default:
                return <Dashboard />;
        }
    };

    return (
        <div className="adminHome-container">
            {/* Sidebar */}
            <aside className="adminHome-sidebar">
                <img
                    src="/48564e5fe8898cf62b0bbf42276d6cf3.jpeg"
                    alt="Paradise Logo"
                    className="adminHome-logo"
                />
                <ul className="adminHome-menu">
                    <li
                        className={activeSection === "Dashboard" ? "active" : ""}
                        onClick={() => setActiveSection("Dashboard")}
                    >
                        <img style={{ width: "30px" }} src="/dashboard.png" />
                        Dashboard
                    </li>
                    <li
                        className={guestMenuOpen ? "active" : ""}
                        onClick={() => setGuestMenuOpen(!guestMenuOpen)} // Toggle Guest menu
                    >
                        <img style={{ width: "30px" }} src="/passkey (1).png" />
                        Guest
                    </li>
                    {guestMenuOpen && (
                        <ul className="adminHome-submenu">
                            <li
                                className={activeSection === "GuestList" ? "active" : ""}
                                onClick={() => setActiveSection("GuestList")}
                            >
                                <img style={{ width: "20px" }} src="/guest_list_icon.png" />
                                Guest List
                            </li>
                            <li
                                className={activeSection === "BookingList" ? "active" : ""}
                                onClick={() => setActiveSection("BookingList")}
                            >
                                <img style={{ width: "20px" }} src="/booking_list_icon.png" />
                                Booking List
                            </li>
                        </ul>
                    )}
                    <li
                        className={activeSection === "Host" ? "active" : ""}
                        onClick={() => setActiveSection("Host")}
                    >
                        <img style={{ width: "30px" }} src="/calendar_month (1).png" />
                        Host
                    </li>
                    <li
                        className={activeSection === "Influencer" ? "active" : ""}
                        onClick={() => setActiveSection("Influencer")}
                    >
                        <img style={{ width: "30px" }} src="/camera_outdoor (1).png" />
                        Become an Influencer
                    </li>
                </ul>
            </aside>

            {/* Main Content */}
            <div className="adminHome-content">
                {/* Header */}
                <header className="adminHome-header">
                    <input
                        type="text"
                        placeholder="Search"
                        className="adminHome-search"
                    />
                    <div className="adminHome-header-right">
                        <i className="notification-icon">🔔</i>
                        <i className="email-icon">📧</i>
                        <div className="profile-icon">W</div>
                    </div>
                </header>

                {/* Dynamic Content */}
                <main>{renderContent()}</main>
            </div>
        </div>
    );
}
