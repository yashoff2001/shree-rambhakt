import { React, useEffect, useState, useRef } from 'react';
import { IoClose } from "react-icons/io5";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

function MarbleModal({ marble, onClose }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const touchStartX = useRef(null);
    const touchEndX = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 4000);
        return () => clearInterval(interval);
    }, [currentSlide]);

    const handleNext = () => {
        setCurrentSlide((currentSlide + 1) % marble.images.length);
    };

    const handlePrev = () => {
        setCurrentSlide((currentSlide - 1 + marble.images.length) % marble.images.length);
    };

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
        touchEndX.current = e.changedTouches[0].clientX;
        handleSwipe();
    };

    const handleSwipe = () => {
        const deltaX = touchStartX.current - touchEndX.current;
        if (Math.abs(deltaX) > 50) {
            if (deltaX > 0) {
                handleNext(); // Swipe left
            } else {
                handlePrev(); // Swipe right
            }
        }
    };

    return (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-13 md:px-0">
            <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full relative">
                <button onClick={onClose} className="absolute top-[-20px] right-[-20px] text-2xl text-white hover:text-gray-500"><IoClose /></button>

                {/* Carousel */}
                <div className="relative" onTouchStart={isMobile ? handleTouchStart : undefined} onTouchEnd={isMobile ? handleTouchEnd : undefined}>
                    
                    <img src={marble.images[currentSlide]} alt={`Slide ${currentSlide + 1}`} className="w-full sm:h-70 object-cover rounded-t-2xl"
                    />

                    {/* Prev/Next Buttons for non-mobile */}
                    {!isMobile && (
                        <>
                            <button onClick={handlePrev} className="absolute top-1/2 left-[-12%] transform -translate-y-1/2 bg-white/70 p-2 rounded-full hover:bg-white">
                                <FaArrowLeft />
                            </button>
                            <button onClick={handleNext} className="absolute top-1/2 right-[-12%] transform -translate-y-1/2 bg-white/70 p-2 rounded-full hover:bg-white">
                                <FaArrowRight />
                            </button>
                        </>
                    )}

                    {/* Indicators */}
                    <div className="flex justify-center mt-2 space-x-2">
                        {marble.images.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentSlide(idx)}
                                className={`h-2 w-2 rounded-full duration-500 ${idx === currentSlide ? 'bg-orange-500 w-[20px]' : 'bg-gray-300'}`}
                            ></button>
                        ))}
                    </div>

                </div>

                {/* Detailed Content */}
                <div className="p-3 md:p-5">
                    <h3 className="md:text-2xl font-bold mb-2">{marble.title}</h3>
                    <p className="text-gray-600 mb-4">{marble.details}</p>
                </div>

            </div>
        </div>
    );
}

export default MarbleModal