import { LuTarget } from "react-icons/lu";
import { PiMedalLight } from "react-icons/pi";
import { BsPeople } from "react-icons/bs";
import { TiTick } from "react-icons/ti";

function OurFoundation() {

    const cardsData = [
        {
            id : 1,
            titleImage : <LuTarget />,
            title : "Our Mission",
            discription : "To deliver exceptional quality and service across all our business segments, creating value for our customers, employees, and society at large.",
            listItems : [
                "Customer-centric approach",
                "Sustainable business practices",
                "Community development",
            ]
        },
        {
            id : 2,
            titleImage : <PiMedalLight />,
            title : "Our Vision",
            discription : "To be the most trusted and respected business group in our domains, recognized for excellence, innovation, and positive social impact.",
            listItems : [
                "Global recognition",
                "Industry leadership",
                "Technological advancement",
            ]
        },
        {   
            id : 3,
            titleImage : <BsPeople />,
            title : "Our Values",
            discription : "Our core values form the foundation of everything we do, guiding our decisions and actions across all business segments.",
            listItems : [
                "Integrity & Transparency",
                "Quality & Excellence",
                "Innovation & Adaptability",
                "Social Responsibility",
            ]
        },
    ]

  return (
    <div className="container mx-auto">
        <div className="py-20 px-5">
            {/* About Us Our Foundation Section */}
            <div className="flex flex-col items-center text-center">
                <p className="px-4 py-2 rounded-full w-[fit-content] bg-gray-200 mb-4">Our Foundation</p>
                <h2 className="p-2 text-4xl md:text-5xl font-semibold text-slate-800 mb-3">Mission, Vision & Values</h2>
                <p className='text-gray-400 mb-6'>The core principles that drive our organization towards excellence and innovation.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {cardsData.map(cards => (
                    <div key={cards.id} className="flex flex-col gap-5 shadow-sm rounded p-7 hover:scale-105 hover:shadow-lg duration-500">
                        <div className="flex gap-5 items-center">
                            <p className="rounded-full bg-gray-200 text-4xl w-[fit-content] p-3">{cards.titleImage}</p>
                            <p className="text-slate-800 font-semibold text-[26px]">{cards.title}</p>
                        </div>
                        <p className="text-gray-400">{cards.discription}</p>
                        <ul className="list-disc list-inside">
                            {cards.listItems.map((item, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <TiTick className="text-orange-500" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default OurFoundation;