import { useState } from "react";

export function PageTwo({handleNext,handlePrevious}){
    const [selectedValue, setSelectedValue] = useState('')
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
        { icon: 'bi-sun', label: 'Seasonal' }
      ];

  const handleClick = (label) => {
    setSelectedValue(label);  // Store the selected label
    console.log('Selected:', label);  // You can perform additional actions here
  };
return(
    <div>
    <header className="header-host">
   <img src="/48564e5fe8898cf62b0bbf42276d6cf3.jpeg" alt="paradise" />
   <button>Exit</button>
   </header>
       <div className="body-host">
      <p className="page-question">Which of this describe your place ?</p>
       {/* <h4> it's easy to get started on Paradise</h4> */}
           <div className="pannel-box-page2">
        
        {buttonData.map((button, index) => (
          <div key={index} className="buttons-div">
            <button 
              className="center-buttons" 
              onClick={() => handleClick(button.label)}  // Handle click
              
            >
              <i className={`bi ${button.icon}`} style={{ fontSize: '1.5rem' }}></i>
              <p>{button.label}</p>
            </button>
          </div>
        ))}
    
                
          </div>
       </div>
   <div className='host-footer'>
       <button  onClick={handlePrevious}>Back</button>
       <button onClick={handleNext}>Next</button>
   </div>
</div>
)
}