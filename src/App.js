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
image: '/pexels-neverlandphotos-5028910.jpg'
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
      image: "/pexels-pixabay-258154.jpg"
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
      image:"/pexels-pixabay-261186.jpg"
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
      image: "/pexels-rachel-claire-4577385.jpg"
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
      image: "/pexels-rachel-claire-4577386.jpg"
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
      image: "/pexels-rachel-claire-4577696.jpg"
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
      image: "/pexels-rachel-claire-4825691.jpg"
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
      image: "/pexels-rachel-claire-4825701.jpg"
  },  {
    id: 9,
    name: "Miami, Florida",
    description: "Lorem Ipsum is simply",
    checkIn: "Aug 18",
    checkOut: "-23",
    pricePerNight: 224,
    totalPrice: 1382,
    rating: 4.98,
    reviews: 154,
image: '/pexels-neverlandphotos-5028910.jpg'
},
];




export default function ParadiseHome() {
  return (
    <div className="home-container">
      <div className="header">
        <div className="home-filter">
             <img src='/48564e5fe8898cf62b0bbf42276d6cf3.jpeg' alt="paradise"/>
            <div className='filter'>


            </div>

           <p>switch to hosting</p> 
        </div>
        <div className="home-grid"></div>
      </div>

      <div className="home-body">
        <div className="hotel-data">
          {hotels.map((hotel) => (
            <div key={hotel.id} className="hotel-card">
              <img src={hotel.image} alt={`Image of ${hotel.name}`}  />
              
              <div id='hotel-detail'>
              <h3 style={{color:"#198E78"}} >{hotel.name}</h3>
              <p>{hotel.description}</p>
              <p>Check-in: {hotel.checkIn}{hotel.checkOut}</p>
              <p style={{ color: "black", fontSize: "18px" ,fontWeight:"bold"}}>
  ${hotel.pricePerNight}/night Total: 
  <span style={{ color: '#198E78' }}>${hotel.totalPrice}</span>
</p>


             
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