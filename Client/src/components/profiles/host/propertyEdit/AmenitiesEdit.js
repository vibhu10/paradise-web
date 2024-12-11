import React, { useState, useEffect } from "react";
import { useRef } from "react";
import "./amenities.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
 
  faWifi,
  faThermometerThreeQuarters,
  faSnowflake,
  faShower,
  faBath,
  faBed,
  faTshirt,
  faUtensils,
  faBurn,
  faUtensilSpoon,
  faBowlFood,
  faSink,
  faMugHot,
  faPepperHot,
  faFire,
  faChair,
  faWind,
  faFlask,
  faSoap,
  faHotTub,
  faPumpSoap,
  faFan,
  faShirt,
  faTv,
  faSatelliteDish,
  faFilm,
  faBook,
  faChess,
  faVolumeUp,
  faGamepad,
  faBaby,
  faShieldAlt,
  faPlug,
  faSquareFull,
  faWindowClose,
  faWheelchair,
  faArrowUp,
  faRulerHorizontal,
  faSwimmer,
  faUmbrellaBeach,
  faCouch,
  faFireAlt,
  faTree,
  faBell,
  faExclamationTriangle,
  faFireExtinguisher,
  faKitMedical,
  faVideo,
  faParking,
  faCarSide,
  faMoneyBill,
  faChargingStation,
  faPaw,
  faCalendarAlt,
  faKey,
  faSuitcase,
  faSkiing,
  faDumbbell,
  faSpa,
  faGlassCheers,
  faRobot,
  faBicycle,
  faUmbrella
} from "@fortawesome/free-solid-svg-icons";


