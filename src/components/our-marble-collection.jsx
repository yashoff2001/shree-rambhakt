import { React, useState } from "react";

import { FaArrowRight } from "react-icons/fa";

import IndianGreenMarble1 from '../assets/images/marbles/indian-green-marble-1.png'
import IndianGreenMarble2 from '../assets/images/marbles/indian-green-marble-2.png'
import IndianGreenMarble3 from '../assets/images/marbles/indian-green-marble-3.png'
import IndianGreenMarble4 from '../assets/images/marbles/indian-green-marble-4.png'

import ItalianCalacatta1 from '../assets/images/marbles/italian-calacatta-1.png'
import ItalianCalacatta2 from '../assets/images/marbles/italian-calacatta-2.png'
import ItalianCalacatta3 from '../assets/images/marbles/italian-calacatta-3.png'
import ItalianCalacatta4 from '../assets/images/marbles/italian-calacatta-4.png'

import SpanishBlackMarquina1 from '../assets/images/marbles/spanish-black-marquina-1.png'
import SpanishBlackMarquina2 from '../assets/images/marbles/spanish-black-marquina-2.png'
import SpanishBlackMarquina3 from '../assets/images/marbles/spanish-black-marquina-3.png'
import SpanishBlackMarquina4 from '../assets/images/marbles/spanish-black-marquina-4.png'
import SpanishBlackMarquina5 from '../assets/images/marbles/spanish-black-marquina-5.png'

import MarbleModal from "./marble-collection-modal";

function OurMarbleCollection() {

    const [selectedMarble, setSelectedMarble] = useState(null);

    const marblesData = [
        {
            id : 1,
            titleImage : IndianGreenMarble1,
            title : "Indian Green Marble",
            discription : "Luxurious white marble with elegant grey veining",
            images: [
                IndianGreenMarble1,
                IndianGreenMarble2,
                IndianGreenMarble3,
                IndianGreenMarble4,
            ],
        },
        {
            id : 2,
            titleImage : ItalianCalacatta1,
            title : "Italian Calacatta",
            discription : "Luxurious white marble with elegant grey veining",
            images: [
                ItalianCalacatta1,
                ItalianCalacatta2,
                ItalianCalacatta3,
                ItalianCalacatta4,
            ],
        },
        {
            id : 3,
            titleImage : SpanishBlackMarquina1,
            title : "Spanish Black Marquina",
            discription : "Elegant black marble with white veining",
            images: [
                SpanishBlackMarquina1,
                SpanishBlackMarquina2,
                SpanishBlackMarquina3,
                SpanishBlackMarquina4,
                SpanishBlackMarquina5,
            ],
        },
    ]

  return (
    <div className="container mx-auto">
        <div className="py-20 px-5">
            {/* About Us Our Foundation Section */}
            <div className="flex flex-col items-center text-center">
                <p className="px-4 py-2 rounded-full w-[fit-content] bg-yellow-200/30 text-yellow-500 mb-4">Our Collection</p>
                <h2 className="p-2 text-4xl md:text-5xl font-semibold text-slate-800 mb-3">Premium Marble Categories</h2>
                <p className='text-gray-400 mb-6'>We offer a wide range of marbles and stones catering to various aesthetic preferences and functional requirements.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {marblesData.map(marbles => (
                    <div key={marbles.id} className="flex flex-col shadow-sm rounded-2xl hover:scale-101 hover:cursor-pointer hover:shadow-lg duration-500" onClick={() => setSelectedMarble(marbles)}>
                        <img src={marbles.titleImage} alt={marbles.title} className="rounded-t-2xl sm:h-[300px] lg:h-auto" />
                        <div className="p-7">
                            <p className="text-slate-800 font-semibold text-[26px]">{marbles.title}</p>
                            <p className="text-gray-400 mb-5">{marbles.discription}</p>
                            <button className="flex items-center gap-3 hover:cursor-pointer text-yellow-500" onClick={() => setSelectedMarble(marbles)}>View Details <FaArrowRight /></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Modal */}
        {selectedMarble && (
            <MarbleModal marble={selectedMarble} onClose={() => setSelectedMarble(null)} />
        )}

    </div>
  );
}

export default OurMarbleCollection;