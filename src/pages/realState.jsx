import { useRef } from "react";

import { FaArrowRight } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";

import realStateBgDesktop from '../assets/images/realState/realState-main-bg-desktop.svg'
import RealStateDetailCards from "../components/realState-detail-cards";
import OurProperties from "../components/our-properties";
import RealStateContactForm from "../components/realState-contact-form";

const RealState = () => {

    const BrowsePropertiesRef = useRef(null);

    const scrollToBrowseProperties = () => {
        BrowsePropertiesRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const ContactRef = useRef(null);

    const scrollToContact = () => {
        ContactRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <div className="bg-slate-900">
                <div className="md:h-auto" style={{ backgroundImage: `url(${realStateBgDesktop})`, backgroundSize: 'cover',backgroundRepeat: 'no-repeat' , backgroundPosition: 'center'}}>
                    <div className="container mx-auto">
                        <div className="pt-30 pb-20 px-5">
                            {/* Restaurant Main Section */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:py-10">
                                <div className="flex flex-col justify-center">
                                    <p className="px-4 py-2 rounded-full w-[fit-content] bg-gray-200/20 text-white">Premium Properties</p>
                                    <h2 className="p-2 text-3xl sm:text-5xl font-semibold text-white mb-6">Discover Your Dream Property</h2>
                                    <p className="text-gray-200 mb-6 text-[22px]">Explore our exquisite collection of residential and commercial properties in prime locations across India.</p>
                                    <div className="flex flex-col sm:flex-row gap-5">
                                        <button onClick={scrollToBrowseProperties} className="flex items-center gap-4 text-[18px] text-white px-4 py-2 rounded-md hover:bg-slate-700 duration-500 cursor-pointer bg-slate-800 w-[fit-content]">Browse Properties <FaArrowRight /></button>
                                        <button onClick={scrollToContact} className="flex items-center text-[18px] hover:bg-slate-700 text-white px-4 py-2 rounded-md border border-slate-700 cursor-pointer w-[fit-content]">Contant Us</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Real State Card Section */}
            <RealStateDetailCards />

            {/* Our Properties Section */}
            <OurProperties ref={BrowsePropertiesRef} />

            {/* Get Contacted */}
            <div className="bg-gray-200/70" ref={ContactRef} >
                <div className="container mx-auto py-20 px-5">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-30">
                        
                        <div className="flex flex-col justify-center">
                            <p className="px-4 py-2 rounded-full w-[fit-content] bg-gray-300/50 text-slate-700 mb-4">Get in Touch</p>
                            <h2 className="p-2 text-4xl md:text-5xl font-semibold text-slate-800 mb-3">Interested in Our Properties?</h2>
                            <p className='text-gray-500 mb-6'>Fill out the form and our real estate experts will get in touch with you to discuss your requirements and arrange property viewings.</p>
                            <div className="flex gap-5 items-center bg-white shadow-md rounded-xl w-[full] p-7">
                                <div className="bg-gray-300/50 rounded-full p-5">
                                    <IoCallOutline className="text-slate-700 text-2xl" />
                                </div>
                                <div className="">
                                    <p>Call Us Directly</p>
                                    <p className="text-gray-500">+91 9876 543 210</p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <RealStateContactForm />
                        
                    </div>
                </div>
            </div>

        </>
    )
};

export default RealState;