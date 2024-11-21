export function PageFour({handleNext,handleBack}){

    
    return(
        <div>
             
                <div className="body-host">        
                    
                      <div className="page-4-map">
                          <div className="text-page-4">
                            <p>Where's your place located?</p>
                            <p>Your address only shared with guests after they have've made a reservation</p>
                          </div>



                      </div>
                  
                </div>
             
            <div className='host-footer'>
              {/* <div className="loading-pageFour"></div> */}
            <button  onClick={handleBack}>Back</button>
            <button onClick={handleNext}>Next</button>
            </div>
        </div>
    );

}