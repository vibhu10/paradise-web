import { useEffect, useState } from "react";
import "../Host-Registration/css/pageFive.css";

export function PageFive({ handleNext, handleBack, handleSaveProperty }) {
  const [formData, setFormData] = useState({
    country: "",

    flat: "",

    street: "",
    landmark: "",
    district: "",
    city: "",
    state: "",
    pinCode: "",
    showLocation: false,
  });

  const [errors, setErrors] = useState({}); // For validation errors
  const [countries, setCountries] = useState([]);
  const API_KEY = "Q1g1ysByaCD2YQcU0UoEJzwfAnW4kKcn";

  // Fetch country data
  async function getCountryData() {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = await res.json();
    setCountries(data);
  }

  // Validate pin code
  // async function validatePinCode(pin, state) {
  //   if (!pin || !state) return false;

  //   try {
  //     const res = await fetch(
  //       `https://api.apilayer.com/geo/postal_code/${pin}/state/${state}`,
  //       {
  //         method: "GET",
  //         headers: {
  //           apikey: API_KEY,
  //         },
  //       }
  //     );
  //     const data = await res.json();
  //     return data.isValid; // Assuming the API returns a field `isValid`
  //   } catch (error) {
  //     console.error("Error validating pin code:", error);
  //     return false;
  //   }
  // }

  useEffect(() => {
    getCountryData();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear the error for the field when the user starts typing
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateFields = async () => {
    const newErrors = {};
    if (!formData.country) newErrors.country = "Country/Region is required";
    if (!formData.street) newErrors.street = "Street address is required";
    if (!formData.city) newErrors.city = "City / Town is required";
    if (!formData.state)
      newErrors.state = "State / Union Territory is required";
    if (!formData.pin) newErrors.pin = "Pin code is required";

    return newErrors;
  };

  const handleSave = async () => {
    return new Promise((resolve) => {
      const addressData = { Address: formData };
      handleSaveProperty(addressData);
      resolve();
    });
  };

  const handleNextClick = async () => {
    const validationErrors = await validateFields();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Set errors for invalid fields
      return; // Prevent navigation
    }

    await handleSave();
    handleNext();
  };

  return (
    <div className="page-5-body-host">
      <div className="page-5-main-div">
        <div className="page-5-text">
          <p className="page-5-title">Confirm your address</p>
          <p className="page-5-subtitle">
            Your address is only shared with guests after they’ve made a
            reservation.
          </p>
        </div>
        <div className="page-5-form-data">
          <form>
            <div className="form-group">
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className={`page-5-input ${
                  errors.country ? "input-error" : ""
                }`}
              >
                <option value="" disabled>
                  Country/Region
                </option>
                {countries.map((country) => (
                  <option key={country.cca3} value={country.name.common}>
                    {country.name.common}
                  </option>
                ))}
              </select>
              {errors.country && <p className="error-text">{errors.country}</p>}
            </div>

            <input
              type="text"
              name="houseAndFlat"
              placeholder="Flat, house, etc. (if applicable)"
              value={formData.flat}
              onChange={handleChange}
              className="page-5-input"
            />

            <div className="form-group">
              <input
                type="text"
                name="street"
                placeholder="Street address"
                value={formData.street}
                onChange={handleChange}
                className={`page-5-input ${errors.street ? "input-error" : ""}`}
              />
              {errors.street && <p className="error-text">{errors.street}</p>}
            </div>

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
              <div className="form-group">
                <input
                  type="text"
                  name="city"
                  placeholder="City / town"
                  value={formData.city}
                  onChange={handleChange}
                  className={`page-5-input ${errors.city ? "input-error" : ""}`}
                />
                {errors.city && <p className="error-text">{errors.city}</p>}
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="state"
                  placeholder="State/Union Territory"
                  value={formData.state}
                  onChange={handleChange}
                  className={`page-5-input ${
                    errors.state ? "input-error" : ""
                  }`}
                />
                {errors.state && <p className="error-text">{errors.state}</p>}
              </div>
            </div>

            <div className="form-group">
              <input
                type="number"
                name="pinCode
street
"
                placeholder="Pin code"
                value={formData.pinCode}
                onChange={handleChange}
                className={`page-5-input ${errors.pinCode ? "input-error" : ""}`}
              />
              {errors.pin && <p className="error-text">{errors.pinCode}</p>}
            </div>

            <label className="page-5-switch">
              <div className="page-5-switch-content">
                <h6>Show your specific location</h6>
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
        <button
          onClick={handleNextClick}
          className="page-5-btn page-5-next-btn"
        >
          Next
        </button>
      </div>
    </div>
  );
}
