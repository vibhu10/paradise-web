import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Form } from "react-bootstrap"; // Bootstrap modal

export function PageTwelve({ handleNext, handleBack }) {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [bedrooms, setBedrooms] = useState([]);
  const [openAccordionIndex, setOpenAccordionIndex] = useState(null);
  const [photos, setPhotos] = useState({});
  const [selectedDiv, setSelectedDiv] = useState(null); // State for selecting div for photos
  const [showPhotoModal, setShowPhotoModal] = useState(false); // Modal for showing photos in a div
  const [currentRoomPhotos, setCurrentRoomPhotos] = useState([]); // To store photos for clicked room

  useEffect(() => {
    addBedroom(); // Add one bedroom on load
  }, []);

  function addBedroom() {
    setBedrooms((prevBedrooms) => [
      ...prevBedrooms,
      {
        singleBed: 0,
        doubleBed: 0,
        queenBed: 0,
        kingBed: 0,
        smallDouble: 0,
        bunkBed: 0,
        sofaBed: 0,
        sofa: 0,
      },
    ]);
  }

  function incrementValue(index, bedType) {
    const updatedBedrooms = bedrooms.map((bedroom, i) => {
      if (i === index) {
        return { ...bedroom, [bedType]: bedroom[bedType] + 1 };
      }
      return bedroom;
    });
    setBedrooms(updatedBedrooms);
  }

  function decrementValue(index, bedType) {
    const updatedBedrooms = bedrooms.map((bedroom, i) => {
      if (i === index && bedroom[bedType] > 0) {
        return { ...bedroom, [bedType]: bedroom[bedType] - 1 };
      }
      return bedroom;
    });
    setBedrooms(updatedBedrooms);
  }

  function deleteBedroom(index) {
    setBedrooms(bedrooms.filter((_, i) => i !== index));
  }

  const toggleAccordion = (index) => {
    setOpenAccordionIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  // Handle File Upload and Assign to Div
  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    if (!selectedDiv) return alert("Please select a div to assign photos");

    setPhotos((prevPhotos) => ({
      ...prevPhotos,
      [selectedDiv]: [...(prevPhotos[selectedDiv] || []), ...files],
    }));

    setButtonPopup(false); // Close the modal after upload
  };

  // Handle Div Selection
  const handleDivSelection = (event) => {
    setSelectedDiv(event.target.value);
  };

  // Handle Room Div Click to Show Photos
  const handleRoomClick = (room) => {
    if (photos[room] && photos[room].length > 0) {
      setCurrentRoomPhotos(photos[room]); // Set photos for the clicked room
      setShowPhotoModal(true); // Show modal
    }
  };

  return (
    <div className="main-container">
      <header className="header-host">
        <img src="/48564e5fe8898cf62b0bbf42276d6cf3.jpeg" alt="paradise" />
        <button className="btn btn-danger">Exit</button>
      </header>

      <div className="body-host-with-scroll">
        <div className="pannel-box-page12">
          <div className="uploading-photo-page12">
            <div style={{ marginLeft: "23px" }}>
              <button
                className="btn btn-outline-secondary rounded-circle"
                onClick={() => setButtonPopup(true)} // Open modal on click
              >
                +
              </button>
              <h4>Photo tour</h4>
              <p>
                Manage photos and add details. Guests will only see your tour if
                every room has a photo.
              </p>
            </div>

            <div className="photo-card-container row">
              {["Living room", "Full Kitchen", "Exterior", "Dining area", "Wash room"].map((div, index) => (
                <div
                  key={index}
                  className="col-md-3 photo-card"
                  onClick={() => handleRoomClick(div)} // Handle room div click
                >
                
                  <div className="photo-gallery">
                    {photos[div] && photos[div].length > 0 ? (
                      <>
                        
                        <img
                          src={URL.createObjectURL(photos[div][0])}
                          alt="Room Thumbnail"
                          width="100%"
                          height="100px"
                          style={{ objectFit: "cover", marginBottom: "10px" }}
                        />
                          <h6>{div}</h6>
                        <p>{photos[div].length} photos</p>
                      </>
                    ) : (
                      <p>No photos yet</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Accordion for Bedrooms */}
          <div className="adding-bedrooms-page12">
            <button
              style={{ position: "relative", left: "440px", top: "10px" }}
              className="btn btn-outline-secondary rounded-circle"
              onClick={addBedroom}
            >
              +
            </button>

            <div className="accordion mt-4" id="bedroomAccordion">
              {bedrooms.map((bedroom, index) => (
                <div key={index} className="accordion-item mb-3">
                  <h2 className="accordion-header" id={`heading${index}`}>
                    <button
                      className="accordion-button"
                      type="button"
                      onClick={() => toggleAccordion(index)}
                    >
                      Bedroom {index + 1}
                    </button>
                    <button
                      className="btn btn-outline-secondary rounded-circle"
                      style={{
                        backgroundColor: "red",
                        color: "white",
                        position: "absolute",
                        right: "330px",
                        top: "463px",
                        border: "1px solid gray",
                      }}
                      onClick={() => deleteBedroom(index)}
                    >
                      X
                    </button>
                  </h2>

                  <div
                    id={`collapse${index}`}
                    className={`accordion-collapse collapse ${
                      openAccordionIndex === index ? "show" : ""
                    }`}
                    aria-labelledby={`heading${index}`}
                    data-bs-parent="#bedroomAccordion"
                  >
                    <div className="accordion-body">
                      <h6 className="border-bottom">Sleeping Arrangements</h6>

                      <div className="row">
                        <div className="col-md-6">
                          {[
                            { label: "Single", type: "singleBed" },
                            { label: "Double", type: "doubleBed" },
                            { label: "Queen", type: "queenBed" },
                            { label: "King", type: "kingBed" },
                          ].map(({ label, type }) => (
                            <div key={type}>
                              <i
                                className="bi bi-bed"
                                style={{ fontSize: "24px", marginRight: "10px" }}
                              ></i>
                              <label className="me-auto">{label}</label>
                              <button
                                className="btn btn-outline-secondary"
                                onClick={() => decrementValue(index, type)}
                              >
                                -
                              </button>
                              <span className="mx-2">{bedroom[type]}</span>
                              <button
                                className="btn btn-outline-secondary"
                                onClick={() => incrementValue(index, type)}
                              >
                                +
                              </button>
                            </div>
                          ))}
                        </div>

                        <div className="col-md-6">
                          {[
                            { label: "Small Double", type: "smallDouble" },
                            { label: "Bunk Bed", type: "bunkBed" },
                            { label: "Sofa Bed", type: "sofaBed" },
                            { label: "Sofa", type: "sofa" },
                          ].map(({ label, type }) => (
                            <div
                              className="d-flex align-items-center mb-3"
                              key={type}
                            >
                              <i
                                className="bi bi-bed"
                                style={{ fontSize: "24px", marginRight: "10px" }}
                              ></i>
                              <label className="me-auto">{label}</label>
                              <button
                                className="btn btn-outline-secondary"
                                onClick={() => decrementValue(index, type)}
                              >
                                -
                              </button>
                              <span className="mx-2">{bedroom[type]}</span>
                              <button
                                className="btn btn-outline-secondary"
                                onClick={() => incrementValue(index, type)}
                              >
                                +
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* New Privacy Info Accordion */}
              <div className="accordion-item mb-3">
                <h2 className="accordion-header" id="privacyInfoHeading">
                  <button
                    className="accordion-button"
                    type="button"
                    onClick={() => toggleAccordion("privacyInfo")}
                  >
                    Privacy Info
                  </button>
                </h2>

                <div
                  id="collapsePrivacyInfo"
                  className={`accordion-collapse collapse ${
                    openAccordionIndex === "privacyInfo" ? "show" : ""
                  }`}
                  aria-labelledby="privacyInfoHeading"
                  data-bs-parent="#bedroomAccordion"
                >
                  <div className="accordion-body">
                    <p>Privacy information goes here.</p>
                  </div>
                </div>
              </div>

              {/* Restore the Amenities Accordion */}
              <div className="accordion-item mb-3">
                <h2 className="accordion-header" id="amenitiesHeading">
                  <button
                    className="accordion-button"
                    type="button"
                    onClick={() => toggleAccordion("amenities")}
                  >
                    Amenities
                  </button>
                </h2>

                <div
                  id="collapseAmenities"
                  className={`accordion-collapse collapse ${
                    openAccordionIndex === "amenities" ? "show" : ""
                  }`}
                  aria-labelledby="amenitiesHeading"
                  data-bs-parent="#bedroomAccordion"
                >
                  <div className="accordion-body">
                    <p>Amenities information goes here.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Modal for Photo Upload */}
          <Modal show={buttonPopup} onHide={() => setButtonPopup(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Upload Photos</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group controlId="formFileMultiple" className="mb-3">
                <Form.Label>Select Room you want to upload photo of</Form.Label>
                <Form.Select onChange={handleDivSelection}>
                  <option>Select a Room</option>
                  {["Living room", "Full Kitchen", "Exterior", "Dining area", "Wash room"].map((div, index) => (
                    <option key={index} value={div}>
                      {div}
                    </option>
                  ))}
                </Form.Select>

                <Form.Label className="mt-3">Upload Photos</Form.Label>
                <Form.Control
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleFileUpload}
                />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setButtonPopup(false)}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>

          {/* Modal for Viewing Room Photos */}
          <Modal show={showPhotoModal} onHide={() => setShowPhotoModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Room Photos</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {currentRoomPhotos.map((photo, index) => (
                <img
                  key={index}
                  src={URL.createObjectURL(photo)}
                  alt={`Room photo ${index + 1}`}
                  width="100%"
                  style={{ marginBottom: "10px" }}
                />
              ))}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowPhotoModal(false)}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>

        </div>

        
      </div>
      
      <div className="host-footer">
        <button onClick={handleBack}>Back</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}
