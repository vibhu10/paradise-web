import { useState } from "react";

export function PageSeven({handleBack,handleNext}){

  

   
return(
    <div>
    <header className="header-host">
   <img src="/48564e5fe8898cf62b0bbf42276d6cf3.jpeg" alt="paradise" />
   <button>Exit</button>
   </header>
       <div className="body-host">
      <p className="page-question"> it's easy to get started on Paradise</p>
       {/* <h4> it's easy to get started on Paradise</h4> */}
           <div className="pannel-box-page7">
        
       
                
          </div>
       </div>
    
      <div className='host-footer'>
           <div className="loading-pageSeven"></div>
       <button onClick={handleBack}>Back</button>

       <button onClick={handleNext}>Next</button>
   </div>
</div>
)
}