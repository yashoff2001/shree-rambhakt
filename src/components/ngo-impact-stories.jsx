import { IoBookOutline } from "react-icons/io5";
import { BsPeople } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import { HiLibrary } from "react-icons/hi";

import CorporateOfficeSpace1 from '../assets/images/ngo/journey.jpg'
import DowntownApartment from '../assets/images/ngo/schoolTransformation.jpg'
import CorporateOfficeSpace2 from '../assets/images/ngo/learning-program.jpg'

function NgoImpactStories() {
    
    const properties = [
        {
            id : 1,
            name : `Priya's Journey`,
            images : CorporateOfficeSpace1,
            description : `From a small village to a software engineer, Priya's journey showcases the power of education.`,
        },
        {
            id : 2,
            name : 'Rural School Transformation',
            images : DowntownApartment,
            description : 'How a dilapidated rural school was transformed into a digital learning center.',
        },
        {
            id : 3,
            name : 'Community Learning Program',
            images : CorporateOfficeSpace2,
            description : 'A community-based initiative that has improved literacy rates in five villages.',
        },
        {
            id : 4,
            name : `Priya's Journey`,
            images : CorporateOfficeSpace1,
            description : `From a small village to a software engineer, Priya's journey showcases the power of education.`,
        },
        {
            id : 5,
            name : 'Rural School Transformation',
            images : DowntownApartment,
            description : 'How a dilapidated rural school was transformed into a digital learning center.',
        },
        {
            id : 6,
            name : 'Community Learning Program',
            images : CorporateOfficeSpace2,
            description : 'A community-based initiative that has improved literacy rates in five villages.',
        },
    ];

    return (
        <div className="container mx-auto">
            <div className="py-20 px-5">
                {/* About Us Our Foundation Section */}
                <div className="flex flex-col items-center text-center">
                    <p className="px-4 py-2 rounded-full w-[fit-content] bg-green-100/70 text-green-700">Impact Stories</p>
                    <h2 className="text-3xl text-slate-800 sm:text-5xl font-semibold mb-4">Success Stories</h2>
                    <p className="mb-6 text-[18px] text-gray-500">These stories highlight the transformative power of education and the impact of our initiatives on individuals and communities.</p>
                </div>

                <div className="flex flex-col gap-5">
        
                        {/* Properties Display */}
                        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {properties.map((property) => (
                                <div key={property.id} className="relative border border-gray-200 rounded-2xl shadow-lg group transition-all duration-300 hover:shadow-xl">
                                    <div className="overflow-hidden rounded-t-2xl">
                                        <img src={property.images} alt="Property Images" className='object-cover transition-transform duration-500 group-hover:scale-110' />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold mb-2 text-slate-800">{property.name}</h3>
                                        <p className="text-gray-500 mb-4 truncate">{property.description}</p>
                                        <button className="rounded-md border border-green-500 text-green-500 hover:text-white hover:bg-green-500 duration-400 py-1 px-4">Read Full Story</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                    </div>
                
            </div>
        </div>
    )
}

export default NgoImpactStories;