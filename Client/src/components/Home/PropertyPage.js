import React from "react";
import "./PropertyPage.css"; // Include a CSS file for styling or use inline styles

const PropertyPage = () => {
  return (
    <div className="property-page">
      {/* Header Section */}
      <header className="property-header">
        <h1>Luxurious, picture-perfect, stunning treehouse</h1>
        <p>Treehouse in Mayfield, United Kingdom</p>
        <p>4 guests · 1 bedroom · 3 beds · 1.5 bathrooms</p>
      </header>

      {/* Image Gallery */}
      <div className="image-gallery">
        <div className="main-image">
          <img src="main-image-url" alt="Treehouse" />
        </div>
        <div className="thumbnail-images">
          <img src="image-1-url" alt="Thumbnail 1" />
          <img src="image-2-url" alt="Thumbnail 2" />
          <img src="image-3-url" alt="Thumbnail 3" />
          <img src="image-4-url" alt="Thumbnail 4" />
        </div>
      </div>

      {/* Description Section */}
      <div className="property-description">
        <div className="ratings">
          <span>🌟 Top Rated</span>
          <span>4.98 · 118 Reviews</span>
        </div>
        <p>
          Hoots Treehouse is a picture-perfect, romantic, luxurious treehouse with all
          mod cons in an area of outstanding natural beauty - only 45 minutes south
          of M25. Clad in aromatic cedar wood, beautifully furnished - ideal private,
          woodland retreat for couples. Can also comfortably sleep up to 2 children
          (from 5 years) on single mattresses in loft area accessed by a ladder and
          hatch. NOT SUITABLE FOR 4 ADULTS. A wonderful place to chill-out and lose
          yourself - you won’t want to leave! Sheer bliss!
        </p>
        <button className="show-more">Show more</button>
      </div>

      {/* Amenities Section */}
      <div className="amenities">
        <h3>Amenities</h3>
        <ul>
          <li>Kitchen</li>
          <li>Wifi</li>
          <li>Free parking on premises</li>
          <li>TV</li>
          <li>Private patio or balcony</li>
          <li>Garden</li>
          <li>Indoor fireplace</li>
          <li>Children’s books and toys</li>
          <li>Hair dryer</li>
          <li>Fridge</li>
        </ul>
        <button className="more-amenities">More amenities</button>
      </div>

      {/* Booking Section */}
      <div className="booking-card">
        <div className="price">
          <p>$275 <span>night</span></p>
        </div>
        <form className="booking-form">
          <label>
            Check-in
            <input type="date" />
          </label>
          <label>
            Check-out
            <input type="date" />
          </label>
          <label>
            Guests
            <select>
              <option value="1">1 guest</option>
              <option value="2">2 guests</option>
              <option value="3">3 guests</option>
              <option value="4">4 guests</option>
            </select>
          </label>
          <button type="submit">Reserve</button>
        </form>
        <div className="price-breakdown">
          <p>$275 x 2 nights: $550</p>
          <p>Paradise service fee: $93</p>
          <hr />
          <p>Total: $643</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyPage;
