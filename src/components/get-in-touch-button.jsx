import { Link } from "react-router";

const GetInTouchButton = () => {
    return(
        <>
            <Link to="/contact">
                {/* <button className="w-full mt-auto bg-slate-900 text-white px-4 py-2 rounded-md hover:scale-105 hover:text-orange-500 hover:cursor-pointer duration-300">Get In Touch</button> */}
                <button className="text-xl bg-slate-700 text-white px-4 py-2 rounded-md hover:scale-110 hover:text-orange-500 backdrop-filter hover:bg-gray-200/10 duration-500 cursor-pointer">Get In Touch</button>
            </Link>
        </>
    )
};

export default GetInTouchButton;