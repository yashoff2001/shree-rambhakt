import React from "react";

import leader1 from '../assets/images/leaders/leader1.png'
import leader2 from '../assets/images/leaders/leader2.png'
import leader3 from '../assets/images/leaders/leader3.png'
import leader4 from '../assets/images/leaders/leader4.png'


function OurLeadership() {

    const leaderData = [
        {
            id : 1,
            image : leader1,
            name : "Rakesh Kumar",
            position : "Founder & CEO",
        },
        {
            id : 2,
            image : leader2,
            name : "Anita Sharma",
            position : "Chief Operations Officer",
        },
        {   
            id : 3,
            image : leader3,
            name : "Suman Singh",
            position : "Finance Director",
        },
        {   
            id : 4,
            image : leader4,
            name : "Priya Patel",
            position : "Marketing Head",
        },
    ]

  return (
    <div className="bg-gray-100">
        <div className="container mx-auto py-15 px-5">
            {/* About Us Our Leadership Section */}
            <div className="flex flex-col items-center text-center">
                <p className="px-4 py-2 rounded-full w-[fit-content] text-slate-900 bg-gray-300/30 mb-4">Our Leadership</p>
                <h2 className="p-2 text-4xl md:text-5xl font-semibold text-slate-800 mb-4">Meet Our Team</h2>
                <p className='text-gray-400 mb-6 md:w-[50%]'>Our leadership team brings decades of combined experience and expertise from various industries.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {leaderData.map(leaders => (
                    <div key={leaders.id} className="flex flex-col shadow-sm hover:shadow-lg duration-400 rounded-2xl">
                        <img src={leaders.image} className="rounded-t-2xl" />
                        <div className="text-center p-5">
                            <p className="text-slate-800 font-semibold text-[26px]">{leaders.name}</p>
                            <p className="text-gray-400 text-[18px]">{leaders.position}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default OurLeadership;