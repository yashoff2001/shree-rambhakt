import { FaArrowRight } from "react-icons/fa";

import "@fontsource/playfair-display";
import "@fontsource/cedarville-cursive";
import GetInTouchButton from "./get-in-touch-button";

function HeroSection() {

  return (
    <>
      <div className="bg-[url(./assets/images/sample-bg.jpg)] bg-no-repeat bg-size-[cover] lg:h-[100vh]">

        <div className="backdrop-filter backdrop-blur-sm pt-30 pb-20 sm-pt-40 md:py-0 lg:py-0 px-5">

          <div className="container mx-auto lg:w-[50%]">
            <div className="flex flex-col justify-center items-center md:h-[100vh] text-center">
              <p className="p-2 rounded-full w-[fit-content] text-orange-500">Excellence in Multiple Domains</p>
              <h1 className="font-mono text-white text-[3rem] sm:text-[4rem] leading-none mb-6">Building a Legacy of <span className="text-orange-500">Excellence </span> and <span className="text-orange-500">Trust</span></h1>
              <h2 className="text-gray-300 text-2xl mb-6">Shree Rambhakt Group stands for quality and innovation across Marbles, Hospitality, Real Estate, and Education sectors.</h2>
              {/* <a href="/contact"><button className="text-xl bg-slate-700 text-white px-4 py-2 rounded-md hover:scale-110 hover:text-orange-500 backdrop-filter hover:bg-gray-200/10 duration-500 cursor-pointer">Contact Us</button></a> */}
              <GetInTouchButton />
            </div>
          </div>
          
        </div>

      </div>
    </>
  )
}

export default HeroSection;