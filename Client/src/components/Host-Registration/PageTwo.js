import { useState } from "react";

export function PageTwo({ handleBack, handleNext, handleSaveProperty }) {
  const [selectedValues, setSelectedValues] = useState([]);  // Store multiple selected values

  const buttonData = [
    { icon: 'bi-tree', label: 'Unique' },
    { icon: 'bi-house-door', label: 'Luxury' },
    { icon: 'bi-pencil-ruler', label: 'Design' },
    { icon: 'bi-water', label: 'Waterfront' },
    { icon: 'bi-people', label: 'Group Stays' },
    { icon: 'bi-mountain', label: 'Scenic Views' },
    { icon: 'bi-compass', label: 'Adventure' },
    { icon: 'bi-leaf', label: 'Nature' },
    { icon: 'bi-building', label: 'City' },
    { icon: 'bi-person-bounding-box', label: 'Family' },
    { icon: 'bi-controller', label: 'Game House' },
    { icon: 'bi-sun', label: 'Seasonal' },
  ];

  const handleClick = (label) => {
    setSelectedValues((prevSelected) =>
      prevSelected.includes(label)
        ? prevSelected.filter((item) => item !== label)  // Remove if already selected
        : [...prevSelected, label]  // Add if not selected
    );
  };

  const handleNextClick = () => {
    if (selectedValues.length > 0) {

      const propertyData={
        propertyType:selectedValues
      };
      handleSaveProperty(propertyData);  // Pass selected values to handleSaveProperty
      handleNext();  // Move to the next page
    } else {
      alert("Please select at least one property type before proceeding.");
    }
  };

  return (
    <div>
      <header className="header-host">
        <img src="/48564e5fe8898cf62b0bbf42276d6cf3.jpeg" alt="paradise" />
        <button>Exit</button>
      </header>
      
      <div className="body-host">
        <p className="page-question">It's easy to get started on Paradise</p>
        
        <div className="pannel-box-page2">
          {buttonData.map((button, index) => (
            <div key={index} className="buttons-div">
              <button 
                className={`center-buttons ${selectedValues.includes(button.label) ? 'selected' : ''}`} 
                onClick={() => handleClick(button.label)}
                style={{
                  backgroundColor: selectedValues.includes(button.label) ? 'lightgreen' : 'white',
                }}
              >
                <i className={`bi ${button.icon}`} style={{ fontSize: '1.5rem' }}></i>
                <p>{button.label}</p>
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className='host-footer'>
        <button onClick={handleBack}>Back</button>
        <button onClick={handleNextClick}>Next</button> {/* Next button to save and move forward */}
      </div>
    </div>
  );
}
