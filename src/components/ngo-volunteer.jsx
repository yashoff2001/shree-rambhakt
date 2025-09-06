import { GoPeople } from "react-icons/go";

const Volunteer = () => {
    return(
        <>
            <div className="bg-green-200/20 rounded-2xl p-6 lg:w-[50%]">
                <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-5 text-2xl font-semibold">
                        <GoPeople className="font-semibold" />
                        <p>Volunteer</p>
                    </div>

                    <p>Join our volunteer program and contribute your skills, time, and energy to make a positive impact on children's education and their future.</p>

                    <form action="" className="flex flex-col gap-6">
                        <div className="flex gap-6 w-full">
                            <input type="text" placeholder="Name" className=" w-full border border-green-300 py-3 px-5 rounded-md" />
                            <input type="text" placeholder="Phone Number" className=" w-full border border-green-300 py-3 px-5 rounded-md" />
                        </div>
                        <input type="text" placeholder="Email Address" className="border border-green-300 py-3 px-5 rounded-md" />
                        <button className="bg-orange-500 rounded-md py-3 hover:bg-orange-400 duration-200">Register as Volunteer</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Volunteer;