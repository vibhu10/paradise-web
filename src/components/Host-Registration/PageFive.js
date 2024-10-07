import { useEffect, useState } from "react";

export function PageFive({ handleNext, handleBack }) {
  const [formdata, setFormDats] = useState({});
  const [countries, setCountries] = useState([]);

  async function getCountrydata() {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = await res.json();
    setCountries(data);
  }
  useEffect(() => {
    getCountrydata();
  }, []);

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
                Your address only shared with guests after they have've made a
                reservation
              </p>
            </div>
            <div className="page-5-form-data">
              <form>
                <select id="country" name="country">
                  <option value="" placeholder="country/Region">
                    country/Region
                  </option>
                  {countries.map((country) => (
                    <option key={country.cca3} value={country.name.common}>
                      {country.name.common} ({country.idd.root})
                    </option>
                  ))}
                </select>

                <label htmlFor="house-and-flat"></label>
                <input
                  type="text"
                  id="house-and-flat"
                  name="house-and-flat"
                  placeholder="Flat,house,etc.(if applicable)"
                  required
                />
                <label for="street-address"></label>
                <input
                  type="text"
                  id="street-address"
                  name="street-address"
                  placeholder="Street address"
                  required
                />
                <label for="landmark"></label>

                <input
                  type="text"
                  id="landmark"
                  name="landmark"
                  placeholder="Nearby Landmark(if-applicable)"
                />

                <label for="District"></label>

                <input
                  type="text"
                  id="District"
                  name="District"
                  placeholder="District/locality(if-applicable)"
                />

                <label for="City"></label>

                <input
                  type="text"
                  id="City"
                  name="City"
                  placeholder="City/Town"
                />
                <label for="State"></label>

                <input
                  type="text"
                  id="State"
                  name="State"
                  placeholder="State/Union Territory"
                />

                <label for="pin-code"></label>

                <input
                  type="number"
                  id="pin"
                  name="pin"
                  placeholder="Pin code"
                />
                <label className="switch">
                  <div className="switch-content">
                    <h6>Show your specific location</h6>
                    <p>
                      Make it clear to guest where your place is located. We'll
                      only share your address after they've made a reservation.
                    </p>
                  </div>
                  <input type="checkbox" />
                  <span className="slider"></span>
                </label>
              </form>
            </div>
          </div>

          <div className="page-5-map"></div>
        </div>
      </div>

      <div className="host-footer">
        {/* <div className="loading-pageFive"></div> */}
        <button onClick={handleBack}>Back</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}
