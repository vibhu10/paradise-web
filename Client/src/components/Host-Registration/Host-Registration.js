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
import { PageTwelve } from './PageTwelve';
import { PageThirteen } from './PageThirteen';
import { PageFourteen } from './PageFourteen';
import { PageFifteen } from './PageFifteen';

export default function HostRegistration() {
    const [currentPage, setCurrentPage] = useState(1);
    const [propertyData, setPropertyData] = useState({}); // Single object for all data

    function handleNext() {
        console.log("Next button pressed");
        if (currentPage >= 1 && currentPage < 15) {
            setCurrentPage((p) => p + 1);
        }
    }

    function handleBack() {
        if (currentPage > 1) {
            setCurrentPage((p) => p - 1);
        }
    }

    function handleSaveProperty(data) {
        // Merge new data into the existing propertyData object
        setPropertyData((prevData) => ({
            ...prevData,
            ...data // Merging data from the current page
        }));
        console.log("Updated property data:", propertyData);
    }

    return (
        <div className="host-container">
            {currentPage === 1 && <PageOne handleNext={handleNext} />}
            {currentPage === 2 && <PageTwo handleNext={handleNext} handleBack={handleBack} handleSaveProperty={handleSaveProperty} />}
            {currentPage === 3 && <PageThree handleNext={handleNext} handleBack={handleBack} handleSaveProperty={handleSaveProperty} />}
            {currentPage === 4 && <PageFour handleNext={handleNext} handleBack={handleBack} handleSaveProperty={handleSaveProperty} />}
            {currentPage === 5 && <PageFive handleNext={handleNext} handleBack={handleBack} handleSaveProperty={handleSaveProperty} />}
            {currentPage === 6 && <PageSix handleNext={handleNext} handleBack={handleBack} handleSaveProperty={handleSaveProperty} />}
            {currentPage === 7 && <PageSeven handleNext={handleNext} handleBack={handleBack} handleSaveProperty={handleSaveProperty} />}
            {currentPage === 8 && <PageEight handleNext={handleNext} handleBack={handleBack} handleSaveProperty={handleSaveProperty} />}
            {currentPage === 9 && <PageNine handleNext={handleNext} handleBack={handleBack} handleSaveProperty={handleSaveProperty} />}
            {currentPage === 10 && <PageTen handleNext={handleNext} handleBack={handleBack} handleSaveProperty={handleSaveProperty} />}
            {currentPage === 11 && <PageEleven handleNext={handleNext} handleBack={handleBack} handleSaveProperty={handleSaveProperty} />}
            {currentPage === 12 && <PageTwelve handleNext={handleNext} handleBack={handleBack} handleSaveProperty={handleSaveProperty} />}
            {currentPage === 13 && <PageThirteen handleNext={handleNext} handleBack={handleBack} handleSaveProperty={handleSaveProperty} />}
            {currentPage === 14 && <PageFourteen handleNext={handleNext} handleBack={handleBack} handleSaveProperty={handleSaveProperty} />}
            {currentPage === 15 && <PageFifteen handleNext={handleNext} handleBack={handleBack} handleSaveProperty={handleSaveProperty} />}
        </div>
    );
}
