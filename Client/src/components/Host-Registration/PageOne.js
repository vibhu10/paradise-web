import { useNavigate } from 'react-router-dom';
import '../Host-Registration/css/pageOne.css';

export function PageOne({ handleNext }) {
  const navigate = useNavigate(); // Initialize useNavigate hook

  return (
    <div className="page-one-container">
      <div className="page-one-body-host">
        <p className="page-one-question">It’s easy to get started on Paradise</p>
        <div className="page-one-pannel-box">
          <div className="page-one-box">
            <h3 className="page-one-box-number">1.</h3>
            <div className="page-one-box-image"></div>
            <h4 className="page-one-box-title">Tell us about your place</h4>
            <p className="page-one-box-description">
              Share some basic info, such as where it is and how many guests can stay.
            </p>
          </div>

          <div className="page-one-box">
            <h3 className="page-one-box-number">2.</h3>
            <div className="page-one-box-image"></div>
            <h4 className="page-one-box-title">Make it stand out</h4>
            <p className="page-one-box-description">
              Add five or more photos plus a title and description—we’ll help you out.
            </p>
          </div>

          <div className="page-one-box">
            <h3 className="page-one-box-number">3.</h3>
            <div className="page-one-box-image"></div>
            <h4 className="page-one-box-title">Finish up and publish</h4>
            <p className="page-one-box-description">
              Choose a starting price, verify a few details, then publish your listing.
            </p>
          </div>
        </div>
      </div>
     
      <footer className="page-one-footer">
        <div className="page-one-progress-bar"></div>
        <button className="page-one-next-btn" onClick={handleNext}>
         GetStarted
        </button>
      </footer>
     
    </div>
  );
}
