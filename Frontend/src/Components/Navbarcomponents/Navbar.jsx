
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../Context/Clientcontext';
import logo from "../images/carlogo.png";

export default function Navbar() {
    const [isToggle, setIsToggle] = useState(false);
    const { user } = useContext(UserContext);

    const menus = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Models', href: '/model' },
        { name: 'Testimonials', href: '/testimonials' },
        { name: 'Team', href: '/team' },
        { name: 'Contact', href: '/contact' },
    ];

    const toggleMenu = () => setIsToggle(!isToggle);

    return (
        <nav className="relative container mx-auto px-4 py-4 sm:px-6 sm:py-6 bg-transparent">
            <div className="flex items-center justify-between">
                {/* Logo */}
                <div className="pt-2 flex-shrink-0">
                    <Link to="/">
                        <img className="w-32 h-auto sm:w-40 sm:h-12 cursor-pointer object-contain" src={logo} alt="Car Logo" />
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex space-x-4 xl:space-x-6">
                    {menus.map((menu, index) => (
                        <Link
                            key={index}
                            to={menu.href}
                            className="font-bold text-sm xl:text-lg font-sans whitespace-nowrap hover:text-orange"
                        >
                            {menu.name}
                        </Link>
                    ))}
                </div>

                {/* Login & Register (Desktop) */}
                <div className="hidden lg:flex space-x-2 xl:space-x-6 items-center">
                    <Link to="/login" className="font-bold text-sm xl:text-lg font-sans py-2 px-2 xl:py-3 xl:px-4 whitespace-nowrap hover:text-orange">
                        Login
                    </Link>
                    <Link to="/register" className="font-bold text-sm xl:text-lg font-sans py-2 px-3 xl:py-3 xl:px-4 rounded text-white bg-orange opacity-90 whitespace-nowrap hover:opacity-100 hover:shadow-md">
                        Register
                    </Link>
                </div>

                {/* Hamburger Icon (Mobile) */}
             <div className="lg:hidden flex justify-end">
                    <button onClick={toggleMenu} className={`hamburger ${isToggle ? 'open' : ''}`}>
                        <span className="hamburger-top"></span>
                        <span className="hamburger-middle"></span>
                        <span className="hamburger-bottom"></span>
                    </button>
                </div> 
            </div>

            {/* Mobile Menu */}
            {isToggle && (
                <div className="lg:hidden absolute flex flex-col items-center py-8 mt-4 space-y-6 font-bold bg-white left-4 right-4 sm:left-6 sm:right-6 rounded-lg shadow-lg z-50">
                    {menus.map((menu, index) => (
                        <Link
                            key={index}
                            to={menu.href}
                            onClick={() => setIsToggle(false)}
                        >
                            {menu.name}
                        </Link>
                    ))}
                    <Link to="/login" className="hover:text-orange">Login</Link>
                    <Link to="/register" className="hover:text-orange">Register</Link>
                </div>
            )}
        </nav>
    );
}
