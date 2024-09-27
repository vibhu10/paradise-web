import { useState } from "react";

import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { display } from "@mui/system";

export function PageThirteen({ handleNext, handleBack }) {
  const [checkinOut, setCheckInOUt] = useState({
    checkin: null,
    checkout: null,
  });
  const [quiteHour, setQuitHour] = useState({
    quitHourStart: null,
    quiteHourEnd: null,
  });
  const [AddInstruction, setAddInstruction] = useState([]);


  function handleInstruction(index,value){
    const updatedInstruction=[...AddInstruction]
    updatedInstruction[index]=value
    setAddInstruction(updatedInstruction)

  }
function addTextArea(){
  setAddInstruction([...AddInstruction,''])
}
  function handleTime(e) {}
  return (
    <div className="main-container">
      <header className="header-host">
        <img src="/48564e5fe8898cf62b0bbf42276d6cf3.jpeg" alt="paradise" />
        <button>Exit</button>
      </header>

      <div className="body-host-with-scroll">
        <div className="pannel-box-page13">
          <h5>Check-in/Out</h5>

          <div className="pannel-box-page12-div1">
            <div style={{ display: "flex", flexDirection:"column" }}>
              <h8 style={{fontWeight:600}}>Quite Hours</h8>
            <div style={{marginBottom:5}}>
                <h9 style={{marginRight:"280px",fontSize: '12px'}}>Start Time</h9>
                <h9 style={{fontSize: '12px'}}>End Time</h9>
                </div>

                <div style={{display:"flex ", justifyContent:"space-between"}}>

              <div className="input-group" style={{ width: 250, height: 40 }}>
                <Flatpickr
                  style={{ fontWeight: 600, fontSize: 17 }}
                  id="timePicker"
                  className="form-control"
                  value={quiteHour.quitHourStart}
                  onChange={handleTime}
                  options={{
                    enableTime: true,
                    noCalendar: true,
                    dateFormat: "h:i K",
                    time_24hr: false,
                  }}
                />
              </div>

              <div className="input-group" style={{ width: 250, height: 40 }}>
                <Flatpickr
                  style={{ fontWeight: 600, fontSize: 17 }}
                  id="timePicker"
                  className="form-control"
                  value={quiteHour.quiteHourEnd
                  }
                  onChange={handleTime}
                  options={{
                    enableTime: true,
                    noCalendar: true,
                    dateFormat: "h:i K",
                    time_24hr: false,
                  }}
                  />
              </div>
                  </div>
            </div>

            <div style={{ display: "flex",flexDirection:"column",marginTop:15 }}>
            <h8 style={{fontWeight:600}}>Check-in and Check-out</h8>
              <div>
              <h9 style={{marginRight:"280px",fontSize: '12px'}}>Check-in</h9>
              <h9 style={{fontSize: '12px'}}>Check-out</h9>
              </div>
              <div style={{display:"flex",justifyContent:"space-between"}}>

              <div className="input-group" style={{ width: 250, height: 40 }}>
                <Flatpickr
                  style={{ fontWeight: 600, fontSize: 17 }}
                  id="timePicker"
                  className="form-control"
                  value={checkinOut.checkin}
                  onChange={handleTime}
                  options={{
                    enableTime: true,
                    noCalendar: true,
                    dateFormat: "h:i K",
                    time_24hr: false,
                  }}
                />
              </div>

              <div className="input-group" style={{ width: 250, height: 40 }}>
                <Flatpickr
                  style={{ fontWeight: 600, fontSize: 17 }}
                  id="timePicker"
                  className="form-control"
                  value={checkinOut.checkout}
                  onChange={handleTime}
                  options={{
                    enableTime: true,
                    noCalendar: true,
                    dateFormat: "h:i K",
                    time_24hr: false,
                  }}
                />
              </div>
                  </div>
            </div>
            <h8>Arrive between 4:00 pm and Flexible Leave before 10:00 am</h8>
          </div>
        
          <div className="pannel-box-page12-div2">
          <h5>Check-in instructions</h5>
             {AddInstruction.map((inst,index)=>(

              <div key={index} >
                <textarea
                style={{width:"560px",height:"80px",borderRadius:"10px"}}
                  value={inst}
                  onChange={(e)=>handleInstruction(index,e.target.value)}
                  rows={4}
                />
              </div>
             ))}

<button onClick={addTextArea} style={{borderRadius:"10px",padding:"5px",backgroundColor:"white"}}>+Add-instruction</button>
          </div>
          <div className="pannel-box-page12-div3">
    <h5>Check-in method</h5>
    
    <div style={{ fontWeight: 600, }}>Smart Lock</div>
    <div style={{ fontSize: '12px', marginBottom: '16px' }}>
        Guests will use a code or app to open a wifi-connected lock.
    </div>
    
    <div style={{ fontWeight: 600, }}>Keypad</div>
    <div style={{ fontSize: '12px', marginBottom: '16px' }}>
        Guests will use the code you provide to open an electronic lock.
    </div>
    
    <div style={{ fontWeight: 600,  }}>Lockbox</div>
    <div style={{ fontSize: '12px', marginBottom: '16px' }}>
        Guests will use a code you provide to open a small safe that has a key inside.
    </div>
    
    <div style={{ fontWeight: 600,  }}>Building staff</div>
    <div style={{ fontSize: '12px' }}>
        Someone will be available 24 hours a day to let guests in.
    </div>
</div>


          <div className="pannel-box-page12-div4">

            <h5>Checkout instructions</h5>

             
    <div style={{ fontWeight: 600, }}>Throw rubbish away</div>
    <div style={{ fontSize: '12px', marginBottom: '16px' }}>
    Throw garbage in bins. Place the bins at the curb on Thursday. Garbage pickup is Fri. morning. Please bring empty bins to the front driveway

    </div>
    
    <div style={{ fontWeight: 600, }}>Turn things off</div>
    <div style={{ fontSize: '12px', marginBottom: '16px' }}>
    Turn off all the lights especially the string lights in the back yard
    </div>
    
    <div style={{ fontWeight: 600,  }}>Lock up</div>
    <div style={{ fontSize: '12px', marginBottom: '16px' }}>
    Press the lock button on your way out.
    </div>
    
    <div style={{ fontWeight: 600,  }}>Additional requests</div>
    <div style={{ fontSize: '12px' }}>
    Please wash all your dishes and throw away everything in the fridge.
    </div>
          </div>
        </div>
      </div>

      <div className="host-footer">
        <button onClick={handleBack}>Back</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}
