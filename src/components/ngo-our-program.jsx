import { IoBookOutline } from "react-icons/io5";
import { BsPeople } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import { HiLibrary } from "react-icons/hi";

function NgoOurProgram() {

    const cardsData = [
        {
            id : 1,
            titleImage : <IoBookOutline />,
            title : "Digital Classrooms",
            discription : "Equipping rural schools with computers, internet, and digital learning tools.",
        },
        {
            id : 2,
            titleImage : <BsPeople />,
            title : "Scholarship Program",
            discription : "Financial assistance for talented students from underprivileged backgrounds.",
        },
        {   
            id : 3,
            titleImage : <FaRegHeart />,
            title : "Teacher Training",
            discription : "Workshops and training sessions to enhance teaching methodologies.",
        },
        {   
            id : 4,
            titleImage : <HiLibrary />,
            title : "Community Libraries",
            discription : "Setting up libraries in underserved communities to promote reading habits.",
        },
    ]

  return (
    <div className="container mx-auto">
        <div className="py-20 px-5">
            {/* About Us Our Foundation Section */}
            <div className="flex flex-col items-center text-center">
                <p className="px-4 py-2 rounded-full w-[fit-content] bg-green-100/70 text-green-700">Our Programs</p>
                <h2 className="text-3xl text-slate-800 sm:text-5xl font-semibold mb-4">Educational Initiatives</h2>
                <p className="mb-6 text-[18px] text-gray-500">We run several innovative programs designed to improve the quality of education and enhance learning outcomes.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {cardsData.map(cards => (
                    <div key={cards.id} className="flex flex-col gap-5 shadow-md rounded p-7 hover:scale-105 hover:shadow-lg duration-500">
                        <div className="flex gap-5 items-center">
                            <p className="rounded-full bg-green-100 text-green-700 text-2xl w-[fit-content] p-3">{cards.titleImage}</p>
                            <p className="text-slate-800 font-semibold text-[18px]">{cards.title}</p>
                        </div>
                        <p className="text-gray-400">{cards.discription}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default NgoOurProgram;