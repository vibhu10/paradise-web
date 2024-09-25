import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export function PageSeven({ handleBack, handleNext }) {
  const [selectedAmenities, setSelectedAmenities] = useState([]);

  const amenities = [
    { id: "wifi", label: "Wifi", icon: "fas fa-wifi" },
    { id: "tv", label: "TV", icon: "fas fa-tv" },
    { id: "kitchen", label: "Kitchen", icon: "fas fa-utensils" },
    { id: "washing_machine", label: "Washing Machine", icon: "fas fa-tshirt" },
    {
      id: "free_parking",
      label: "Free parking on premises",
      icon: "fas fa-parking",
    },
    {
      id: "paid_parking",
      label: "Paid parking on premises",
      icon: "fas fa-dollar-sign",
    },
    {
      id: "air_conditioning",
      label: "Air Conditioning",
      icon: "fas fa-snowflake",
    },
    { id: "workspace", label: "Dedicated Workspace", icon: "fas fa-laptop" },
    { id: "pool", label: "Pool", icon: "fas fa-swimming-pool" },
    { id: "hot_tub", label: "Hot tub", icon: "fas fa-hot-tub" },
    { id: "firepit", label: "Firepit", icon: "fas fa-fire-alt" },
    { id: "outdoor_shower", label: "Outdoor shower", icon: "fas fa-shower" },
  ];

  const toggleAmenity = (id) => {
    setSelectedAmenities((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((amenityId) => amenityId !== id)
        : [...prevSelected, id]
    );
  };

  return (
    <div>
      <header className="header-host">
        <img src="/48564e5fe8898cf62b0bbf42276d6cf3.jpeg" alt="paradise" />
        <button>Exit</button>
      </header>
      <div className="body-host">
        <p className="page-question">Tell guests what your place has to offer</p>

        <div className="pannel-box-page7" style={{ display: "flex", flexWrap: "wrap" }}>
          {amenities.map((amenity) => {
            const isSelected = selectedAmenities.includes(amenity.id);
            return (
              <div
                onClick={() => toggleAmenity(amenity.id)}
                key={amenity.id}
                style={{
                  fontSize: "30px",
                  margin: "10px",
                  border: isSelected ? "2px solid green" : "2px solid gray", 
                  width: "100px",
                  height: "100px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "10px",
                  cursor: "pointer",
                  backgroundColor: isSelected ? "#e0ffe0" : "white", 
                }}
              >
                <i className={amenity.icon}></i>
                <p
                  style={{
                    fontSize: "12px",
                    paddingTop: "5px",
                    textAlign: "center",
                  }}
                >
                  {amenity.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="host-footer">
        <div className="loading-pageSeven"></div>
        <button onClick={handleBack}>Back</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}
