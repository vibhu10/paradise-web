import './Home.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";
import axios from 'axios';


const hotels = [
  {
    id: 1,
    name: "Miami, Florida",
    description: "Lorem Ipsum is simply",
    checkIn: "Aug 18",
    checkOut: "-23",
    pricePerNight: 224,
    totalPrice: 1382,
    rating: 4.98,
    reviews: 154,
    image: "/pexels-neverlandphotos-5028910.jpg",
  },
  {
    id: 2,
    name: "Miami, Florida",
    description: "Lorem Ipsum is simply",
    checkIn: "Aug 18",
    checkOut: "Aug 23",
    pricePerNight: 224,
    totalPrice: 1382,
    rating: 4.98,
    reviews: 154,
    image: "/pexels-pixabay-258154.jpg",
  },
  {
    id: 3,
    name: "Miami, Florida",
    description: "Lorem Ipsum is simply",
    checkIn: "Aug 18",
    checkOut: "Aug 23",
    pricePerNight: 224,
    totalPrice: 1382,
    rating: 4.98,
    reviews: 154,
    image: "/pexels-pixabay-261186.jpg",
  },
  {
    id: 4,
    name: "Miami, Florida",
    description: "Lorem Ipsum is simply",
    checkIn: "Aug 18",
    checkOut: "Aug 23",
    pricePerNight: 224,
    totalPrice: 1382,
    rating: 4.98,
    reviews: 154,
    image: "/pexels-rachel-claire-4577385.jpg",
  }, {
    id: 5,
    name: "Miami, Florida",
    description: "Lorem Ipsum is simply",
    checkIn: "Aug 18",
    checkOut: "Aug 23",
    pricePerNight: 224,
    totalPrice: 1382,
    rating: 4.98,
    reviews: 154,
    image: "/pexels-pixabay-258154.jpg",
  },  {
    id: 6,
    name: "Miami, Florida",
    description: "Lorem Ipsum is simply",
    checkIn: "Aug 18",
    checkOut: "Aug 23",
    pricePerNight: 224,
    totalPrice: 1382,
    rating: 4.98,
    reviews: 154,
    image: "/pexels-pixabay-258154.jpg",
  },
  // Add more hotels as needed...
];



export default function Home() {
  const [popup, setPopUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  // Handle login process
  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/users/signin', {
        email,
        password,
      });
      localStorage.setItem('token', response.data); // Store JWT in localStorage
      console.log(response.data,"response")
      setIsAuthenticated(true);
      setPopUp(false); // Close the login popup
      setError(''); // Clear error on successful login
    } catch (err) {
      setError('Login failed. Please check your credentials.');
      console.error(err);
    }
  };

  // Handle logout process
  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove JWT token
    setIsAuthenticated(false);
    setShowDropdown(false);
    alert("Logged out successfully!");
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const filters = [
    { icon: "bookmark-fill", label: "Featured" },
    { icon: "house-door", label: "All" },
    { icon: "graph-up", label: "Trending" },
    { icon: "images", label: "New" },
    { icon: "gem", label: "Luxury" },
    { icon: "bricks", label: "Design" },
    { icon: "palette", label: "Unique" },
    { icon: "tree", label: "Nature" },
    { icon: "eye", label: "Views" },
    { icon: "house", label: "Playhouse" },
  ];

  return (
    <div className="home-container">
      {/* Header */}
      <div className="header">
        <div className="home-filter">
          <img src="/48564e5fe8898cf62b0bbf42276d6cf3.jpeg" alt="paradise" />
          <div className="filter"></div>

          <button className="filter-hamburger">
            <div className="line"></div>
            <div className="line short"></div>
            <div className="line"></div>filter
          </button>

          <div className="log-in-container">
            <button className="switch-to-hosting-button">
              Switch to hosting
            </button>

            {/* Profile Icon and Dropdown Menu */}
            {isAuthenticated ? (
              <div className="profile-menu">
                <div
                  className="profile-icon"
                  onClick={toggleDropdown}
                  style={{ cursor: "pointer" }}
                >
                  <span>W</span> {/* Placeholder for user icon */}
                </div>
                {showDropdown && (
                  <div className="profile-dropdown">
                    <ul>
                      <li>Profile</li>
                      <li>Reservations</li>
                      <li>Saved</li>
                      <li>Inbox</li>
                      <li>Compare</li>
                      <li>List Your Property</li>
                      <li>Referral Program</li>
                      <li>Become an Influencer</li>
                      <li>Help Center</li>
                      <li>Resources</li>
                      <li>Feedback</li>
                      <li onClick={handleLogout}>Logout</li>
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <button
                className="hamburger-button"
                onClick={() => setPopUp(!popup)}
              >
                <div className="line"></div>
                <div className="line short"></div>
                <div className="line"></div>
              </button>
            )}

            {/* Login Popup */}
            {popup && !isAuthenticated && (
              <div className="login-popup">
                <h4>Login or Sign up</h4>
                <h3>Welcome to paradise</h3>
                <div id="log-in-phoneNo-div">
                  <input
                    type='email'
                    id='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Enter Your Email'
                  />
                  <input
                    type='password'
                    id='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Enter Your password'
                  />
                </div>
                <p>
                  We’ll call or text you to confirm your number. Standard
                  message and data rates apply.{" "}
                  <a
                    href="https://www.yourwebsite.com/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Privacy Policy
                  </a>
                </p>
                <button onClick={handleLogin}>Continue</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}

                <div id="line">
                  <p id="line-text">or continue with</p>
                </div>
                <div>
                  <button>Google</button>
                  <button>Apple</button>
                  <button>Email</button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="container-filter-buttons">
          <button className="compare-button">total | compare</button>
          <div className="row justify-content-center">
            {filters.map((filter, index) => (
              <div key={index} className="col-auto mb-2">
                <button className="btn btn-outline-primary d-flex flex-column align-items-center">
                  <i
                    className={`bi bi-${filter.icon}`}
                    style={{ fontSize: "24px", color: "grey" }}
                  ></i>
                  <span>{filter.label}</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="home-body">
        <div className="hotel-data">
          {hotels.map((hotel) => (
            <div key={hotel.id} className="hotel-card">
              <img src={hotel.image} alt={`Image of ${hotel.name}`} />
              <div id="hotel-detail">
                <h3 style={{ color: "#198E78" }}>{hotel.name}</h3>
                <p>{hotel.description}</p>
                <p>
                  Check-in: {hotel.checkIn} {hotel.checkOut}
                </p>
                <p
                  style={{
                    color: "black",
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                >
                  ${hotel.pricePerNight}/night Total:
                  <span style={{ color: "#198E78" }}>${hotel.totalPrice}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="footer">Footer content here</div>
    </div>
  );
}
