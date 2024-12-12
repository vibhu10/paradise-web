import React, { useState } from "react";
import "./Dashboard.css";
const data = [
    { id: "#12345", name: "George Walker", email: "danielcooper@gmail.com", phone: "+91 98765-43210", country: "Poland", status: "Pending", type: "Host" },
    { id: "#12346", name: "Hannah Lewis", email: "quincyfoster@gmail.com", phone: "+91 98765-43211", country: "Czech Republic", status: "Pending", type: "Guest" },
    { id: "#12347", name: "Ryan Baker", email: "henrymiller@gmail.com", phone: "+91 98765-43212", country: "Czech Republic", status: "Pending", type: "Guest" },
    { id: "#12348", name: "Yara Bennett", email: "thomasclark@gmail.com", phone: "+91 98765-43213", country: "Poland", status: "Active", type: "Host" },
    { id: "#12349", name: "Jane Smith", email: "briancarter@gmail.com", phone: "+91 98765-43214", country: "Germany", status: "Pending", type: "Influencer" },
    { id: "#12350", name: "Ivan Ross", email: "masonphillips@gmail.com", phone: "+91 98765-43215", country: "Finland", status: "Active", type: "Guest" },
    { id: "#12351", name: "Zachary Ellis", email: "samuelcarter@gmail.com", phone: "+91 98765-43216", country: "Thailand", status: "Active", type: "Influencer" },
    { id: "#12352", name: "Lila Parker", email: "hannahlewis@gmail.com", phone: "+91 98765-43217", country: "Poland", status: "Pending", type: "Host" },
    { id: "#12353", name: "Quinn Hill", email: "paigebennett@gmail.com", phone: "+91 98765-43218", country: "Netherlands", status: "Active", type: "Guest" },
    { id: "#12354", name: "George Walker", email: "annawhite@gmail.com", phone: "+91 98765-43219", country: "UAE", status: "Pending", type: "Guest" },
    { id: "#12355", name: "Bob Johnson", email: "charliedavis@gmail.com", phone: "+91 98765-43220", country: "Mexico", status: "Pending", type: "Influencer" },
    { id: "#12356", name: "Oscar Mitchell", email: "victorlopez@gmail.com", phone: "+91 98765-43221", country: "Colombia", status: "Active", type: "Guest" },
    { id: "#12357", name: "Quincy Foster", email: "samuelcarter@gmail.com", phone: "+91 98765-43222", country: "South Korea", status: "Active", type: "Guest" },
    { id: "#12358", name: "Rachel Lewis", email: "gracehall@gmail.com", phone: "+91 98765-43223", country: "Germany", status: "Pending", type: "Host" },
    { id: "#12359", name: "Thomas Clark", email: "gracehall@gmail.com", phone: "+91 98765-43224", country: "Brazil", status: "Active", type: "Guest" },
    { id: "#12360", name: "Victor Lopez", email: "jackwilson@gmail.com", phone: "+91 98765-43225", country: "Spain", status: "Active", type: "Influencer" },
    { id: "#12361", name: "Mia Taylor", email: "masonphillips@gmail.com", phone: "+91 98765-43226", country: "Canada", status: "Pending", type: "Influencer" },
    { id: "#12362", name: "Olivia Green", email: "noahadams@gmail.com", phone: "+91 98765-43227", country: "Australia", status: "Active", type: "Guest" },
    { id: "#12363", name: "Samuel Carter", email: "rachellewis@gmail.com", phone: "+91 98765-43228", country: "Germany", status: "Pending", type: "Host" },
    { id: "#12364", name: "Oscar Mitchell", email: "johndoe@gmail.com", phone: "+91 98765-43229", country: "USA", status: "Active", type: "Host" },
    { id: "#12365", name: "Mason Phillips", email: "oscarmitchell@gmail.com", phone: "+91 98765-43230", country: "UK", status: "Active", type: "Influencer" },
    { id: "#12366", name: "Anna White", email: "gracehall@gmail.com", phone: "+91 98765-43231", country: "France", status: "Pending", type: "Guest" },
    { id: "#12367", name: "Frank Lee", email: "danielcooper@gmail.com", phone: "+91 98765-43232", country: "China", status: "Active", type: "Influencer" },
    { id: "#12368", name: "Oscar Mitchell", email: "johndoe@gmail.com", phone: "+91 98765-43233", country: "Italy", status: "Pending", type: "Guest" },
    { id: "#12369", name: "Grace Hall", email: "victorlopez@gmail.com", phone: "+91 98765-43234", country: "Egypt", status: "Active", type: "Host" },
    { id: "#12370", name: "Sophia Reed", email: "gracehall@gmail.com", phone: "+91 98765-43235", country: "South Africa", status: "Pending", type: "Influencer" },
    { id: "#12371", name: "Tina Brooks", email: "thomasclark@gmail.com", phone: "+91 98765-43236", country: "New Zealand", status: "Active", type: "Guest" },
    { id: "#12372", name: "Jack Wilson", email: "islamoore@gmail.com", phone: "+91 98765-43237", country: "South Korea", status: "Active", type: "Influencer" },
    { id: "#12373", name: "Mason Phillips", email: "masonphillips@gmail.com", phone: "+91 98765-43238", country: "Egypt", status: "Pending", type: "Guest" },
    { id: "#12374", name: "Nina Evans", email: "ninaevans@gmail.com", phone: "+91 98765-43239", country: "Israel", status: "Active", type: "Influencer" },
    { id: "#12375", name: "Oscar Mitchell", email: "oscarmitchell@gmail.com", phone: "+91 98765-43240", country: "Greece", status: "Pending", type: "Host" },
    { id: "#12376", name: "Paige Bennett", email: "paigebennett@gmail.com", phone: "+91 98765-43241", country: "Cyprus", status: "Active", type: "Guest" },
    { id: "#12377", name: "Quincy Foster", email: "quincyfoster@gmail.com", phone: "+91 98765-43242", country: "Finland", status: "Active", type: "Influencer" },
    { id: "#12378", name: "Rachel Lewis", email: "rachellewis@gmail.com", phone: "+91 98765-43243", country: "Poland", status: "Pending", type: "Guest" },
    { id: "#12379", name: "Samuel Carter", email: "samuelcarter@gmail.com", phone: "+91 98765-43244", country: "Ghana", status: "Active", type: "Host" },
    { id: "#12380", name: "Tina Brooks", email: "tinabrooks@gmail.com", phone: "+91 98765-43245", country: "Czech Republic", status: "Pending", type: "Influencer" }
];

