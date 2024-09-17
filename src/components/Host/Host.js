import { useState } from 'react';
import './Host.css';
import { PageOne } from './PageOne';
import {PageTwo} from './PageTwo';
export default function Host() {

    const[currentPage,setCurrentPage]=useState(1);

    function handleNext(){
        if(currentPage>=1){
        setCurrentPage((p)=>p+1);
        }
    }
    function handlePrevious(){
         setCurrentPage((p)=>p-1);
    }
    return (
        <div className="host-container">
         
         {currentPage ==1 ? <PageOne handleNext={handleNext}/> :<></>}
          {currentPage ==2 ?<PageTwo handleNext={handleNext} handlePrevious={handlePrevious}/>:<></>}
        </div>
    );
}
