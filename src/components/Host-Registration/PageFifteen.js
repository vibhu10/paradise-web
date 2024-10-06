


export function PageFifteen({ handleNext, handleBack }) {


    return (
      <div className="main-container">
        <header className="header-host">
          <img src="/48564e5fe8898cf62b0bbf42276d6cf3.jpeg" alt="paradise" />
          <button>Exit</button>
        </header>
  
        <div className="body-host">
              
          <div className="pannel-box-page15">
             <div className="page15-payment-div1">
                <div>

                <h5>Saved Card </h5>
                <button style={{border:"none",backgroundColor:"white",    borderBottom: '2px solid black', paddingBottom:"-6px"
                }}>+Add More Card</button>
                </div>

                <input  typeof="number" placeholder="xxxx247" className="input-payment-card"></input>
                <input typeof="number" placeholder="xxxx247"  className="input-payment-card"></input>
           <h2>Payment @ Payouts</h2>
           <h4 style={{fontWeight:600}}>Your payments</h4>
           <p>Keep track of all your payments and refunds.</p>
           <button className="make-payment-button">Manage Payment</button>
             </div>
             <div className="page15-payment-div2">
             <h4 style={{fontWeight:600}}>Let's add a payout method</h4>
             <p>To start, let us know where you'd like us to send your money.</p>
       <h5>Billing country/region</h5>
       <input
      className="input-payment-card"
       type="text"
       placeholder="Billong/country/region"
       />
          <h4 style={{fontWeight:600}}>How would you like to get paid?</h4>
          <div className="payment-for-host">
               <div style={{display:"flex",flexDirection:"column", paddingLeft:"10px"}}>

               <label>Bank account</label>
               <p style={{lineHeight:0.8}}>3–5 business days</p>
               <p style={{lineHeight:0.1}}>No fees</p>
               </div>
           <input
           type="radio"
           value="Bank Account"
           />
           </div>
                 


           <div className="payment-for-host">
               <div style={{display:"flex",flexDirection:"column", paddingLeft:"10px"}}>

               <label>PayPal</label>
               <p style={{lineHeight:0.8}}>1 business day</p>
               <p style={{lineHeight:0.1}}>PayPal fees may apply</p>
               </div>
           <input
           type="radio"
           value="Bank Account"
           />
           </div>      
             </div>
  
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
  