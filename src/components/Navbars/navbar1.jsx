import React, { useState } from 'react';
import '../Navbars/navbars.css';
import Navbar from '../Navbars/navbar';

function Navbar1() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://img.freepik.com/premium-photo/burger-with-flying-elements_985276-852.jpg?size=626&ext=jpg&ga=GA1.1.1446448873.1717242906&semt=ais_user",
    "https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?size=626&ext=jpg&ga=GA1.1.1446448873.1717242906&semt=sph",
    "https://img.freepik.com/free-photo/plate-food-with-side-sauce_188544-8402.jpg?size=626&ext=jpg&ga=GA1.1.1446448873.1717242906&semt=sph",
    "https://img.freepik.com/free-photo/asian-rice-seafood-dish-top-view_23-2148249221.jpg?size=626&ext=jpg&ga=GA1.1.1446448873.1717242906&semt=ais_user"
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full h-full overflow-hidden  text-black">
      <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div className="w-full flex-shrink-0 relative" key={index}>
            <img src={image} alt={image} className="w-full h-screen object-cover" />

            <div className="content__center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 space-y-5 lg:space-y-8 mt-10">
              <h1 className='content__center--form font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500'>Hello New Friend</h1>
              <h1 className='content__center--form font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500'>Welcome To Our Tasty Restaurent</h1>
  

            </div>
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        onClick={handlePrev}
      >
        &#8592;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        onClick={handleNext}
      >
        &#8594;
      </button>

      <div className=' absolute w-full top-0  lg:w-screen 'style={{ zIndex: 1000 }}>
        <div className='fixed top-0 w-full'>
          <Navbar ></Navbar>

        </div>
      </div>
    </div>
  );
}

export default Navbar1;
