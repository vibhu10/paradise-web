import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";



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

export default function Home() {
  const [popup, setPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [signupStep, setSignupStep] = useState(1); // New: Track signup step
  const [firstName, setFirstName] = useState(""); // New: Separate first name
  const [lastName, setLastName] = useState(""); // New: Separate last name
  const [dob, setDob] = useState(""); // New: Date of birth
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [loginPopup, setLoginPopup] = useState(false);
  const [signupPopup, setSignupPopup] = useState(false);

  const navigate = useNavigate();

  const [propertyData, setPropertyData] = useState(null);//state for the showing all property
  console.log(propertyData,"check for data comming from backetd")
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);
  useEffect(() => {
    const fetchPropertyData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/property/allproperties');
        setPropertyData(response.data); // Update state with fetched data
      } catch (err) {
        console.error('Error fetching property data:', err);
        setError('Failed to fetch property data.');
      }
    };

    fetchPropertyData(); // Automatically fetch data on page load
  }, []);




  function selectedProperty(property) {
    navigate("/property", { state: { property } });
  }


  const checkEmailExistence = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/users/signin/check-email", { email });
      if (response.status === 200) {
        setError("");
        return true;
      }
    } catch (err) {
      if (err.response && err.response.status === 400) {
        setError("Email already exists. Please try another.");
      } else {
        console.error("Error during email check:", err);
        setError("An unexpected error occurred. Please try again.");
      }
      return false;
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
  
    // Clear previous error messages
    setError("");
  
    // Basic validation for email format
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
    // Check if email is provided
    if (!email) {
      setError("Email is required.");
      return;
    }
  
    // Validate email format
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
  
    // Check if the email is available (asynchronous check)
    const isEmailAvailable = await checkEmailExistence();
    if (!isEmailAvailable) {
      setError("Email is already in use.");
      return;
    }
  
    // If email passes all checks, proceed with the signup process
    setSignupStep(2);
  };
  

  const handleCompleteSignUp = async () => {
    if (!password || !firstName || !lastName || !dob) {
      setError("All fields are required.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/api/users/signup", {
        email,
        password,
        firstName,
        lastName,
        dob,
      });
      alert("Signup completed successfully! You can now log in.");
      setSignupStep(1);
      setSignupPopup(false);
    } catch (err) {
      if (err.response) {
        setError(err.response.data.error);
      } else {
        console.error("Error during complete signup:", err);
        setError("An unexpected error occurred. Please try again.");
      }
    }
  };


  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/users/signin", {
        email,
        password,
      });
      console.log(response, "Login response home");
      localStorage.setItem("token", response.data.token);
      console.log(response.data.user) // Store JWT in localStorage
      setIsAuthenticated(true); // Set authenticated state
      setPopup(false); // Close the main popup
      setLoginPopup(false); // Close the login-specific popup
      setError(""); // Clear error on successful login
      alert("Login successful!");
    } catch (err) {
      if (err.response) {
        setError(err.response.data.error); // Display backend error
      } else {
        console.error("Error during login:", err);
        setError("Login failed. Please check your credentials.");
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove JWT token
    setIsAuthenticated(false);
    setShowDropdown(false);
    alert("Logged out successfully!");
  };

  const handleSwitchToHosting = () => {
    if (isAuthenticated) {
      navigate("/host-registration"); // Redirect to HostRegistration
    } else {
      alert("You need to log in first.");
      setPopup(true); // Open login popup if not authenticated
    }
  };

  const handleProfileClick = () => {
    setShowDropdown(false); // Close dropdown
    navigate("/user-profile"); // Redirect to UserProfile page
  };

  const toggleLoginPopup = () => {
    setLoginPopup(!loginPopup);
  };


  const toggleSignupPopup = () => {
    if (!signupPopup) {
      setEmail("");
      setPassword("");
      setFirstName("");
      setLastName("");
      setDob("");
      setError("");
    }
    setSignupPopup(!signupPopup);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

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
            <button className="switch-to-hosting-button" onClick={handleSwitchToHosting}>
              Switch to hosting
            </button>

            {isAuthenticated ? (
              <div className="profile-menu">
                <div
                  className="profile-icon"
                  onClick={toggleDropdown}
                  style={{ cursor: "pointer" }}
                >
                  <span>W</span>
                </div>
                {showDropdown && (
                  <div className="profile-dropdown">
                    <ul>
                      <li onClick={handleProfileClick}>Profile</li>
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
                onClick={() => setPopup(!popup)}
              >
                <div className="line"></div>
                <div className="line short"></div>
                <div className="line"></div>
              </button>
            )}

            {popup && !isAuthenticated && (
              <div className="profile-dropdown">
                <ul>
                  <li onClick={toggleLoginPopup}>Login</li>
                  <li onClick={toggleSignupPopup}>Sign Up</li>
                </ul>
              </div>
            )}

            {loginPopup && (
              <div className="login-popup">
                <button
                  style={{ width: "20px", background: "none" }}
                  className="close-popup-btn"
                  onClick={() => setLoginPopup(false)}
                >
                  ✖
                </button>
                <h4>Login or Sign up</h4>
                <h3>Welcome to paradise</h3>
                <div id="log-in-phoneNo-div">
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Your Email"
                  />
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter Your Password"
                  />
                </div>
                <button onClick={handleLogin}>Continue</button>
                {error && <p style={{ color: "red" }}>{error}</p>}
              </div>
            )}
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="container-filter-buttons">
          <button className="compare-button">Total | Compare</button>
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
{/* Body */}
<div className="home-body">
<div className="hotel-data">
  {propertyData && propertyData.length > 0 ? (
    propertyData.map((property, index) => (
      <div key={index} className="hotel-card" onClick={()=>selectedProperty(property)}>
        {/* Property Cover Image */}
        <img
          src={
            property.coverPhotos?.cover?.image || 
            "https://via.placeholder.com/150"
          } 
          alt={`Image of ${property.title || "Unknown Property"}`} // Handle missing property name
        />
        <div id="hotel-detail">
          {/* Property Title */}
          <h3 style={{ color: "#198E78" }}>
            {property.title || "Unnamed Property"}
          </h3>
          
          {/* Check-in Time */}
          <p>
            Check-in:{" "}
            {property.availability?.checkinTime
              ? new Date(property.availability.checkinTime).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })
              : "N/A"}
          </p>

          {/* Minimum and Maximum Nights */}
          <p>
            Min Nights: {property.availability?.minimumNight || "N/A"} | Max Nights:{" "}
            {property.availability?.maximumNight || "N/A"}
          </p>

          {/* Pricing Details */}
          <p
            style={{
              color: "black",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            ${Math.floor(property.price?.BaseCharge || 0)}/night Total:{" "}
            <span style={{ color: "#198E78" }}>
              ${Math.floor(property.price?.PriceBeforeTax || 0)}
            </span>
          </p>
        </div>
      </div>
    ))
  ) : (
    // Fallback for No Properties
    <p>No properties available to display.</p>
  )}
</div>



</div>


      {/* Signup Popup */}
      {signupPopup && (
  <div>
    <div className="signup-popup-overlay" onClick={() => setSignupPopup(false)}></div>
    {signupStep === 1 ? (
      <div className="signup-popup">
        <button
          className="close-popup-btn"
          onClick={() => setSignupPopup(false)}
        >
          ✖
        </button>
        <h3 className="text-center mb-4">Sign up</h3>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error && (
              <small style={{ color: "red", display: "block", marginTop: "5px" }}>{error}</small>
            )}
          </div>
          <button
            onClick={handleSignUp}
            type="submit"
            className="btn btn-primary w-100 mb-3"
            style={{ background: "#198E78", border: "none" }}
          >
            Continue
          </button>
        </form>

        <div className="d-flex align-items-center my-3">
          <hr className="flex-grow-1" />
          <span className="mx-2 text-muted">or</span>
          <hr className="flex-grow-1" />
        </div>
        <div className="d-grid gap-3">
          <button className="btn btn-outline-primary d-flex align-items-center justify-content-center">
            <i className="bi bi-facebook me-2"></i> Continue with Facebook
          </button>
          <button className="btn btn-outline-danger d-flex align-items-center justify-content-center">
            <i className="bi bi-google me-2"></i> Continue with Google
          </button>
          <button className="btn btn-outline-dark d-flex align-items-center justify-content-center">
            <i className="bi bi-apple me-2"></i> Continue with Apple
          </button>
        </div>
      </div>
    ) : (
      <div className="signup2-container">
        <h2>Finish Signing Up</h2>
        <div className="signup2-input-group">
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="signup2-input-group">
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="signup2-input-group">
          <label htmlFor="dob">Date of Birth</label>
          <input
            type="date"
            id="dob"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>
           <div className="signup2-input-group">
          <label htmlFor="Email">Email</label>
          <input
            type="email"
            id="email"
            value={email} 
            disabled
           
          />
        </div>
        <div className="signup2-input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <p className="signup2-agree">
          By selecting Agree and Continue, I agree to the Terms of Service, 
          Payments Terms of Service, and Nondiscrimination Policy, and acknowledge the Privacy Policy.
        </p>
        <div className="signup2-checkbox-group">
          <input type="checkbox" id="marketing" />
          <label htmlFor="marketing">I don't want to receive marketing messages from paradise.</label>
        </div>
        <button
          onClick={handleCompleteSignUp}
          className="btn btn-primary w-100"
          style={{ background: "#198E78", border: "none" }}
        >
          Agree and Continue
        </button>
        {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
      </div>
    )}
  </div>
)}



      {/* Footer */}

    </div>
  );
}
