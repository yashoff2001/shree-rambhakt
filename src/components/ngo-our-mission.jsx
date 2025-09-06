import OurMissionImage from '../assets/images/ngo/our-mission.png'

const NgoOurMission = () => {
    return(
        <>
            <div className="md:h-auto">
                <div className="container mx-auto">
                    <div className="py-20 px-5">
                        {/* NGO Main Section */}
                        <div className="flex flex-col lg:flex-row align-middle justify-between gap-10">
                            <div className="flex flex-col justify-center lg:w-[50%]">
                                <p className="px-4 py-2 rounded-full w-[fit-content] bg-green-100/70 text-green-700">Our Mission</p>
                                <h2 className="text-3xl text-slate-800 sm:text-5xl font-semibold mb-4">Creating Educational Opportunities</h2>
                                <p className="mb-6 text-[18px] text-gray-500">We believe that education is a fundamental right and the most powerful tool for socio-economic transformation. Our mission is to ensure that quality education reaches every child, regardless of their socio-economic background.</p>
                                <p className="mb-6 text-[18px] text-gray-500">Through innovative programs, community involvement, and strategic partnerships, we aim to bridge the educational gap and create a sustainable impact in underserved communities.</p>
                            </div>

                            <div className="flex justify-center">
                                <img src={OurMissionImage} className='size-[320px]' alt="OurMissionImage" />
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
};

export default NgoOurMission;