
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
        <nav className="relative container mx-auto p-6 bg-transparent">
            <div className="flex items-center justify-between">
                {/* Logo */}
                <div className="pt-2">
                    <Link to="/">
                        <img className="w-40 h-12 cursor-pointer" src={logo} alt="Car Logo" />
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6">
                    {menus.map((menu, index) => (
                        <Link
                            key={index}
                            to={menu.href}
                            className="font-bold text-lg font-sans hover:text-orange"
                        >
                            {menu.name}
                        </Link>
                    ))}
                </div>

                {/* Login & Register (Desktop) */}
                <div className="hidden md:flex space-x-6">
                    <Link to="/login" className="font-bold text-lg font-sans py-3 px-4 hover:text-orange">
                        Login
                    </Link>
                    <Link to="/register" className="font-bold text-lg font-sans py-3 px-4 rounded text-white bg-orange opacity-90 hover:opacity-100 hover:shadow-md">
                        Register
                    </Link>
                </div>

                {/* Hamburger Icon (Mobile) */}
                <div className="md:hidden flex justify-end w-full">
                    <button onClick={toggleMenu} className={`hamburger ${isToggle ? 'open' : ''}`}>
                        <span className="hamburger-top"></span>
                        <span className="hamburger-middle"></span>
                        <span className="hamburger-bottom"></span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isToggle && (
                <div className="md:hidden absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md z-50">
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
