export function PageFour({handleNext,handleBack}){

    
    return(
        <div>
             <header className="header-host">
            <img src="/48564e5fe8898cf62b0bbf42276d6cf3.jpeg" alt="paradise" />
            <button>Exit</button>
            </header>
                <div className="body-host">        
                    
                      <div className="page-4-map">
                          <div className="text-page-4">
                            <p>Where's your place located?</p>
                            <p>Your address only shared with guests after they have've made a reservation</p>
                          </div>



                      </div>
                  
                </div>
             
            <div className='host-footer'>
              <div className="loading-pageFour"></div>
            <button  onClick={handleBack}>Back</button>
            <button onClick={handleNext}>Next</button>
            </div>
        </div>
    );

}