export default function Dashboard() {
    const [users, setUsers] = useState(data);

    const [currentPage, setCurrentPage] = useState(1);
    const [menuVisible, setMenuVisible] = useState(null); // For action menu visibility
    const [filter, setFilter] = useState("Guest"); // Default filter
    const entriesPerPage = 8;

    const totalPages = Math.ceil(users.filter(user => user.type === filter).length / entriesPerPage);

    const handlePageChange = (pageNumber) => {
        if (pageNumber > 0 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    const toggleMenu = (index) => {
        setMenuVisible(menuVisible === index ? null : index);
    };

    const handleAction = (index, action) => {
        const filteredUsers = users.filter(user => user.type === filter);
        const updatedUsers = [...users];
        const userIndex = users.findIndex(user => user.id === filteredUsers[index].id);
        updatedUsers[userIndex].status = action === "activate" ? "Active" : "Rejected";
        setUsers(updatedUsers);
        setMenuVisible(null); // Close menu
    };

    const handleFilterChange = (type) => {
        setFilter(type);
        setCurrentPage(1); // Reset to the first page when filter changes
    };

    // Get filtered and paginated users
    const filteredUsers = users.filter(user => user.type === filter);
    const startIndex = (currentPage - 1) * entriesPerPage;
    const currentUsers = filteredUsers.slice(startIndex, startIndex + entriesPerPage);

    return (
        <div className="dashboard">
            {/* Analytics Section */}
            <section className="dashboard-analytics">
                <div className="dashboard-analytics-card">
                <img src="/passkey.png"  />
                    <h3>Total Guests</h3>
                    <p>{users.filter(user => user.type === "Guest").length}</p>
                </div>
                <div className="dashboard-analytics-card">
                <img src="/camera_outdoor.png"  />
                    <h3>Total Influencers</h3>
                    <p>{users.filter(user => user.type === "Influencer").length}</p>
                </div>
                <div className="dashboard-analytics-card">
                <img src="/calendar_month.png"  />
                    <h3>Total Hosts</h3>
                    <p>{users.filter(user => user.type === "Host").length}</p>
                </div>
                <div className="dashboard-analytics-card">
                <img src="/monitoring.png"  />
                    <h3>TOTAL EARN</h3>
                    <p>{users.filter(user => user.type === "Host").length}</p>
                </div>
            </section>

            <div className="dashboard-data-box">
                {/* Recent Users Section */}
                <section className="dashboard-recent-users">
                    <h3>Recent Added Users</h3>
                    <div className="dashboard-user-filters">
                        <button
                            onClick={() => handleFilterChange("Guest")}
                            className={filter === "Guest" ? "active" : ""}
                        >
                            Guest
                        </button>
                        <button
                            onClick={() => handleFilterChange("Influencer")}
                            className={filter === "Influencer" ? "active" : ""}
                        >
                            Influencer
                        </button>
                        <button
                            onClick={() => handleFilterChange("Host")}
                            className={filter === "Host" ? "active" : ""}
                        >
                            Host
                        </button>
                    </div>
                    <table className="dashboard-user-table">
                        <thead>
                            <tr>
                                <th>User ID</th>
                                <th>User Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Country</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentUsers.map((user, index) => (
                                <tr key={index}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.country}</td>
                                    <td className={user.status.toLowerCase()}>{user.status}</td>
                                    <td>
                                        <div className="action-menu-container">
                                            <button style={{background:"white"}} className="action-button" onClick={() => toggleMenu(index)}>
                                                ...
                                            </button>
                                            {menuVisible === index && (
                                                <div className="action-menu">
                                                    <button onClick={() => handleAction(index, "activate")}>Activate</button>
                                                    <button onClick={() => handleAction(index, "reject")}>Reject</button>
                                                </div>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {/* Pagination */}
                    <div className="dashboard-pagination">
                        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                            &lt;
                        </button>
                        {[...Array(totalPages)].map((_, pageIndex) => (
                            <button
                                key={pageIndex}
                                onClick={() => handlePageChange(pageIndex + 1)}
                                className={currentPage === pageIndex + 1 ? "active" : ""}
                            >
                                {pageIndex + 1}
                            </button>
                        ))}
                        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                            &gt;
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
}
