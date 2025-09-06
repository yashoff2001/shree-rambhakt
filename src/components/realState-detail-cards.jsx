import { LiaMapSolid } from "react-icons/lia";
import { FaRegBuilding } from "react-icons/fa";
import { LuHouse } from "react-icons/lu";

const RealStateDetailCards = () => {
    
    const cardContent = [
        {
            id : 1,
            icon : <LiaMapSolid />,
            cardTitle : 'Prime Locations',
            detail : 'All our properties are situated in strategic locations with excellent connectivity and amenities.'
        },
        {
            id : 2,
            icon : <FaRegBuilding />,
            cardTitle : 'Quality Construction',
            detail : 'Built with the finest materials and attention to detail, ensuring durability and elegance.'
        },
        {
            id : 3,
            icon : <LuHouse />,
            cardTitle : 'Modern Designs',
            detail : 'Contemporary architectural designs that blend aesthetics with functionality.'
        },
    ]

    return (
        <>
            <div className="bg-slate-200">
                <div className="container mx-auto">
                    <div className="py-15 px-5">
                        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-5">

                            {cardContent.map(content => (
                                <div key={content.id} className="bg-white rounded-2xl flex flex-col items-center text-center p-6 shadow-md">
                                    <div className="text-slate-700 bg-slate-300 rounded-full text-2xl p-5">{content.icon}</div>
                                    <div className="flex gap-5 items-start">
                                        <div>
                                            <p className="text-slate-800 text-[22px]">{content.cardTitle}</p>

                                            <p className="text-slate-500">{content.detail}</p>
                                            
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

export default RealStateDetailCards;