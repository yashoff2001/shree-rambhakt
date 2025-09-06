import { useState, useEffect, useRef } from "react";

import restaurantBgDesktop from '../assets/images/restaurant/restaurant-main-bg-desktop.png'
import restaurantBgMobile from '../assets/images/restaurant/restaurant-main-bg-mobile.png'

import RestaurantDetailCards from "../components/restaurant-detail-cards";
import Menu from "../components/menu";

import ReservationFormImage from '../assets/images/restaurant/reservation-form-image.png'
import RestaurantReservationForm from "../components/restaurant-reservation-form";

function RestaurantPage() {

  const reservationRef = useRef(null);
  const menuRef = useRef(null);

  const scrollToReservation = () => {
    reservationRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const scrollToMenu = () => {
    menuRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const bgImage = windowWidth < 768 ? restaurantBgMobile : restaurantBgDesktop;

  return (
    <>
    
      <div className="md:h-auto" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container mx-auto">
          <div className="pt-30 pb-20 px-5">
            {/* Restaurant Main Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:py-10">
              <div className="flex flex-col justify-center">
                <p className="px-4 py-2 rounded-full w-[fit-content] bg-gray-200/20 text-white">Fine Dining Experience</p>
                <h2 className="p-2 text-3xl sm:text-5xl font-semibold text-white mb-6">A Culinary Journey to Remember</h2>
                <p className="text-gray-300 mb-6 text-[22px]">Experience the finest flavors and ambiance at our premium restaurant. Culinary excellence in every bite.</p>
                <div className="flex gap-5">
                  <button onClick={scrollToMenu} className="flex items-center text-[18px] text-white px-4 py-2 rounded-md hover:bg-yellow-600 duration-500 cursor-pointer bg-yellow-500 w-[fit-content]">View Menu</button>
                  <button onClick={scrollToReservation} className="flex items-center text-[18px] text-white px-4 py-2 rounded-md bg-red-500 cursor-pointer w-[fit-content]">Make Reservation</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Booking Section */}
      <RestaurantDetailCards />
      
      {/* Menu Section */}
      <Menu ref={menuRef} />
      
      {/* Reservation Form Section */}
      <div className="bg-orange-100" ref={reservationRef}>
        <div className="container mx-auto">
          <div className="py-10 lg:py-20 px-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

              <img src={ReservationFormImage} alt="Reservation Form Image" />

              {/* Form */}
              <RestaurantReservationForm />
              
            </div>
            
          </div>

        </div>
      </div>

    </>
  );
}

export default RestaurantPage;