const amenitiesData = [
  {
    category: "Essentials",
    options: [
      { id: "Wifi", name: "Wi-Fi", icon: faWifi },
      { id: "Heating", name: "Heating", icon: faThermometerThreeQuarters },
      { id: "Air Conditioning", name: "Air conditioning", icon: faSnowflake },
      { id: "hotWater", name: "Hot water", icon: faShower },
      { id: "towels", name: "Towels, bed linens, soap, and toilet paper", icon: faBath },
      { id: "extraPillows", name: "Extra pillows and blankets", icon: faBed },
      { id: "clothingStorage", name: "Clothing storage (closet/dresser)", icon: faTshirt },
    ],
  },
  {
    category: "Kitchen & Dining",
    options: [
      { id: "Kitchen", name: "Fully equipped kitchen", icon: faUtensils },
      { id: "refrigerator", name: "Refrigerator", icon: faSnowflake },
      { id: "stove", name: "Stove", icon: faBurn },
      { id: "oven", name: "Oven", icon: faUtensilSpoon },
      { id: "microwave", name: "Microwave", icon: faBowlFood },
      { id: "dishwasher", name: "Dishwasher", icon: faSink },
      { id: "coffeeMaker", name: "Coffee maker", icon: faMugHot },
      { id: "dishes", name: "Dishes and silverware", icon: faUtensils },
      { id: "cookingBasics", name: "Cooking basics (pots, pans, oil, salt, and pepper)", icon: faPepperHot },
      { id: "bbqUtensils", name: "Barbecue utensils", icon: faFire },
      { id: "diningTable", name: "Dining table", icon: faChair },
    ],
  },
  {
    category: "Bathroom",
    options: [
      { id: "hairDryer", name: "Hair dryer", icon: faWind },
      { id: "shampoo", name: "Shampoo", icon: faFlask },
      { id: "bodySoap", name: "Body soap", icon: faSoap },
      { id: "hotTub", name: "Hot tub/jacuzzi", icon: faHotTub },
      { id: "showerGel", name: "Shower gel", icon: faPumpSoap },
      { id: "Bathtub", name: "Bathtub", icon: faBath },
    ],
  },
  {
    category: "Laundry",
    options: [
      { id: "washer", name: "Washer", icon: faTshirt },
      { id: "dryer", name: "Dryer", icon: faFan },
      { id: "iron", name: "Iron", icon: faShirt },
      { id: "dryingRack", name: "Drying rack for clothes", icon: faTshirt },
      {id:"Washing Machine", name:"Washing Machine",}
    ],
  },
  {
    category: "Entertainment",
    options: [
      { id: "TV", name: "TV", icon: faTv },
      { id: "cableTv", name: "Cable TV", icon: faSatelliteDish },
      { id: "streaming", name: "Netflix or streaming services", icon: faFilm },
      { id: "books", name: "Books and reading material", icon: faBook },
      { id: "boardGames", name: "Board games", icon: faChess },
      { id: "soundSystem", name: "Sound system/Bluetooth speakers", icon: faVolumeUp },
      { id: "gameConsole", name: "Video game console", icon: faGamepad },
    ],
  },
  {
    category: "Family-Friendly",
    options: [
      { id: "crib", name: "Crib", icon: faBaby },
      { id: "highChair", name: "High chair", icon: faChair },
      { id: "babyBath", name: "Baby bath", icon: faBath },
      { id: "fireplaceGuards", name: "Fireplace guards", icon: faShieldAlt },
      { id: "outletCovers", name: "Outlet covers", icon: faPlug },
      { id: "cornerGuards", name: "Table corner guards", icon: faSquareFull },
      { id: "kidsBooks", name: "Children’s books and toys", icon: faBook },
      { id: "roomDarkeningShades", name: "Room-darkening shades", icon: faWindowClose },
    ],
  },
  {
    category: "Accessibility",
    options: [
      { id: "stepFreeAccess", name: "Step-free access", icon: faWheelchair },
      { id: "elevator", name: "Elevator", icon: faArrowUp },
      { id: "wideHallway", name: "Wide hallway clearance", icon: faRulerHorizontal },
      { id: "accessibleBed", name: "Accessible-height bed", icon: faBed },
      { id: "rollInShower", name: "Roll-in shower", icon: faShower },
    ],
  },
  {
    category: "Outdoor & Recreation",
    options: [
      { id: "Pool", name: "Pool", icon: faSwimmer },
      { id: "hotTub", name: "Hot tub", icon: faHotTub },
      { id: "patio", name: "Patio or balcony", icon: faUmbrellaBeach },
      { id: "outdoorFurniture", name: "Outdoor furniture", icon: faCouch },
      { id: "bbqGrill", name: "BBQ grill", icon: faFireAlt },
      { id: "garden", name: "Garden or backyard", icon: faTree },
      { id: "FirePit", name: "Fire pit", icon: faFire },
      { id: "hammock", name: "Hammock", icon: faBed },
      { id: "beachEssentials", name: "Beach essentials (towels, chairs, umbrellas)", icon: faUmbrella },
      { id: "sportsEquipment", name: "Sports equipment (kayaks, bikes, etc.)", icon: faBicycle },
       {id:"Outdoor Shower",name:"Outdoor Shower",}
    ],
  },
  {
    category: "Safety & Security",
    options: [
      { id: "smokeAlarm", name: "Smoke alarm", icon: faBell },
      { id: "carbonMonoxideAlarm", name: "Carbon monoxide alarm", icon: faExclamationTriangle },
      { id: "fireExtinguisher", name: "Fire extinguisher", icon: faFireExtinguisher },
      { id: "firstAidKit", name: "First aid kit", icon: faKitMedical },
      { id: "securityCameras", name: "Security cameras on property", icon: faVideo },
    ],
  },
  {
    category: "Workspace",
    options: [
      { id: "Dedicated Workspace", name: "Dedicated workspace (desk and chair)", icon: faChair },
    ],
  },
  {
    category: "Parking",
    options: [
      { id: "Free parking on premises", name: "Free parking on premises", icon: faParking },
      { id: "streetParking", name: "Free street parking", icon: faCarSide },
      { id: "Paid parking on premises", name: "Paid parking off premises", icon: faMoneyBill },
      { id: "evCharger", name: "EV charger", icon: faChargingStation },
    ],
  },
  {
    category: "Other Options",
    options: [
      { id: "petFriendly", name: "Pet-friendly", icon: faPaw },
      { id: "longTermStays", name: "Long-term stays allowed", icon: faCalendarAlt },
      { id: "selfCheckIn", name: "Self-check-in options (Keypad or Smart lock)", icon: faKey },
      { id: "luggageDropOff", name: "Luggage drop-off allowed", icon: faSuitcase },
      { id: "hostBreakfast", name: "Host-provided breakfast or snacks", icon: faUtensils },
    ],
  },
  {
    category: "Unique Amenities",
    options: [
      { id: "skiAccess", name: "Ski-in/Ski-out access", icon: faSkiing },
      { id: "gymEquipment", name: "Gym equipment (weights, yoga mats, etc.)", icon: faDumbbell },
      { id: "sauna", name: "Sauna", icon: faSpa },
      { id: "wineGlasses", name: "Wine glasses", icon: faGlassCheers },
      { id: "miniFridge", name: "Mini fridge", icon: faSnowflake },
      { id: "smartHome", name: "Smart home devices (e.g., Alexa, Google Home)", icon: faRobot },
    ],
  },
];

