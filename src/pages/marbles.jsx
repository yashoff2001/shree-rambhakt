import { useRef } from "react";

import { FaArrowRight } from "react-icons/fa6";

import OurMarbleCollection from "../components/our-marble-collection";
import MarbleContactForm from "../components/marble-contact-form";

import marblesBgDesktop from '../assets/images/marbles/marbles-main-bg.png'

function MarblesPage() {

  const requestQuoteRef = useRef(null);

  const scrollToRequestQuote = () => {
    requestQuoteRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="md:h-auto" style={{ backgroundImage: `url(${marblesBgDesktop})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container mx-auto">
          <div className="pt-30 pb-20 px-5">
            {/* About Us Main Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:py-13">
              <div className="flex flex-col justify-center">
                <p className="px-4 py-2 rounded-full w-[fit-content] bg-gray-200/20 text-white">Premium Quality Marbles</p>
                <h2 className="text-3xl sm:text-5xl font-semibold text-white mb-4">Exquisite Marble & Stone Collection</h2>
                <p className="text-white mb-6 text-[22px]">Discover our premium collection of marble and natural stones sourced from the world's finest quarries.</p>
                <button onClick={scrollToRequestQuote} className="flex items-center text-[18px] gap-3 text-white px-4 py-2 rounded-md hover:scale-105 hover:text-orange-500 duration-500 cursor-pointer bg-yellow-500 w-[fit-content]">Request a Quote <FaArrowRight /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Our Collection Section */}
      <OurMarbleCollection />

      {/* Get Contacted */}
      <div className="bg-gray-300/50"ref={requestQuoteRef}>
        <div className="container mx-auto py-20 px-5">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-30">
            
            <div className="flex flex-col justify-center">
              <p className="px-4 py-2 rounded-full w-[fit-content] bg-yellow-200/30 text-yellow-500 mb-4">Get in Touch</p>
              <h2 className="p-2 text-4xl md:text-5xl font-semibold text-slate-800 mb-3">Request a Quote</h2>
              <p className='text-gray-400 mb-6'>Interested in our marble products? Fill out the form below and our team will get back to you with pricing and availability information.</p>
              <div className="flex gap-5 items-center bg-white shadow-md rounded-xl w-[full] p-7">
                <div className="bg-orange-200/30 rounded-full p-5">
                  <FaArrowRight className="text-orange-500" />
                </div>
                <div className="">
                  <p>Fast Response</p>
                  <p className="text-gray-400">We respond to all inquiries within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Marble Contact Form */}
            <MarbleContactForm />

          </div>
        </div>
      </div>
    </>
  );
}

export default MarblesPage;
