export function PageThree({handleNext,handleBack}){
    return(
        <div>
             <header className="header-host">
            <img src="/48564e5fe8898cf62b0bbf42276d6cf3.jpeg" alt="paradise" />
            <button>Exit</button>
            </header>
                <div className="body-host">

                <p className="page-question">What type of property do you have ?*</p> 
                    <div className="pannel-box">
                    
                       <div className='box'>
                       <h3>1.</h3>
                         <div className='box-image'></div>
                         <h4>Homes</h4>
                         <p>A standalone house or private residence rented as a whole.</p>
                       </div>
                       
                       <div className='box'>
                        <h3>2.</h3>
                       <div className='box-image'></div>
                       <h4>Apartment/condo</h4>
                       <p>An Apartment or condo unit rented as a whole.</p>
                       </div>

                       <div className='box'>
                       <h3>3.</h3>
                       <div className='box-image'></div>
                       <h4>Hotels</h4>
                       <p>A hotel room or suite rented for exclusive use.</p>
                       </div>
                   </div>
                   <p className="note-page"><span>Note:</span>  Only entire property with private entrances are allowed-renting individul rooms in homes is not permitted.Shared outdoor spaces and amenities are acceptable</p>
                </div>
             
            <div className='host-footer'>
              {/* <div className="loading-pagethree"></div> */}
            <button  onClick={handleBack}>Back</button>
            <button onClick={handleNext}>Next</button>
            </div>
        </div>
    );

}