import { useState, useEffect } from "react";

export function PageNine({ handleNext, handleBack }) {
    const [text, setText] = useState("");
    const [wordCount, setWordCount] = useState(0);

    useEffect(() => {
     
        const words = text.trim().split(/\s+/);
        const count = words.filter(word => word.length > 0).length;

    
        setWordCount(count);

        if (count > 50) {
            alert("You have reached your limit of 50 words.");
         
            setText(words.slice(0, 50).join(' '));
        }
    }, [text]);

    return (
        <div>
            <header className="header-host">
                <img src="/48564e5fe8898cf62b0bbf42276d6cf3.jpeg" alt="paradise" />
                <button>Exit</button>
            </header>
            <div className="body-host">
                <div className="pannel-box-page9">
                    <div>
                        <h5 style={{ textAlign: "center" }}>Now, let's give your property a short title</h5>
                        <p style={{ textAlign: "center" }}>Short titles work best</p>
                    </div>
                    <textarea
                        id="textarea-page9"
                        name="textarea-page9"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        rows="4"
                        cols="50" 
                    />
                    <p style={{color:"#198E78"}}>Words: {wordCount}/50</p>
                </div>
            </div>
            <div className='host-footer'>
                <div className="loading-pageNine"></div>
                <button onClick={handleBack}>Back</button>
                <button onClick={handleNext}>Next</button>
            </div>
        </div>
    );
}
