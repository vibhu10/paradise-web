import React from 'react';
import './Edit-Influencer-Profile.css'

 export default function EdifInfluencerProfile  () {
  return (
    <div className="influencer-profile">
      {/* Header Section */}
      <header className="header-influencer">
        <div className="header-influencer-left">
        <img src="/48564e5fe8898cf62b0bbf42276d6cf3.jpeg" alt="paradise"  />
        </div>
        <nav className="header-influencer-middle">
          <ul>
            <li>Host</li>
            <li>Calendar</li>
            <li>Properties</li>
            <li>Inbox</li>
            <li>Upcoming</li>
            <li>Menu</li>
          </ul>
        </nav>

        <div className='header-influencer-right'>


        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Profile Section */}
        <aside className="profile-section">
          <div className="profile-info">
            <img
              src="https://via.placeholder.com/150"
              alt="Influencer"
              className="profile-img"
            />
            <h2>Name</h2>
            <p>Miami, Florida</p>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
            </div>
            <p className="bio">
              Hosts Treehouse is a picture-perfect, romantic, luxurious treehouse
              with all modern conveniences in an area of outstanding natural beauty.
            </p>
          </div>

          <div className="travel-section">
            <h3>Places I want to travel</h3>
            <ul>
              <li>Florida</li>
              <li>Nashville</li>
              <li>California</li>
            </ul>
          </div>
          <button className="edit-profile-btn">Edit Profile</button>
        </aside>

        {/* Description Section */}
<div className='sections'>
        <section className="description-section">
          <div className="image-gallery">
            <img
              src="https://via.placeholder.com/300"
              alt="Treehouse"
              className="gallery-img"
              />
            <img
              src="https://via.placeholder.com/300"
              alt="Treehouse"
              className="gallery-img"
              />
            <img
              src="https://via.placeholder.com/300"
              alt="Treehouse"
              className="gallery-img"
              />
          </div>

          <div className="description-text">
            <h2>Description</h2>
            <p>
              Hosts Treehouse is a picture-perfect, romantic, luxurious treehouse with all mod cons
              in an area of outstanding natural beauty – only 45 minutes south of M25.
              It’s a wooded retreat for couples. Can also comfortably sleep up to 2 children from 5 years
              old in the loft area.
            </p>
            <h3>What I Can Offer</h3>
            <ul>
              <li>Promotion Videos on social media</li>
              <li>New High-Quality Listing Photos</li>
              <li>Recommendations for future stays</li>
              <li>Create Re-shareable content for social media pages</li>
            </ul>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="reviews-section">
          <h2>Reviews</h2>
         
          <div className='reviews'>

          <div className="review">
            <p><strong>Sahil</strong> - 4.98 ★</p>
            <p>Amazing place to stay. The experience was unforgettable!</p>
            <p>3 weeks ago</p>
          </div>
          <div className="review">
            <p><strong>John</strong> - 4.5 ★</p>
            <p>We had a wonderful experience, highly recommend it!</p>
            <p>1 month ago</p>
          </div>
          </div>
        </section>


              </div>        

      </main>
    </div>
  );
};


