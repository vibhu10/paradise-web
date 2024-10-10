import { useEffect, useState } from "react";

export function PageTen({ handleNext, handleBack }) {
    const [text, setText] = useState("");
    const [wordCount, setWordCount] = useState(0);

    const [price, setPrice] = useState({
        BaseCharge: 0,
        ServiceFees: 0,
        PriceBeforeTax: 0,
        YouEarn: 0,
    });


    
    useEffect(() => {
     
        const words = text.trim().split(/\s+/);
        const count = words.filter(word => word.length > 0).length;

    
        setWordCount(count);

        if (count > 400) {
            alert("You have reached your limit of 50 words.");
         
            setText(words.slice(0, 400).join(' '));
        }
    }, [text]);
    function handlePrice(e) {
        const baseCharge = parseFloat(e.target.value) || 0; 
        const serviceFees = (baseCharge * 14) / 100; 
        const youearn=(baseCharge*3)/100;

        setPrice((prevPrice) => ({
            ...prevPrice,
            BaseCharge: baseCharge,
            ServiceFees: serviceFees,
            PriceBeforeTax: baseCharge + serviceFees,
            YouEarn:baseCharge-youearn, 
        }));
    }

    return (
        <div>
            <header className="header-host">
                <img src="/48564e5fe8898cf62b0bbf42276d6cf3.jpeg" alt="paradise" />
                <button>Exit</button>
            </header>
            <div className="body-host">
                <div className="pannel-box-page10">
                    <div className="pannel-box-page10-div1">
                        <h5 style={{ textAlign: "center", fontSize:25 }}>Create your description</h5>
                        <p style={{ textAlign: "center" }}>Share what makes your place special</p>
                        <textarea
                            id="textarea-page10"
                            name="textarea-page10"
                            value={text}
                            onChange={(e) => {
                                setText(e.target.value);
                                setWordCount(e.target.value.split(' ').filter(word => word).length); // Count words
                            }}
                            rows="4"
                            cols="50"
                        />
                        <p style={{ color: "#198E78" }}>{wordCount}/400</p>
                    </div>

                    <div className="pannel-box-page10-div2">
                        <h5 style={{ textAlign: "left" }}>Now, set your price</h5>
                        <p style={{ textAlign: "left" }}>You can change it anytime.</p>
                        <input
                            style={{ height: "50px", borderRadius: "10px", border: "1px solid lightgray" }}
                            type="number"
                            name="input-price-page10"
                            id="input-price-page10"
                            value={price.BaseCharge === 0 ? "" : price.BaseCharge}
                            onChange={handlePrice}
                        />
                        
                        <p style={{ display: 'flex', justifyContent: 'space-between', fontWeight: "500", margin: 0, padding: 0 }}>
                            Base price <span style={{ marginLeft: 'auto' }}>${price.BaseCharge.toFixed(2)}</span>
                        </p>
                        <p style={{ display: 'flex', justifyContent: 'space-between', fontWeight: "500", margin: 0, padding: 0 }}>
                            Guest service fees <span style={{ marginLeft: 'auto' }}>${price.ServiceFees.toFixed(2)}</span>
                        </p>
                        <p style={{ display: 'flex', justifyContent: 'space-between', fontWeight: "500", margin: 0, padding: 0 }}>
                          Guest price before taxes <span style={{ marginLeft: 'auto' }}>${price.PriceBeforeTax.toFixed(2)}</span>
                        </p>
                        <p style={{color:"green", display: 'flex', justifyContent: 'space-between', fontWeight: "500", marginTop: 10, padding: 0 }}>
                          You earn <span style={{ marginLeft: 'auto' }}>${price.YouEarn}</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className='host-footer'>
                {/* <div className="loading-pageTen"></div> */}
                <button onClick={handleBack}>Back</button>
                <button onClick={handleNext}>Next</button>
            </div>
        </div>
    );
}
