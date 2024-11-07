import { useEffect, useState } from "react";

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
    showLocation: false
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
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSave = async () => {
    // Ensure `handleSaveProperty` completes and returns before proceeding
    return new Promise((resolve) => {
      handleSaveProperty(formData);
      resolve(); // Resolve after saving
    });
  };

  const handleNextClick = async () => {
    await handleSave(); // Wait for the data to save fully
    handleNext(); // Proceed to the next page
  };

  return (
    <div>
      <header className="header-host">
        <img src="/48564e5fe8898cf62b0bbf42276d6cf3.jpeg" alt="paradise" />
        <button>Exit</button>
      </header>
      <div className="body-host">
        <div className="page-5-main-div">
          <div className="page-5-form">
            <div className="text-page-5">
              <p>Confirm your address</p>
              <p>
                Your address is only shared with guests after they’ve made a
                reservation.
              </p>
            </div>
            <div className="page-5-form-data">
              <form onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
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
                  id="house-and-flat"
                  name="houseAndFlat"
                  placeholder="Flat, house, etc. (if applicable)"
                  value={formData.houseAndFlat}
                  onChange={handleChange}
                  required
                />

                <input
                  type="text"
                  id="street-address"
                  name="streetAddress"
                  placeholder="Street address"
                  value={formData.streetAddress}
                  onChange={handleChange}
                  required
                />

                <input
                  type="text"
                  id="landmark"
                  name="landmark"
                  placeholder="Nearby landmark (if applicable)"
                  value={formData.landmark}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  id="district"
                  name="district"
                  placeholder="District/locality (if applicable)"
                  value={formData.district}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  id="city"
                  name="city"
                  placeholder="City/Town"
                  value={formData.city}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  id="state"
                  name="state"
                  placeholder="State/Union Territory"
                  value={formData.state}
                  onChange={handleChange}
                />

                <input
                  type="number"
                  id="pin"
                  name="pin"
                  placeholder="Pin code"
                  value={formData.pin}
                  onChange={handleChange}
                />

                <label className="switch">
                  <div className="switch-content-page5">
                    <h6 style={{ fontWeight: 600 }}>Show your specific location</h6>
                    <p>
                      Make it clear to guests where your place is located. We'll
                      only share your address after they've made a reservation.
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    name="showLocation"
                    checked={formData.showLocation}
                    onChange={handleChange}
                  />
                  <span className="slider"></span>
                </label>

                {/* <button type="submit">Save Address</button> */}
              </form>
            </div>
          </div>
          <div className="page-5-map"></div>
        </div>
      </div>

      <div className="host-footer">
        <button onClick={handleBack}>Back</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
}
