import { useState, useEffect } from "react";
import { NavLink, useLocation, Link } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import logo from '../assets/logo.svg';
import GetInTouchButton from "./get-in-touch-button";

const NavBar = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    const navLinks = [
        { name: 'Home', path: '/home' },
        { name: 'About', path: '/about' },
        { name: 'Marbles', path: '/marbles' },
        { name: 'Restaurant', path: '/restaurant' },
        { name: 'Real State', path: '/realState' },
        { name: 'NGO', path: '/ngo' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Blog', path: '/blog' },
    ];

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    // Close on ESC key
    useEffect(() => {
        const handleEsc = (e) => {
        if (e.key === 'Escape') setClick(false);
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    return (
        <div className="fixed top-0 z-50 backdrop-blur bg-slate-700/50 w-full">
            <div className="container mx-auto py-2 px-5">
                <div className="flex justify-between items-center">

                    {/* Logo */}
                    <Link to="/" className="outline-0">
                        <img src={logo} alt="Logo" className="h-[55px]" />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-8 text-white text-[18px]">
                        {navLinks
                        .filter(link => link.path !== currentPath)
                        .map(link => (
                            <NavLink key={link.path} to={link.path} className="p-3 border-b-2 border-transparent hover:border-orange-500 hover:text-orange-500 hover:bg-slate-800 hover:rounded transition" >{link.name}</NavLink>
                        ))}
                    </nav>

                    <div className="hidden lg:block">
                        <GetInTouchButton />
                    </div>

                    {/* Mobile Menu Icon */}
                    <button className="lg:hidden hover:cursor-pointer text-white text-3xl z-50" onClick={handleClick}><CiMenuFries /></button>
                </div>
            </div>

            {/* Backdrop */}
            {click && (
                <div onClick={closeMenu} className="fixed inset-0 bg-black/40 z-40"></div>
            )}

            {/* Offcanvas Sidebar */}
            <div className={`fixed top-0 w-full h-[100vh] bg-slate-900 z-50 transform transition-transform duration-300 ${click ? 'translate-x-0' : 'translate-x-full'}`}>

                <div className="container mx-auto py-2 px-5">
                    
                    <div className="flex justify-between items-center">

                        {/* Logo */}
                        <Link to="/" className="outline-0">
                            <img src={logo} alt="Logo" className="h-[55px]" />
                        </Link>
                        <div className="text-white text-2xl cursor-pointer" onClick={closeMenu}><RxCross2 /></div>

                    </div>

                    <div className="p-6 flex flex-col gap-5">
                        <ul className="space-y-4 flex-1">
                            {navLinks
                                .filter(link => link.path !== currentPath)
                                .map(link => (
                                    <li key={link.path} onClick={closeMenu}>
                                    <NavLink to={link.path} className="block text-white text-lg border-b border-slate-700 hover:text-orange-500 hover:bg-slate-800 rounded p-2 transition">{link.name}</NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                        <GetInTouchButton />
                    </div>

                </div>

            </div>
        </div>
    );
};

export default NavBar;
