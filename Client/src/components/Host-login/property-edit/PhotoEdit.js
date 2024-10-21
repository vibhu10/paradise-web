import { useState } from "react";
import "../Host-login-Css/photos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function PhotoEdit() {
  const [bedrooms, setBedrooms] = useState([
    {
      id: 1,
      name: "Bedroom 1",
      photos: [],
      sleepingArrangement: {
        single: 0,
        double: 0,
        queen: 1,
        king: 0,
        smallDouble: 0,
        bunkBed: 0,
        sofaBed: 0,
        sofa: 0,
      },
    },
  ]);

  const [addPhotoButtonPopUP, setAddPhotoPopUp] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState("");
  const [photoGallery, setPhotoGallery] = useState([
    { name: "Living room", Photos: [] },
    { name: "Full Kitchen", Photos: [] },
    { name: "Exterior", Photos: [] },
    { name: "Dining area", Photos: [] },
    { name: "Wash Rooms", Photos: [] },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [currentPhotos, setCurrentPhotos] = useState([]);
  const [currentRoom, setCurrentRoom] = useState(null); // Keep track of the current room or bedroom being shown

  const handleRemoveBedroom = (id) => {
    setBedrooms(bedrooms.filter((bedroom) => bedroom.id !== id));
  };

  const handleRoomSelection = (e) => {
    setSelectedRoom(e.target.value);
  };

  const handlePhotoUpload = (e, roomName, isBedroom = false, bedroomId = null) => {
    const file = e.target.files[0];

    if (isBedroom) {
      const updatedBedrooms = [...bedrooms];
      const bedroomIndex = bedrooms.findIndex((room) => room.id === bedroomId);

      if (bedroomIndex >= 0) {
        updatedBedrooms[bedroomIndex].photos.push(URL.createObjectURL(file));
        setBedrooms(updatedBedrooms);
      }
    } else {
      const updatedPhotoGallery = [...photoGallery];
      const roomIndex = photoGallery.findIndex((room) => room.name === roomName);

      if (roomIndex >= 0) {
        updatedPhotoGallery[roomIndex].Photos.push(URL.createObjectURL(file));
        setPhotoGallery(updatedPhotoGallery);
      }
    }
  };

  const handleSleepingArrangementChange = (bedroomId, type, value) => {
    const updatedBedrooms = [...bedrooms];
    const bedroomIndex = bedrooms.findIndex((room) => room.id === bedroomId);

    if (bedroomIndex >= 0) {
      updatedBedrooms[bedroomIndex].sleepingArrangement[type] = value;
      setBedrooms(updatedBedrooms);
    }
  };

  // Open modal with the current room or bedroom's photos
  const openPhotoModal = (photos, room) => {
    setCurrentPhotos(photos);
    setCurrentRoom(room);
    setShowModal(true);
  };

  // Handle deleting a photo from the current room or bedroom
  const deletePhoto = (photoIndex) => {
    if (currentRoom) {
      // Check if it's a bedroom or a gallery room
      if (currentRoom.Photos) {
        // It's a room from the photoGallery
        const updatedGallery = [...photoGallery];
        const roomIndex = updatedGallery.findIndex((room) => room === currentRoom);
        updatedGallery[roomIndex].Photos.splice(photoIndex, 1);
        setPhotoGallery(updatedGallery);
      } else {
        // It's a bedroom
        const updatedBedrooms = [...bedrooms];
        const bedroomIndex = updatedBedrooms.findIndex((bedroom) => bedroom === currentRoom);
        updatedBedrooms[bedroomIndex].photos.splice(photoIndex, 1);
        setBedrooms(updatedBedrooms);
      }

      // Update current photos in modal after deletion
      setCurrentPhotos((prevPhotos) => prevPhotos.filter((_, idx) => idx !== photoIndex));
    }
  };

  return (
    <div className="photoEdit-hostlogin">
      <div id="photo-tour-section">
        <div className="heading-photo-tour">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h4 style={{ fontWeight: 600 }}>Photo tour</h4>
            <button
              style={{ backgroundColor: "lightgray", borderRadius: "20px" }}
              onClick={() => setAddPhotoPopUp(!addPhotoButtonPopUP)}
            >
              +
            </button>

            {addPhotoButtonPopUP && (
              <div className="addphotos-gallery-popup">
                <h4 style={{ fontWeight: 600 }}>Select Room to Add Photos</h4>
                <select
                  style={{ width: "400px", height: "50px" }}
                  onChange={handleRoomSelection}
                  value={selectedRoom}
                >
                  <option value="">-- Select a Room --</option>
                  {photoGallery.map((room, index) => (
                    <option key={index} value={room.name}>
                      {room.name}
                    </option>
                  ))}
                </select>

                {selectedRoom && (
                  <div className="photo-upload-section">
                    <label
                      style={{
                        color: "gray",
                        fontWeight: 500,
                        marginRight: "10px",
                      }}
                    >
                      Upload Photo for {selectedRoom}
                    </label>
                    <input
                      style={{ borderRadius: "10px", border: "none" }}
                      type="file"
                      onChange={(e) => handlePhotoUpload(e, selectedRoom, false)}
                    />
                  </div>
                )}

                <button
                  style={{ width: "200px", marginTop: "10px" }}
                  onClick={() => setAddPhotoPopUp(false)}
                >
                  Close
                </button>
              </div>
            )}
          </div>
          <p style={{ color: "gray", lineHeight: 0.9 }}>
            Manage photos and add details. Guests will only see your tour if every room has a photo.
          </p>
        </div>

        {/* Photo Gallery Display with Stacking and Modal */}
        <div className="photos-gallery">
          {photoGallery.map((data, index) => (
            <div
              className="photo-gallery-div"
              key={index}
              onClick={() => openPhotoModal(data.Photos, data)}
              style={{ cursor: "pointer" }}
            >
              <div className="photo-stack" style={{ marginBottom: "15px" }}>
                {data.Photos.slice(0, 3).map((photo, idx) => (
                  <img
                    className="image-gallery-photo stacked-photo"
                    key={idx}
                    src={photo}
                    alt={`${data.name} photo`}
                  />
                ))}
              </div>
              <div>
              <h5 style={{ fontWeight: 600, lineHeight: 0.4 }}>{data.name}</h5>
              <p style={{ lineHeight: 0.7 }}>{data.Photos.length} Photos</p>
                </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bedrooms Accordion */}
      <div className="bedroom-accordion-outer">
        <button
          onClick={() =>
            setBedrooms([
              ...bedrooms,
              {
                id: bedrooms.length + 1,
                name: `Bedroom ${bedrooms.length + 1}`,
                photos: [],
                sleepingArrangement: {
                  single: 0,
                  double: 0,
                  queen: 1,
                  king: 0,
                  smallDouble: 0,
                  bunkBed: 0,
                  sofaBed: 0,
                  sofa: 0,
                },
              },
            ])
          }
        >
          Add Bedroom
        </button>
        <div className="accordion accordion-flush" id="accordionFlushExample">
          {bedrooms.map((bedroom) => (
            <div className="accordian-divs" key={bedroom.id}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h3 style={{ fontWeight: 600 }}>{bedroom.name}</h3>
                <button
                  style={{ backgroundColor: "red", borderRadius: "50%" }}
                  onClick={() => handleRemoveBedroom(bedroom.id)}
                >
                  X
                </button>
              </div>
              <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#flush-collapse-${bedroom.id}`}
                      aria-expanded="false"
                      aria-controls={`flush-collapse-${bedroom.id}`}
                    >
                      <h6 style={{ fontWeight: 600 }}>{`Add ${bedroom.name} Photo`}</h6>
                    </button>
                  </h2>
                  <div
                    id={`flush-collapse-${bedroom.id}`}
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <label htmlFor={`file-upload-${bedroom.id}`}>
                        <div
                          className="file-upload-bedrooms-accordian"
                          style={{
                            border: "2px dashed lightgray",
                            padding: "10px",
                            textAlign: "center",
                            cursor: "pointer",
                          }}
                        >
                          <img
                            src="image-upload-placeholder-icon"
                            alt="Add Photo"
                            style={{ width: "50px" }}
                          />
                          <p>Add photos</p>
                        </div>
                      </label>
                      <input
                        id={`file-upload-${bedroom.id}`}
                        type="file"
                        style={{ display: "none" }}
                        onChange={(e) =>
                          handlePhotoUpload(e, bedroom.name, true, bedroom.id)
                        }
                      />
                    </div>
                  </div>
                </div>

                {/* Sleeping Arrangements Accordion */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#flush-collapseTwo-${bedroom.id}`}
                      aria-expanded="false"
                      aria-controls={`flush-collapseTwo-${bedroom.id}`}
                    >
                      <h6 style={{ fontWeight: 600 }}>Sleeping Arrangements</h6>
                    </button>
                  </h2>
                  <div
                    id={`flush-collapseTwo-${bedroom.id}`}
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body-sleepingArrangement">
                      <div className="sleeping-arrangement">
                        {Object.keys(bedroom.sleepingArrangement).map((key, index) => (
                          <div
                            key={index}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              marginBottom: "10px",
                            }}
                          >
                            <label
                              style={{
                                marginRight: "10px",
                                width: "100px",
                              }}
                            >
                              {key.charAt(0).toUpperCase() + key.slice(1)}:
                            </label>
                            <button
                              onClick={() =>
                                handleSleepingArrangementChange(
                                  bedroom.id,
                                  key,
                                  Math.max(0, bedroom.sleepingArrangement[key] - 1)
                                )
                              }
                            >
                              -
                            </button>
                            <span style={{ margin: "0 10px" }}>
                              {bedroom.sleepingArrangement[key]}
                            </span>
                            <button
                              onClick={() =>
                                handleSleepingArrangementChange(
                                  bedroom.id,
                                  key,
                                  bedroom.sleepingArrangement[key] + 1
                                )
                              }
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
            </div>
          ))}
        </div>



        
      </div>

      {/* Bedrooms photos footer container */}
      <div className="bedrooms-photos-footer-container">
        {bedrooms.map((bedroom, index) => (
          <div
            className="photo-gallery-div bedroom-photo-container"
            key={index}
            onClick={() => openPhotoModal(bedroom.photos, bedroom)}
          >
            <div className="photo-stack" style={{ marginBottom: "15px" }}>
              {bedroom.photos.slice(0, 3).map((photo, idx) => (
                <img
                  className="image-gallery-photo stacked-photo"
                  key={idx}
                  src={photo}
                  alt={`${bedroom.name} photo`}
                />
              ))}
            </div>
            <div>
              <h5 style={{ fontWeight: 600, lineHeight: 0.4 }}>{bedroom.name}</h5>
              <p style={{ lineHeight: 0.7 }}>{bedroom.photos.length} Photos</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for showing all photos */}
      {showModal && (
        <div className="photo-modal">
          <div className="photo-modal-content">
            <button onClick={() => setShowModal(false)} className="close-modal">
              X
            </button>
            <div className="photo-modal-gallery">
              {currentPhotos.map((photo, idx) => (
                <div key={idx} className="photo-container">
                  <img src={photo} alt={`Photo ${idx}`} />
                  <button className="delete-photo-btn" onClick={() => deletePhoto(idx)}>
                    X
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
