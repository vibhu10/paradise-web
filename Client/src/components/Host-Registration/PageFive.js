import { useEffect, useState } from "react";
import '../Host-Registration/css/pageFive.css'
export function PageFive({ handleNext, handleBack, handleSaveProperty }) {
  const [formData, setFormData] = useState({
    country: "",
    houseAndFlat: "",
    streetAddress: "",
    landmark: "",
    district: "",
    city: "",
    state: "",
    pin: "",
    showLocation: false,
  });
  const [countries, setCountries] = useState([]);

  async function getCountryData() {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = await res.json();
    setCountries(data);
  }

  useEffect(() => {
    getCountryData();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSave = async () => {
    return new Promise((resolve) => {
      const addressData = { Address: formData };
      handleSaveProperty(addressData);
      resolve();
    });
  };

  const handleNextClick = async () => {
    await handleSave();
    handleNext();
  };

  return (
    <div className="page-5-body-host">
      <div className="page-5-main-div">
        <div className="page-5-text">
          <p className="page-5-title">Confirm your address</p>
          <p className="page-5-subtitle">
            Your address is only shared with guests after they’ve made a reservation.
          </p>
        </div>
        <div className="page-5-form-data">
  <form>
    <select
      id="country"
      name="country"
      value={formData.country}
      onChange={handleChange}
      className="page-5-input"
    >
      <option value="" disabled>
        Country/Region
      </option>
      {countries.map((country) => (
        <option key={country.cca3} value={country.name.common}>
          {country.name.common} ({country.idd?.root || ""})
        </option>
      ))}
    </select>

    <input
      type="text"
      name="houseAndFlat"
      placeholder="Flat, house, etc. (if applicable)"
      value={formData.houseAndFlat}
      onChange={handleChange}
      className="page-5-input"
    />

    <input
      type="text"
      name="streetAddress"
      placeholder="Street address"
      value={formData.streetAddress}
      onChange={handleChange}
      className="page-5-input"
    />

    <div className="page-5-form-row">
      <input
        type="text"
        name="landmark"
        placeholder="Nearby landmark (if applicable)"
        value={formData.landmark}
        onChange={handleChange}
        className="page-5-input"
      />
      <input
        type="text"
        name="district"
        placeholder="District/locality (if applicable)"
        value={formData.district}
        onChange={handleChange}
        className="page-5-input"
      />
    </div>

    <div className="page-5-form-row">
      <input
        type="text"
        name="city"
        placeholder="City / town"
        value={formData.city}
        onChange={handleChange}
        className="page-5-input"
      />
      <input
        type="text"
        name="state"
        placeholder="State/Union Territory"
        value={formData.state}
        onChange={handleChange}
        className="page-5-input"
      />
    </div>

    <input
      type="number"
      name="pin"
      placeholder="Pin code"
      value={formData.pin}
      onChange={handleChange}
      className="page-5-input"
    />

    <label className="page-5-switch">
      <div className="page-5-switch-content">
        <h6>Show your specific location</h6>
        <p>
          Make it clear to guests where your place is located. We'll only share
          your address after they've made a reservation.
        </p>
      </div>
      <input
        type="checkbox"
        name="showLocation"
        checked={formData.showLocation}
        onChange={handleChange}
      />
      <span className="page-5-slider"></span>
    </label>
  </form>
</div>

<div className="page-5-map">
  <iframe
    src="https://maps.google.com/maps?q=London&t=&z=13&ie=UTF8&iwloc=&output=embed"
    frameBorder="0"
    style={{
      width: "100%",
      height: "100%",
      borderRadius: "8px",
    }}
    allowFullScreen=""
    aria-hidden="false"
    tabIndex="0"
  ></iframe>

</div>

      </div>
      <div className="page-5-footer">
        <button onClick={handleBack} className="page-5-btn page-5-back-btn">
          Back
        </button>
        <div className="page-5-progress-bar"></div>
        <button onClick={handleNextClick} className="page-5-btn page-5-next-btn">
          Next
        </button>
      </div>
    </div>
  );
}
