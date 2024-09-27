import { useState } from 'react';
import './Host.css';
import { PageOne } from './PageOne';
import { PageTwo } from './PageTwo';
import { PageThree } from './PageThree';
import { PageFour } from './PageFour';
import { PageFive } from './PageFive';
import { PageSix } from './PageSix';
import { PageSeven } from './PageSeven';
import { PageEight } from './PageEight';
import { PageNine } from './PageNine';
import { PageTen } from './PageTen';
import { PageEleven } from './PageEleven';
export default function Host() {
    const [currentPage, setCurrentPage] = useState(1);

    function handleNext() {
        console.log("Next button pressed");
        if (currentPage >= 1) {
            setCurrentPage((p) => p + 1);
        }
    }

    function handleBack(){
        if(currentPage>1){
            setCurrentPage((p)=>p-1)
        }
    }

    console.log("Current Page:", currentPage); // Check the current page state

    return (
        <div className="host-container">
            {currentPage === 1 && <PageOne handleNext={handleNext} />}
            {currentPage === 2 &&  <PageTwo handleNext={handleNext} handleBack={handleBack} />}
            {currentPage === 3 && <PageThree handleNext={handleNext} handleBack={handleBack} />}
            {currentPage ===4 && <PageFour handleNext={handleNext} handleBack={handleBack}/>}
            {currentPage ===5 && <PageFive handleNext={handleNext} handleBack={handleBack}/>}
            {currentPage ===6 && <PageSix handleNext={handleNext} handleBack={handleBack}/>}
            {currentPage ===7 && <PageSeven handleNext={handleNext} handleBack={handleBack}/>}
            {currentPage ===8 && <PageEight handleNext={handleNext} handleBack={handleBack}/>}
            {currentPage ===9 && <PageNine handleNext={handleNext} handleBack={handleBack}/>}
            {currentPage ===10 && <PageTen handleNext={handleNext} handleBack={handleBack}/>}
            {currentPage ===11 && <PageEleven handleNext={handleNext} handleBack={handleBack}/>}
        </div>
    );
}
