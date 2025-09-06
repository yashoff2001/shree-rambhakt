import { FaRegClock } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { GrLocation } from "react-icons/gr";

const RestaurantDetailCards = () => {
    
    const cardContent = [
        {
            id : 1,
            icon : <FaRegClock />,
            cardTitle : 'Opening Hours',
            detail : [
                'Monday - Friday: 12:00 PM - 11:00 PM',
                'Weekends: 10:00 AM - 12:00 AM'
            ]
        },
        {
            id : 2,
            icon : <IoCallOutline />,
            cardTitle : 'Reservations',
            detail : [
                '+91 9876 543 210',
                'restaurant@shreerambhakt.com'
            ]
        },
        {
            id : 3,
            icon : <GrLocation />,
            cardTitle : 'Location',
            detail : [
                '123 Culinary Avenue,',
                'City Center, State - 123456'
            ]
        },
    ]

    return (
        <>
            <div className="bg-yellow-100">
                <div className="container mx-auto">
                    <div className="py-15 px-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {cardContent.map(content => (
                                <div key={content.id} className="bg-white rounded-2xl flex h-[100px] items-center ">
                                    <div className="flex p-6 gap-5 items-start">
                                        <p className="text-red-500 text-[20px] pt-2">{content.icon}</p>
                                        <div>
                                            <p className="text-slate-800 text-[18px]">{content.cardTitle}</p>
                                            <ul className="list-disc list-inside">
                                                {content.detail.map((item, index) => (
                                                    <li key={index} className="flex items-center gap-5 text-[14px] text-gray-500 text-wrap">
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

};

export default RestaurantDetailCards;