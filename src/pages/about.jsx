import aboutPageMainSectionImg from "../assets/images/about-page-main-section.svg";
import { FaArrowRight } from "react-icons/fa";
import OurFoundation from "../components/our-foundation";
import OurLeadership from "../components/our-leadership";
import GetInTouchButton from "../components/get-in-touch-button";

function AboutPage() {
  return (
    <>
      <div className="bg-slate-800">
        <div className="container mx-auto">
          <div className="pt-30 pb-20 px-5">
            {/* About Us Main Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="flex flex-col justify-center">
                <p className="px-4 py-2 rounded-full w-[fit-content] bg-gray-200/20 text-white">About Us</p>
                <h2 className="p-2 text-5xl font-semibold text-white mb-6">Our Journey of Excellence</h2>
                <p className="text-gray-300/70 mb-6">Founded in 2005, Shree Rambhakt Group has grown from a small enterprise to a diversified business conglomerate with interests in marbles, hospitality, real estate, and education.</p>
                <p className="text-gray-300/70 mb-6">Our success is built on the foundation of quality, innovation, and customer satisfaction. We strive to exceed expectations in every domain we operate.</p>
                <GetInTouchButton />
              </div>
              <div className="">
                <img src={aboutPageMainSectionImg} alt="About Page Main Section Img"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Our Foundation Section */}
      <OurFoundation />
      {/* Our Leadership Section */}
      <OurLeadership />
    </>
  );
}

export default AboutPage;
