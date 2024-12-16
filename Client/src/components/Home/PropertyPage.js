import React from "react";
import "./PropertyPage.css";

const PropertyPage = () => {
  return (
    <div className="PropertyPage">
      {/* Header Section */}
      <div className="PropertyPage__header">
        <h1 className="PropertyPage__title">Luxurious, picture-perfect, stunning treehouse</h1>
        <p className="PropertyPage__subtitle">Treehouse in Mayfield, United Kingdom</p>
        <div className="PropertyPage__rating">
          <span className="PropertyPage__badge">🏆 Top Rated</span>
          <span className="PropertyPage__stars">⭐ 4.98</span>
          <span className="PropertyPage__reviews">· 118 Reviews</span>
        </div>
      </div>

      {/* Main Section */}
      <div className="PropertyPage__main">
        {/* Gallery */}
        <div className="PropertyPage__gallery">
          <img
            src="https://via.placeholder.com/600x400"
            alt="Main"
            className="PropertyPage__gallery-main"
          />
          <div className="PropertyPage__gallery-thumbnails">
            <img src="https://via.placeholder.com/150" alt="Thumbnail 1" />
            <img src="https://via.placeholder.com/150" alt="Thumbnail 2" />
            <img src="https://via.placeholder.com/150" alt="Thumbnail 3" />
            <img src="https://via.placeholder.com/150" alt="Thumbnail 4" />
          </div>
        </div>

        {/* Booking Card */}
        <div className="PropertyPage__booking">
          <div className="PropertyPage__price">
            <span className="PropertyPage__price-night">$275</span> / night
          </div>
          <div className="PropertyPage__dates">
            <p>Check-in: <b>9/4/2024</b></p>
            <p>Check-out: <b>9/6/2024</b></p>
          </div>
          <div className="PropertyPage__guests">
            <p>Guests: <b>2 guests</b></p>
          </div>
          <hr />
          <div className="PropertyPage__total">
            <p>Subtotal: $550</p>
            <p>Service Fee: $93</p>
            <p><b>Total: $643</b></p>
          </div>
          <button className="PropertyPage__reserveButton">Reserve</button>
        </div>
      </div>

      {/* Description */}
      <div className="PropertyPage__description">
        <p>
          Hoots Treehouse is a picture-perfect, romantic, luxurious treehouse with all mod cons in
          an area of outstanding natural beauty. Only 45 minutes south of M25.
        </p>
        <button className="PropertyPage__showMore">Show more</button>
      </div>

      {/* Amenities Section */}
      <div className="PropertyPage__amenities">
        <h2>Amenities</h2>
        <div className="PropertyPage__amenities-grid">
          <div className="amenity-item"><span>🍴</span> Kitchen</div>
          <div className="amenity-item"><span>🚗</span> Free parking</div>
          <div className="amenity-item"><span>🌿</span> Private patio</div>
          <div className="amenity-item"><span>🔥</span> Indoor fireplace</div>
          <div className="amenity-item"><span>📡</span> Wifi</div>
          <div className="amenity-item"><span>📺</span> TV</div>
          <div className="amenity-item"><span>🏡</span> Garden</div>
          <div className="amenity-item"><span>🧊</span> Fridge</div>
        </div>
      </div>
    </div>
  );
};

export default PropertyPage;
