import './Influencer.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";

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
    image: "/pexels-neverlandphotos-5028910.jpg",
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
    image: "/pexels-pixabay-258154.jpg",
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
    image: "/pexels-pixabay-261186.jpg",
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
    image: "/pexels-rachel-claire-4577385.jpg",
  },{
    id: 5,
    name: "Miami, Florida",
    description: "Lorem Ipsum is simply",
    checkIn: "Aug 18",
    checkOut: "-23",
    pricePerNight: 224,
    totalPrice: 1382,
    rating: 4.98,
    reviews: 154,
    image: "/pexels-neverlandphotos-5028910.jpg",
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
    image: "/pexels-pixabay-258154.jpg",
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
    image: "/pexels-pixabay-261186.jpg",
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
    image: "/pexels-rachel-claire-4577385.jpg",
  }
  
];


export default function Influencer() {

  
    
  
    return (
        <div className='influencer-container' >
        <header className="header-influencer">
           <div className='top-header-influencer'>

              <img src="/48564e5fe8898cf62b0bbf42276d6cf3.jpeg" alt="paradise"  />
      
           </div>
          <div className='botton-header-influencer'>
                   <button>Collaboration</button>
                   <input type='text'
                   placeholder='Search for influencers'/>
                   <button>Saved</button>
            </div>
       </header>
           <div className="body-influencer">

          
           </div>
       <div className='influencer-footer'>
          
       </div>
   </div>
    );
  }
  