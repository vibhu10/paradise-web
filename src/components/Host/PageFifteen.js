


export function PageFifteen({ handleNext, handleBack }) {


    return (
      <div>
        <header className="header-host">
          <img src="/48564e5fe8898cf62b0bbf42276d6cf3.jpeg" alt="paradise" />
          <button>Exit</button>
        </header>
  
        <div className="body-host">
              
          <div className="pannel-box-page15">
  
          </div>
           </div>
   
        <div className="host-footer">
          <div className="loading-pageFifteen"></div>
          <button onClick={handleBack}>Back</button>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
    );
  }
  