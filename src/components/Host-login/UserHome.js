import { useState } from 'react';
import './UserHome.css';
import PropertyEdit from './Property-edit';
const data = [
    {
      "type": "listed",
      "name": "Sunny Beachside Cottage",
      "price": "$150 per night",
      "property_type": "Cottage",
      "photo": "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?cs=srgb&dl=pexels-pixabay-258154.jpg&fm=jpg",
      "check_in_time": "3:00 PM",
      "check_out_time": "11:00 AM",
      "rules": "No smoking, No pets, Quiet hours after 10 PM",
      "amenities": ["Wi-Fi", "Air Conditioning", "Kitchen", "Free Parking", "Beach Access"]
    },
    {
      "type": "listed",
      "name": "Modern Downtown Apartment",
      "price": "$200 per night",
      "property_type": "Apartment",
      "photo": "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?cs=srgb&dl=pexels-expect-best-106399.jpg&fm=jpg",
      "check_in_time": "2:00 PM",
      "check_out_time": "12:00 PM",
      "rules": "No parties, No smoking, No pets",
      "amenities": ["Wi-Fi", "Elevator", "Gym", "Washer/Dryer", "Self Check-in"]
    },
    {
      "type": "inProgress",
      "name": "Rustic Mountain Cabin",
      "price": "$175 per night",
      "property_type": "Cabin",
      "photo": "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?cs=srgb&dl=pexels-pixabay-417173.jpg&fm=jpg",
      "check_in_time": "4:00 PM",
      "check_out_time": "10:00 AM",
      "rules": "No smoking, No loud music, No outside guests",
      "amenities": ["Wi-Fi", "Fireplace", "Hot Tub", "BBQ Grill", "Hiking Trails"]
    },
    {
        "type": "inProgress",
        "name": "Rustic Mountain Cabin",
        "price": "$175 per night",
        "property_type": "Cabin",
        "photo": "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?cs=srgb&dl=pexels-pixabay-417173.jpg&fm=jpg",
        "check_in_time": "4:00 PM",
        "check_out_time": "10:00 AM",
        "rules": "No smoking, No loud music, No outside guests",
        "amenities": ["Wi-Fi", "Fireplace", "Hot Tub", "BBQ Grill", "Hiking Trails"]
      },
      {
        "type": "listed",
        "name": "Sunny Beachside Cottage",
        "price": "$150 per night",
        "property_type": "Cottage",
        "photo": "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?cs=srgb&dl=pexels-pixabay-258154.jpg&fm=jpg",
        "check_in_time": "3:00 PM",
        "check_out_time": "11:00 AM",
        "rules": "No smoking, No pets, Quiet hours after 10 PM",
        "amenities": ["Wi-Fi", "Air Conditioning", "Kitchen", "Free Parking", "Beach Access"]
      },
      {
        "type": "listed",
        "name": "Modern Downtown Apartment",
        "price": "$200 per night",
        "property_type": "Apartment",
        "photo": "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?cs=srgb&dl=pexels-expect-best-106399.jpg&fm=jpg",
        "check_in_time": "2:00 PM",
        "check_out_time": "12:00 PM",
        "rules": "No parties, No smoking, No pets",
        "amenities": ["Wi-Fi", "Elevator", "Gym", "Washer/Dryer", "Self Check-in"]
      },

];

  


export default function UserHome() {
    const [myProperty] = useState(data);
    const [selectedProperty, setSelectedProperty] = useState(null); 
  
    const handlePropertyClick = (property) => {
      setSelectedProperty(property); 
    };
  
    const handleBackToList = () => {
      setSelectedProperty(null); 
    };
  
    return (
      <div className="userHome-container">
        <header>
          <div>
            <img
              style={{ width: '240px', height: '76px', marginLeft: '10px' }}
              src="/48564e5fe8898cf62b0bbf42276d6cf3.jpeg"
              alt="paradise"
            />
          </div>
          <div className="nav-bar">
            <ul>
              <li>Influencer</li>
              <li>Calendar</li>
              <li>Properties</li>
              <li>Inbox</li>
              <li>Upcoming</li>
              <li>Menu</li>
            </ul>
          </div>

          <div className='userhome-login'>

          </div>
        </header>
  
        <main>
          {selectedProperty ? (
            <PropertyEdit  selectedPropertyData={selectedProperty}/>
          ) : (
            <div className="property-list">
              {myProperty.map((property, index) => (
                <div key={index} className="property-card" onClick={() => handlePropertyClick(property)}>
                  <div className="card-image">
                    <img src={property.photo} alt={property.name} />
                    <div className="card-status">
                      <span className="status-dot"></span> {property.type === "listed" ? "Listed" : "In Progress"}
                    </div>
                  </div>
                  <div className="card-info">
                    <h4>{property.location}</h4>
                    <h6 style={{ color: "#198E78" }}>{property.name}</h6>
                    <p>{property.dates}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    );
  }
  
