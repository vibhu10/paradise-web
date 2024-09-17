import './Host.css';

export default function Host() {
    return (
        <div className="host-container">
            <header className="header-host">
            <img src="/48564e5fe8898cf62b0bbf42276d6cf3.jpeg" alt="paradise" />
            <button>Exit</button>
            </header>
                <div className="body-host">

                {/* <h4> it's easy to get started on Paradise</h4> */}
                    <div className="pannel-box">
                    
                       <div className='box'>
                       <h3>1.</h3>
                         <div className='box-image'></div>
                         <h4>Tell us about your place</h4>
                         <p>share some basic info, such as where it is and how many guest can stay</p>
                       </div>
                       
                       <div className='box'>
                        <h3>2.</h3>
                       <div className='box-image'></div>
                       <h4>Make it stand out</h4>
                       <p>Add five or more photos plus a title and description-we will help you out</p>
                       </div>

                       <div className='box'>
                       <h3>3.</h3>
                       <div className='box-image'></div>
                       <h4>Finish up and Publish</h4>
                       <p>chose a starting price,verify a few details,then publish your listing</p>
                       </div>
                   </div>
                </div>
            <div className='host-footer'>
                <button>Get Started</button>
            </div>
        </div>
    );
}
