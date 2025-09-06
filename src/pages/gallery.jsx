import { useState } from 'react';

import { FaRegBuilding } from 'react-icons/fa';
import { TbCircleDotted } from 'react-icons/tb';
import { ImSpoonKnife } from 'react-icons/im';

// Real State
import CorporateOfficeSpace1 from '../assets/images/realState/corporate-office-space-1.png'
import CorporateOfficeSpace2 from '../assets/images/realState/corporate-office-space-2.png'
import DowntownApartment from '../assets/images/realState/downtown-apartment.png'
import Villa from '../assets/images/realState/villa.png'

const Gallery = () => {

    const tabData = [
        { id: 'tab1', label: 'All', icon: <TbCircleDotted /> },
        { id: 'tab2', label: 'Marbles', icon: <ImSpoonKnife /> },
        { id: 'tab3', label: 'Restaurant', icon: <FaRegBuilding /> },
        { id: 'tab4', label: 'Real Estate', icon: <FaRegBuilding /> },
        { id: 'tab5', label: 'NGO', icon: <FaRegBuilding /> },
    ];

    const [activeTab, setActiveTab] = useState('tab1');
    
    const properties = [
        // Real State
        {
            id : 1,
            name : 'Corporate Office Space',
            images : CorporateOfficeSpace1,
            type : 'Real Estate',
            description : 'Prime location for retail with high foot traffic.',
        },
        {
            id : 2,
            name : 'Luxury Flats',
            images : DowntownApartment,
            type : 'Real Estate',
            description : '2BHK flat near metro station with modern amenities.',
        },
        {
            id : 3,
            name : 'Corporate Office Space',
            images : CorporateOfficeSpace2,
            type : 'Real Estate',
            description : 'Fully furnished office space with 50+ workstations.',
        },
        {
            id : 4,
            name : 'Luxury Villa',
            images : Villa,
            type : 'Real Estate',
            description : 'Spacious 4BHK villa with garden and pool.',
        },
    ];
    
    const filteredProperties = properties.filter((property) => {
        if (activeTab === 'tab1') return true;
        if (activeTab === 'tab2') return property.type === 'Marbles';
        if (activeTab === 'tab3') return property.type === 'Restaurant';
        if (activeTab === 'tab4') return property.type === 'Real Estate';
        if (activeTab === 'tab5') return property.type === 'NGO';
        return false;
    });

    return (
        <>
            <div className="bg-slate-800">
                <div className="container mx-auto">
                    <div className="pt-40 pb-15 px-5">
                        <div className="flex flex-col text-center items-center">
                            <h2 className="p-2 text-5xl font-semibold text-white mb-6">Our Gallery</h2>
                            <p className="text-gray-300/70 mb-6">Explore visual highlights from our various business segments and initiatives.</p>
                        </div>

                        {/* Tabs Section */}
                        <div className="flex sm:justify-center space-x-5 overflow-x-auto w-auto text-nowrap text-white px-4">
                            {tabData.map(({ id, label }) => {
                                const isActive = activeTab === id;
                                return (
                                    <button key={id} onClick={() => setActiveTab(id)} className={`py-2 px-4 font-medium hover:bg-opacity-80 hover:text-white hover:cursor-pointer rounded-full ${ isActive ? label === "Marbles" ? "bg-yellow-500" : label === "Restaurant" ? "bg-red-500" : label === "Real Estate" ? "bg-slate-700" : label === "NGO" ? "bg-green-600" : "bg-slate-700" : "bg-gray-500" }`} >{label}</button>
                                );
                            })}
                        </div>

                    </div>
                </div>
            </div>

            <div className="container mx-auto py-20 px-5">

                {/* Properties Display */}
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredProperties.map((property) => (
                        <div key={property.id} className="relative group transition-all duration-300 hover:shadow-xl">
                            <div className="overflow-hidden rounded-2xl">
                                <img src={property.images} alt="Property Images" className='object-cover transition-transform duration-500 group-hover:scale-110' />
                            </div>
                            
                            <p className={`absolute top-2 left-4 px-4 p-2 rounded-full text-[12px] w-[fit-content] text-white ${ property.type === 'Marbles' ? 'bg-yellow-500/50' : property.type === 'Restaurant' ? 'bg-red-500/50' : property.type === 'Real Estate' ? 'bg-slate-800/50' : property.type === 'NGO' ? 'bg-green-500/50' : 'bg-gray-400' }`}>
                                {property.type}
                            </p>

                            {/* Overlay */}
                            <div className={`absolute rounded-2xl inset-0 ${ property.type === 'Marbles' ? 'bg-yellow-500/20' : property.type === 'Restaurant' ? 'bg-red-500/20' : property.type === 'Real Estate' ? 'bg-slate-800/20' : property.type === 'NGO' ? 'bg-green-500/20' : 'bg-gray-400' } bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 text-white`}>
                                <h3 className="font-semibold">{property.name}</h3>
                                <p className="text-[12px]">{property.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                
            </div>

        </>
    );
};

export default Gallery;