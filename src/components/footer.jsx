import logo from "../assets/logo.svg";

import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FiTwitter, FiLinkedin } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

function Footer() {
  const quickLinks = [
    { name: "Home", path: "/home" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Blog", path: "/blog" },
  ];

  const businessSegments = [
    { name: "Marbles & Stones", path: "/marbles", color: "text-yellow-500" },
    { name: "Restaurant", path: "/restaurant", color: "text-red-500" },
    { name: "Real Estate", path: "/realState", color: "text-slate-500" },
    { name: "NGO (Education)", path: "/ngo", color: "text-green-500" },
  ];

  const iconStyle = "hover:text-orange-500 hover:scale-110 duration-300";

  return (
    <div className="bg-slate-800">
      
      <footer className="container mx-auto py-10 px-5">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
          
          {/* Logo & Socials */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-5">
              <img src={logo} alt="Logo In Footer" className="h-[50px]" />
              <p className="text-white font-medium text-[20px] italic">
                <span className="text-orange-500">Shree</span> Rambhakt Group
              </p>
            </div>
            <p className="text-gray-400">Providing excellence across Marbles, Hospitality, Real Estate, and Education.</p>
            <div className="flex gap-5 text-2xl text-white">
              <FaInstagram className={iconStyle} />
              <FaFacebookF className={iconStyle} />
              <FiLinkedin className={iconStyle} />
              <FiTwitter className={iconStyle} />
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-white flex flex-col">
            <p className="font-medium mb-5 sm:my-3 text-xl">Quick Links</p>
            <ul className="leading-[40px]">
              {quickLinks.map((link) => (
                <li key={link.path} className="hover:text-orange-500 hover:cursor-pointer w-fit">
                  <a href={link.path} className="outline-0">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Segments */}
          <div className="text-white flex flex-col">
            <p className="font-medium mb-5 sm:my-3 text-xl">Business Segment</p>
            <ul className="leading-[40px]">
              {businessSegments.map(({ name, path, color }) => (
                <li key={path} className={`hover:cursor-pointer w-fit hover:${color}`}>
                  <a href={path}>{name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-white flex flex-col">
            <p className="font-medium mb-5 sm:my-3 text-xl">Contact Us</p>
            <ul className="leading-[40px]">
              <li className="hover:cursor-pointer hover:brightness-150">
                <a href="#" className="flex gap-4 items-center outline-0">
                  <GrLocation className="text-orange-500 text-2xl" />
                  <p className="leading-[20px] text-gray-400">123 Business Avenue, City Center, State - 123456</p>
                </a>
              </li>
              <li className="hover:cursor-pointer hover:brightness-150">
                <a href="#" className="flex gap-4 items-center outline-0">
                  <IoCallOutline className="text-orange-500 text-2xl" />
                  <p className="text-gray-400">+91 9876 543 210</p>
                </a>
              </li>
              <li className="hover:cursor-pointer hover:brightness-150">
                <a href="#" className="flex gap-4 items-center outline-0">
                  <MdOutlineEmail className="text-orange-500 text-2xl" />
                  <p className="text-gray-400">info@shreerambhakt.com</p>
                </a>
              </li>
            </ul>
          </div>
          
        </div>

        <hr className="text-gray-600 my-5" />

        <p className="text-gray-500 text-center">&copy; 2025 Shree Rambhakt Group. All rights reserved.</p>

      </footer>

    </div>
  );
}

export default Footer;