export default function AmenitiesEdit({ selectedPropertyData, onSave }) {
  const initialState = {
    propertyId: selectedPropertyData?.id || null, // Extract property ID
    amenities: [],
  };

  const [formData, setFormData] = useState(initialState);
  const [selectedCategory, setSelectedCategory] = useState("Essentials");
  const navRef = useRef(null);

  // Sync state with selectedPropertyData when it changes
  useEffect(() => {
    if (selectedPropertyData) {
      const updatedAmenities = amenitiesData.map((category) => {
        const selectedCategory = selectedPropertyData?.amenities?.find(
          (cat) => cat.category === category.category
        );
        return {
          ...category,
          options: category.options.map((option) => ({
            ...option,
            selected: selectedCategory?.options?.includes(option.id) || false,
          })),
        };
      });

      setFormData({
        propertyId: selectedPropertyData.id || null,
        amenities: updatedAmenities,
      });
    }
  }, [selectedPropertyData]);

  const scrollNav = (distance) => {
    if (navRef.current) {
      navRef.current.scrollBy({ left: distance, behavior: "smooth" });
    }
  };

  const handleToggleOption = (category, optionId) => {
    const updatedAmenities = formData.amenities.map((cat) =>
      cat.category === category
        ? {
            ...cat,
            options: cat.options.map((option) =>
              option.id === optionId
                ? { ...option, selected: !option.selected }
                : option
            ),
          }
        : cat
    );
    setFormData((prevState) => ({
      ...prevState,
      amenities: updatedAmenities,
    }));
  };

  const handleSave = () => {
    if (!formData.propertyId) {
      console.error("Error: Property ID not found.");
      return;
    }

    // Format the amenities payload with only selected options
    const formattedAmenities = formData.amenities.map((cat) => ({
      category: cat.category,
      options: cat.options
        .filter((option) => option.selected)
        .map((option) => option.id),
    }));

    const payload = {
      propertyId: formData.propertyId,  // Ensure propertyId is correctly included
      amenities: formattedAmenities,
    };

    console.log("Saving amenities:", payload);

    // Call the onSave callback and pass the payload
    if (onSave) onSave(payload);
  };

  const handleReset = () => {
    setFormData({
      ...formData,
      amenities: amenitiesData, // Reset to initial amenities
    });
  };

  return (
    <div className="amenities-edit-container">
      <div className="amenities-nav-wrapper">
        <button className="scroll-btn left" onClick={() => scrollNav(-200)}>
          &#8249;
        </button>
        <div className="amenities-nav" ref={navRef}>
          {formData.amenities.map((cat) => (
            <button
              key={cat.category}
              className={`amenity-tab ${
                cat.category === selectedCategory ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(cat.category)}
            >
              {cat.category}
            </button>
          ))}
        </div>
        <button className="scroll-btn right" onClick={() => scrollNav(200)}>
          &#8250;
        </button>
      </div>

      <div className="amenities-grid">
        {formData.amenities
          .find((cat) => cat.category === selectedCategory)
          ?.options.map((option) => (
            <div
              key={option.id}
              className={`amenity-item ${option.selected ? "selected" : ""}`}
              onClick={() => handleToggleOption(selectedCategory, option.id)}
            >
              <FontAwesomeIcon icon={option.icon} />
              <span>{option.name}</span>
            </div>
          ))}
      </div>

      <div className="amenities-actions">
        <button className="btn btn-secondary" onClick={handleReset}>
          Cancel
        </button>
        <button className="btn btn-primary" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
}