import { GrLocation } from "react-icons/gr";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";

const ContactDetails = () => {
    
    const locationDetails = [
        {
            id : 1,
            title : "Headquartcrs",
            address : "123 Business Avenue, City Center, State - 123456",
            contactNumber : "+91 9876 543 210",
            mail : "info@shreerambhakt.com",
            timing : "Monday - Friday: 9:00 AM - 6:00 PM",
        },
        {
            id : 2,
            title : "Marble & Stones",
            address : "456 Stone Street, Industrial Area, State - 123456",
            contactNumber : "+91 9876 543 211",
            mail : "marbles@shreerambhakt.com",
            timing : "Monday - Saturday: 10:00 AM - 7:00 PM"
        },
        {
            id : 3,
            title : "Restaurant",
            address : "456 Stone Street, Industrial Area, State - 123456",
            contactNumber : "+91 9876 543 211",
            mail : "marbles@shreerambhakt.com",
            timing : "Monday - Saturday: 10:00 AM - 7:00 PM"
        },
        {
            id : 4,
            title : "Real State",
            address : "456 Stone Street, Industrial Area, State - 123456",
            contactNumber : "+91 9876 543 211",
            mail : "marbles@shreerambhakt.com",
            timing : "Monday - Saturday: 10:00 AM - 7:00 PM"
        },
        {
            id : 5,
            title : "NGO",
            address : "456 Stone Street, Industrial Area, State - 123456",
            contactNumber : "+91 9876 543 211",
            mail : "marbles@shreerambhakt.com",
            timing : "Monday - Saturday: 10:00 AM - 7:00 PM"
        },
    ]

    return (
        <>
            <div className=" ">
                <p className="text-2xl mb-5 text-slate-800">Our Location</p>
                    
                <div className="h-[700px] overflow-scroll rounded-2xl px-3 py-5">
                    {locationDetails.map(location => (
                        <div className="flex flex-col gap-3 p-5 shadow-lg rounded-2xl text-slate-700" key={location.id}>
                            <p className="text-2xl text-slate-800">{location.title}</p>
                            <div className="flex items-center gap-3">
                                <GrLocation />
                                <p className="">{location.address}</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <IoCallOutline />
                                <p className="">{location.contactNumber}</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <MdOutlineEmail />
                                <p className="">{location.mail}</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaRegClock />
                                <p className="">{location.timing}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </>
    )
};

export default ContactDetails;