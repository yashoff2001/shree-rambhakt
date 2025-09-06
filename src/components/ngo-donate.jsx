import { FaRegHeart } from "react-icons/fa6";

const Donate = () => {

    const donationAmount = [
        {
            id : 1,
            amount : 1000,
        },
        {
            id : 2,
            amount : 2000,
        },
        {
            id : 3,
            amount : 3000,
        },
    ]

    return(
        <>
            <div className="bg-green-300/20 rounded-2xl p-6 lg:w-[50%]">
                <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-5 text-2xl font-semibold">
                        <FaRegHeart className="font-semibold" />
                        <p>Donate</p>
                    </div>
                    <p>Your generous donation can help us reach more children and enhance the quality of education we provide. Every contribution, big or small, makes a significant difference.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 overflow-x-scroll">
                        {donationAmount.map((donation) => (
                            <div className="flex justify-center px-8 py-2 text-[20px] hover:bg-gray-300/30 border rounded-md duration-300" key={donation.id}>
                                <button className="flex gap-5">&#8377; {donation.amount}</button>
                            </div>
                        ))}
                    </div>
                    <button className="bg-orange-500 rounded-md py-3 hover:bg-orange-400 duration-200">Donate Now</button>
                </div>
            </div>
        </>
    )
}

export default Donate;