import '../Host-Registration/css/pageThree.css';

export function PageThree({ handleNext, handleBack }) {
  return (
    <div className="page-three-container">
      <div className="page-three-body-host">
        <p className="page-three-question">What type of property do you have? *</p>
        <div className="page-three-pannel-box">
          <div className="page-three-box">
            <h3 className="page-three-box-heading">1.</h3>
            <div className="page-three-box-image"></div>
            <h4 className="page-three-box-title">Homes</h4>
            <p className="page-three-box-description">
              A standalone house or private residence rented as a whole.
            </p>
          </div>

          <div className="page-three-box">
            <h3 className="page-three-box-heading">2.</h3>
            <div className="page-three-box-image"></div>
            <h4 className="page-three-box-title">Apartment/Condo</h4>
            <p className="page-three-box-description">
              An apartment or condo unit rented as a whole.
            </p>
          </div>

          <div className="page-three-box">
            <h3 className="page-three-box-heading">3.</h3>
            <div className="page-three-box-image"></div>
            <h4 className="page-three-box-title">Hotels</h4>
            <p className="page-three-box-description">
              A hotel room or suite rented for exclusive use.
            </p>
          </div>
        </div>
        <p className="page-three-note">
          <span>Note:</span> Only entire properties with private entrances are allowed—renting
          individual rooms in homes is not permitted. Shared outdoor spaces and amenities are
          acceptable.
        </p>
      </div>

      <div className="page-3-footer">
        <button onClick={handleBack} className=" page-3-back-btn">
          Back
        </button>
        <div className="page-3-progress-bar"></div>
        <button onClick={handleNext} className="page-3-next-btn">
          Next
        </button>
      </div>
    </div>
  );
}
