

import './Home.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";

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
  },
  // Add more hotels as needed...
];


export default function Home() {
    const [popup, setPopUp] = useState(false);
  
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
  
              <button
                className="hamburger-button"
                onClick={() => setPopUp(!popup)}
              >
                <div className="line"></div>
                <div className="line short"></div>
                <div className="line"></div>
              </button>
  
              {popup ? (
                <div className="login-popup">
                  <h4>Login or Sign up</h4>
                  <h3>Welcome to paradise</h3>
                  <div id="log-in-phoneNo-div">
                  <input
                    type="tel"
                    id="country-code"
                    value=""
                    onChange=""
                    placeholder="+1 123-456-7890"
                    />
  
                  <input
                    type="number"
                    id="phone"
                    value=""
                    onChange=""
                    placeholder="Phone Number"
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
                  <button>Continue</button>
                   
                 <div id="line"> <p id="line-text">or continue with</p></div>
                <div>
                  <button>Google</button>
                  <button>Apple</button>
                  <button>Email</button>
  
                </div>
                
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
  
          {/* Filter Buttons */}
          <div className="container-filter-buttons">
            <button className="compare-button">total|compare</button>
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
  
                {/* <div id='hotel-ratings'>
                  <p>Rating: {hotel.rating} ({hotel.reviews} reviews)</p>
                </div> */}
              </div>
            ))}
          </div>
        </div>
  
        {/* Footer */}
        <div className="footer">Footer content here</div>
      </div>
    );
  }
  