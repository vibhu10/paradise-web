import './App.css';
const hotels = [
  {
      id: 1,
      name: "Miami, Florida",
      description: "Lorem Ipsum is simply",
      checkIn: "Aug 18",
      checkOut: "-23",
      pricePerNight: 224,
      totalPrice: 1382,
      rating: 4.98,
      reviews: 154,
      image: "https://via.placeholder.com/150x100.png?text=Hotel+1"
  },
  {
      id: 2,
      name: "Miami, Florida",
      description: "Lorem Ipsum is simply",
      checkIn: "Aug 18",
      checkOut: "Aug 23",
      pricePerNight: 224,
      totalPrice: 1382,
      rating: 4.98,
      reviews: 154,
      image: "https://via.placeholder.com/150x100.png?text=Hotel+2"
  },
  {
      id: 3,
      name: "Miami, Florida",
      description: "Lorem Ipsum is simply",
      checkIn: "Aug 18",
      checkOut: "Aug 23",
      pricePerNight: 224,
      totalPrice: 1382,
      rating: 4.98,
      reviews: 154,
      image: "https://via.placeholder.com/150x100.png?text=Hotel+3"
  },
  {
      id: 4,
      name: "Miami, Florida",
      description: "Lorem Ipsum is simply",
      checkIn: "Aug 18",
      checkOut: "Aug 23",
      pricePerNight: 224,
      totalPrice: 1382,
      rating: 4.98,
      reviews: 154,
      image: "https://via.placeholder.com/150x100.png?text=Hotel+4"
  },
  {
      id: 5,
      name: "Miami, Florida",
      description: "Lorem Ipsum is simply",
      checkIn: "Aug 18",
      checkOut: "Aug 23",
      pricePerNight: 224,
      totalPrice: 1382,
      rating: 4.98,
      reviews: 154,
      image: "https://via.placeholder.com/150x100.png?text=Hotel+5"
  },
  {
      id: 6,
      name: "Miami, Florida",
      description: "Lorem Ipsum is simply",
      checkIn: "Aug 18",
      checkOut: "Aug 23",
      pricePerNight: 224,
      totalPrice: 1382,
      rating: 4.98,
      reviews: 154,
      image: "https://via.placeholder.com/150x100.png?text=Hotel+6"
  },
  {
      id: 7,
      name: "Miami, Florida",
      description: "Lorem Ipsum is simply",
      checkIn: "Aug 18",
      checkOut: "Aug 23",
      pricePerNight: 224,
      totalPrice: 1382,
      rating: 4.98,
      reviews: 154,
      image: "https://via.placeholder.com/150x100.png?text=Hotel+7"
  },
  {
      id: 8,
      name: "Miami, Florida",
      description: "Lorem Ipsum is simply",
      checkIn: "Aug 18",
      checkOut: "Aug 23",
      pricePerNight: 224,
      totalPrice: 1382,
      rating: 4.98,
      reviews: 154,
      image: "https://via.placeholder.com/150x100.png?text=Hotel+8"
  },
];




export default function ParadiseHome() {
  return (
    <div className="home-container">
      <div className="header">
        <div className="home-filter"></div>
        <div className="home-grid"></div>
      </div>
      <div className="home-body">
        <div className="hotel-data">
          {hotels.map((hotel) => (
            <div key={hotel.id} className="hotel-card">
              <img src={hotel.image} alt={`Image of ${hotel.name}`}  />
              
              <div id='hotel-detail'>
              <h3>{hotel.name}</h3>
              <p>{hotel.description}</p>
              <p>Check-in: {hotel.checkIn}{hotel.checkOut}</p>
            
             <p>${hotel.pricePerNight}/night Total:${hotel.totalPrice}</p>
             
              </div>
              <div id='hotel-ratings'>
              {/* <p>Rating: {hotel.rating} ({hotel.reviews} reviews)</p> */}
                </div>
            </div>
          ))}
        </div>
      </div>
      <div className="footer">
        {/* Footer content here */}
      </div>
    </div>
  );
}