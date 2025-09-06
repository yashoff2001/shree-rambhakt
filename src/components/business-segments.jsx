import { useState } from 'react';
import { FaArrowRight, FaRegBuilding } from 'react-icons/fa';
import { TbCircleDotted } from 'react-icons/tb';
import { ImSpoonKnife } from 'react-icons/im';
import { FaPeopleGroup } from 'react-icons/fa6';

import marbleStones from '../assets/images/marbles.png';
import restaurant from '../assets/images/restaurant.png';
import realState from '../assets/images/real-state.png';
import ngo from '../assets/images/ngo.png';

const tabData = [
    {
        id : 'tab1',
        label : 'Marbles & Stones',
        icon : <TbCircleDotted />, 
        textColor : 'text-yellow-500',
        image : marbleStones,
        description : 'Premium quality marble, granite and stones sourced from the finest quarries around the world. We offer a wide variety of colors, textures, and finishes.',
        buttonColor : 'bg-yellow-500 hover:bg-yellow-600',
        link : '/marbles',
    },
    {
        id : 'tab2',
        label : 'Restaurant',
        icon : <ImSpoonKnife />,
        textColor : 'text-red-500',
        image : restaurant,
        description : 'Experience the finest culinary delights with our premium dining experience, offering a fusion of traditional and contemporary cuisines in an elegant ambiance.',
        buttonColor : 'bg-red-500 hover:bg-red-600',
        link : '/restaurant',
    },
    {
        id : 'tab3',
        label : 'Real Estate',
        icon : <FaRegBuilding />,
        textColor : 'text-slate-800',
        image : realState,
        description : 'Premium residential and commercial properties developed with cutting-edge design, quality construction, and strategic locations for maximum value and comfort.',
        buttonColor : 'bg-slate-700 hover:bg-slate-800',
        link : '/realState',
    },
    {
        id : 'tab4',
        label : 'NGO (Education)',
        icon : <FaPeopleGroup />,
        textColor : 'text-green-500',
        image : ngo,
        description : 'Our non-profit initiative focuses on providing quality education to underprivileged children, with a mission to create a positive social impact.',
        buttonColor : 'bg-green-600 hover:bg-green-700',
        link : '/ngo',
    },
];

function BusinessSegments() {
    const [activeTab, setActiveTab] = useState('tab1');
    const currentTab = tabData.find((tab) => tab.id === activeTab);

    return (
        <div className="py-20 px-5">

            <div className="flex flex-col gap-2 items-center text-center mb-6">
                <p className="p-2 text-[14px] rounded-full w-fit text-orange-500 bg-orange-300/30">Our Business Segments</p>
                <h2 className="p-2 text-4xl font-semibold text-slate-700">Excellence Across Multiple Domains</h2>
                <p className="text-slate-400 lg:w-2/5">Shree Rambhakt Group has established itself as a leader in various sectors, each with its own unique approach to quality and service.</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-5">

                {/* Tabs Section Mobile */}
                <div className="flex lg:hidden border border-gray-300 rounded-xl overflow-scroll w-[100%]">
                    <div className="flex">
                        {tabData.map(({ id, label, icon, textColor, buttonColor }) => {
                            const isActive = activeTab === id;
                            return (
                                <button key={id} onClick={() => setActiveTab(id)} className={`flex items-center justify-center gap-3 text-[18px] py-2 px-4 text-sm font-medium  hover:bg-gray-200 hover:cursor-pointer w-[220px] ${ isActive ? `${buttonColor} text-white` : 'text-gray-500' } `}>
                                    <span className={isActive ? 'text-white' : textColor}>{icon}</span> <span className={isActive ? 'text-white' : textColor}>{label}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>
                
                {/* Tabs Section Desktop */}
                <div className="hidden lg:flex flex-col border border-gray-300 rounded-xl h-[300px] w-full lg:w-[300px]">
                    {tabData.map(({ id, label, icon, textColor, buttonColor }) => {
                        const isActive = activeTab === id;
                        return (
                            <button key={id} onClick={() => setActiveTab(id)} className={`flex items-center justify-center gap-3 text-[18px] h-[25%] py-2 px-4 text-sm font-medium  hover:bg-gray-200 hover:cursor-pointer ${ isActive ? `${buttonColor} text-white` : 'text-gray-500' } ${id === 'tab1' ? 'rounded-t-md' : ''} ${ id === 'tab4' ? 'rounded-b-md' : '' }`}>
                                <span className={isActive ? 'text-white' : textColor}>{icon}</span> <span className={isActive ? 'text-white' : textColor}>{label}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Content Section */}
                <div className="lg:w-[70%] border border-gray-200 shadow-xl rounded-2xl">
                    <img src={currentTab.image} alt={currentTab.label} className="w-full rounded-t-2xl sm:h-[400px]" />
                    <div className="p-4">
                        <p className="text-slate-700 mb-3 text-3xl italic font-semibold flex items-center gap-3">{currentTab.icon} {currentTab.label}</p>
                        <p className="text-slate-500 mb-5">{currentTab.description}</p>
                        <a href={currentTab.link || '#'}>
                            <button className={`flex items-center gap-3 font-bold text-[17px] ${currentTab.buttonColor} text-white rounded-xl px-4 py-3`}>Learn More <FaArrowRight /></button>
                        </a>
                    </div>
                </div>

            </div>
            
        </div>
    );
}

export default BusinessSegments;
