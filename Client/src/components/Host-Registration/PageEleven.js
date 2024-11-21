import { useState } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css";

export function PageEleven({ handleNext, handleBack, handleSaveProperty }) {
  const [price, setPrice] = useState({
    BaseCharge: 0,
    ServiceFees: 0,
    PriceBeforeTax: 0,
    YouEarn: 0,
  });

  const [Availability, setAvailability] = useState({
    minimumNight: 0,
    maximumNight: 0,
    checkinTime: new Date(),
  });

  function handleChanges(e) {
    const { name, value } = e.target;
    setAvailability((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleTimeChange(date) {
    setAvailability((prevData) => ({
      ...prevData,
      checkinTime: date[0], // save the time selected from Flatpickr
    }));
  }

  function handlePrice(e) {
    const baseCharge = parseFloat(e.target.value) || 0;
    const serviceFees = (baseCharge * 14) / 100;
    const youEarn = (baseCharge * 3) / 100;

    setPrice((prevPrice) => ({
      ...prevPrice,
      BaseCharge: baseCharge,
      ServiceFees: serviceFees,
      PriceBeforeTax: baseCharge + serviceFees,
      YouEarn: baseCharge - youEarn,
    }));
  }

  // Function to save data and move to the next page
  const handleNextClick = async () => {
    await handleSaveProperty({
      price: price,
      availability: Availability,
    });
    handleNext(); // Proceed to the next page
  };

  return (
    <div>
    

      <div className="body-host">
        <div className="pannel-box-page11">
          <div className="pannel-box-page11-div1">
            <h4>Pricing & Availability</h4>
            <h6 style={{ textAlign: "left", fontWeight: 600 }}>
              Now, set your price
            </h6>
            <p style={{ textAlign: "left" }}>You can change it anytime.</p>
            <input
              style={{
                height: "50px",
                borderRadius: "10px",
                border: "1px solid lightgray",
              }}
              type="number"
              name="input-price-page10"
              id="input-price-page10"
              value={price.BaseCharge === 0 ? "" : price.BaseCharge}
              onChange={handlePrice}
            />

            <p
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontWeight: "500",
                margin: 0,
                padding: 0,
              }}
            >
              Base price{" "}
              <span style={{ marginLeft: "auto" }}>
                ${price.BaseCharge.toFixed(2)}
              </span>
            </p>
            <p
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontWeight: "500",
                margin: 0,
                padding: 0,
              }}
            >
              Guest service fees{" "}
              <span style={{ marginLeft: "auto" }}>
                ${price.ServiceFees.toFixed(2)}
              </span>
            </p>
            <p
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontWeight: "500",
                margin: 0,
                padding: 0,
              }}
            >
              Guest price before taxes{" "}
              <span style={{ marginLeft: "auto" }}>
                ${price.PriceBeforeTax.toFixed(2)}
              </span>
            </p>
            <p
              style={{
                color: "green",
                display: "flex",
                justifyContent: "space-between",
                fontWeight: "500",
                marginTop: 10,
                padding: 0,
              }}
            >
              You earn{" "}
              <span style={{ marginLeft: "auto" }}>${price.YouEarn.toFixed(2)}</span>
            </p>
          </div>

          <div className="pannel-box-page11-div2">
            <h4>Availability</h4>
            <p>
              These settings apply to all nights, unless you customize them by
              date.
            </p>
            <div>
              <h9 style={{ marginRight: "40px", fontSize: "12px" }}>MinimumNights</h9>
              <h9 style={{ fontSize: "12px" }}>MaximumNight</h9>
            </div>
            <input
              style={{
                width: 100,
                height: 70,
                borderRadius: 10,
                border: "1px solid gray",
                marginRight: 30,
                marginBottom: 20,
                fontWeight: 600,
                textAlign: "center",
                fontSize: 17,
              }}
              type="number"
              name="minimumNight"
              value={Availability.minimumNight}
              onChange={handleChanges}
            />

            <input
              style={{
                width: 100,
                height: 70,
                borderRadius: 10,
                border: "1px solid gray",
                marginBottom: 20,
                fontWeight: 600,
                textAlign: "center",
                fontSize: 17,
              }}
              type="number"
              name="maximumNight"
              value={Availability.maximumNight}
              onChange={handleChanges}
            />

            <label htmlFor="timePicker" className="form-label">
              Guests can book on the same day as check-in until this time.
            </label>
            <div className="input-group" style={{ width: 300, height: 60 }}>
              <Flatpickr
                style={{ fontWeight: 600, fontSize: 17 }}
                id="timePicker"
                className="form-control"
                value={Availability.checkinTime}
                onChange={handleTimeChange}
                options={{
                  enableTime: true,
                  noCalendar: true,
                  dateFormat: "h:i K",
                  time_24hr: false,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="host-footer">
        <button onClick={handleBack}>Back</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
}
