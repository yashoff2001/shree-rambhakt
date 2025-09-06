import { forwardRef, useState } from 'react';
import { FaRegBuilding } from 'react-icons/fa';
import { TbCircleDotted } from 'react-icons/tb';
import { ImSpoonKnife } from 'react-icons/im';

import CorporateOfficeSpace1 from '../assets/images/realState/corporate-office-space-1.png'
import CorporateOfficeSpace2 from '../assets/images/realState/corporate-office-space-2.png'
import DowntownApartment from '../assets/images/realState/downtown-apartment.png'
import Villa from '../assets/images/realState/villa.png'

const OurProperties = forwardRef((props, ref) => {

    const tabData = [
        { id: 'tab1', label: 'All Properties', icon: <TbCircleDotted /> },
        { id: 'tab2', label: 'Residential', icon: <ImSpoonKnife /> },
        { id: 'tab3', label: 'Commercial', icon: <FaRegBuilding /> },
    ];

    const [activeTab, setActiveTab] = useState('tab1');

    const properties = [
        {
            id : 1,
            name : 'Corporate Office Space',
            images : CorporateOfficeSpace1,
            type : 'commercial',
            description : 'Prime location for retail with high foot traffic.',
        },
        {
            id : 2,
            name : 'Luxury Flats',
            images : DowntownApartment,
            type : 'residential',
            description : '2BHK flat near metro station with modern amenities.',
        },
        {
            id : 3,
            name : 'Corporate Office Space',
            images : CorporateOfficeSpace2,
            type : 'commercial',
            description : 'Fully furnished office space with 50+ workstations.',
        },
        {
            id : 4,
            name : 'Luxury Villa',
            images : Villa,
            type : 'residential',
            description : 'Spacious 4BHK villa with garden and pool.',
        },
        {
            id : 8,
            name : 'Corporate Office Space',
            images : CorporateOfficeSpace1,
            type : 'commercial',
            description : 'Prime location for retail with high foot traffic.',
        },
        {
            id : 6,
            name : 'Luxury Flats',
            images : DowntownApartment,
            type : 'residential',
            description : '2BHK flat near metro station with modern amenities.',
        },
        {
            id : 7,
            name : 'Corporate Office Space',
            images : CorporateOfficeSpace2,
            type : 'commercial',
            description : 'Fully furnished office space with 50+ workstations.',
        },
        {
            id : 5,
            name : 'Luxury Villa',
            images : Villa,
            type : 'residential',
            description : 'Spacious 4BHK villa with garden and pool.',
        },
    ];

    const filteredProperties = properties.filter((property) => {
        if (activeTab === 'tab1') return true;
        if (activeTab === 'tab2') return property.type === 'residential';
        if (activeTab === 'tab3') return property.type === 'commercial';
        return false;
    });

    return (

        <div className="container mx-auto" ref={ref}>
            <div className="py-10 lg:py-20 px-5">

                {/* Restaurant Main Section */}
                <div className="flex flex-col items-center text-center">
                    <p className="px-4 py-2 rounded-full w-[fit-content] bg-gray-200/60 text-slate-700">Our Properties</p>
                    <h2 className="p-2 text-5xl font-semibold  mb-6">Featured Real Estate Listings</h2>
                    <p className="text-gray-400 mb-6">Browse through our selection of premium properties designed to meet diverse needs and preferences.</p>
                </div>
                
                <div className="flex flex-col gap-5">
                
                    {/* Tabs Section */}
                    <div className="flex sm:justify-center space-x-5 overflow-x-auto w-auto text-nowrap text-white px-4">
                        {tabData.map(({ id, label }) => {
                            const isActive = activeTab === id;
                            return (
                                <button key={id} onClick={() => setActiveTab(id)} className={`py-2 px-4  font-medium hover:bg-gray-500 hover:text-white hover:cursor-pointer rounded-full ${ isActive ? `bg-slate-700` : 'bg-gray-400' }`}>{label}</button>
                            );
                        })}
                    </div>
    
                    {/* Properties Display */}
                    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {filteredProperties.map((property) => (
                            <div key={property.id} className="border border-gray-200 rounded-2xl shadow-lg group transition-all duration-300 hover:shadow-xl">
                                <div className="overflow-hidden rounded-t-2xl">
                                    <img src={property.images} alt="Property Images" className='object-cover transition-transform duration-500 group-hover:scale-110' />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold mb-2 text-slate-800">{property.name}</h3>
                                    <p className="text-gray-500">{property.description}</p>
                                    <p className="mt-3 text-sm uppercase text-slate-400">{property.type}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                </div>

            </div>
        </div>
    )

});

export default OurProperties;