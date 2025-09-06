import { FaArrowRight } from "react-icons/fa";

import marblesBgDesktop from '../assets/images/ngo/bg1.svg'
import NgoOurMission from "../components/ngo-our-mission";
import NgoOurProgram from "../components/ngo-our-program";
import NgoImpactStories from "../components/ngo-impact-stories";
import Donate from "../components/ngo-donate";
import Volunteer from "../components/ngo-volunteer";

const NGO = () => {
    return(
        <>
            <div className="md:h-auto" style={{ backgroundImage: `url(${marblesBgDesktop})`, backgroundSize: 'cover ', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                <div className="bg-green-500/40">
                    <div className="container mx-auto">
                        <div className="pt-30 pb-20 px-5">
                            {/* About Us Main Section */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:py-13">
                                <div className="flex flex-col justify-center">
                                    <p className="px-4 py-2 rounded-full w-[fit-content] bg-green-100/70 text-green-700">Education For All</p>
                                    <h2 className="text-3xl sm:text-5xl font-semibold text-white mb-4">Empowering Lives Through Education</h2>
                                    <p className="text-white mb-6 text-[22px]">Our NGO is dedicated to providing quality education to underprivileged children, creating pathways to a brighter future.</p>
                                    <div className="flex gap-5">
                                        <button className="flex items-center text-[18px] gap-3 text-white px-4 py-2 rounded-md hover:scale-105 hover:text-green-700 hover:bg-green-300 duration-500 cursor-pointer bg-green-500 w-[fit-content]">Donate Now <FaArrowRight /></button>
                                        <button className="flex items-center text-[18px] gap-3 text-white px-4 py-2 rounded-md hover:scale-105 hover:text-green-700 hover:bg-green-300 duration-500 cursor-pointer bg-green-500 w-[fit-content]">Volunteer With Us</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Mission */}
            <NgoOurMission />

            {/* Our Programs */}
            <NgoOurProgram />

            {/* Impact Stories */}
            <NgoImpactStories />

            {/*  */}
            <div className="bg-green-700/90 text-white">
                <div className="container mx-auto">
                    <div className="py-20 px-5">
                        
                        <div className="flex flex-col lg:flex-row gap-10">
                            {/* Donate */}
                            <Donate />

                            {/* Volunteer */}
                            <Volunteer />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
};

export default NGO;