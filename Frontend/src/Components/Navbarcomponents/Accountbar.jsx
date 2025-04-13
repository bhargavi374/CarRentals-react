
import React, { useContext, useState, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../images/carlogo.png";
import Dropdown from './accountdropdown';
import axios from 'axios';
import { UserContext } from '../../Context/Clientcontext';

export default function Accountbar() {
    const [isToggle, setIstoggle] = useState(false);
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);

    const menus = [
        { name: 'Home', href: "/account" },
        { name: 'About', href: "/about" },
        { name: 'Models', href: "/model" },
        { name: 'Testimonials', href: "/testimonials" },
        { name: 'Team', href: "/team" },
        { name: 'Contact', href: "/contact" },
        { name: 'Bookings', href: "/account/bookings" },
    ];

    const open = () => {
        setIstoggle(!isToggle);
    };

    const handleOptionClick = useCallback(async () => {
        await axios.post('/logout').then(() => {
            setUser(null);
            navigate('/');
        });
    }, [setUser, navigate]);

    return (
        <>
            <nav className="relative container mx-auto p-6 bg-transparent">
                <div className="flex items-center justify-between space-x-20">
                    <div className="pt-2">
                        <img style={{ cursor: "pointer" }} className="w-40 h-12" src={logo} alt="Logo" />
                    </div>
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-6">
                        {menus.filter(menu => menu.name !== "Bookings").map((menu, index) => (
                            <Link className="font-bold text-lg font-sans hover:text-orange" key={index} to={menu.href}>
                                {menu.name}
                            </Link>
                        ))}
                    </div>
                    {/* Dropdown for Logged-In User */}
                    <div className="hidden md:flex space-x-4">
                        <Dropdown />
                    </div>
                    {/* Mobile Menu Button */}
                    <button
                        onClick={open}
                        id="menu-btn"
                        aria-expanded={isToggle}
                        className={isToggle ? 'open block hamburger md:hidden focus:outline-none' : 'block hamburger md:hidden focus:outline-none'}
                    >
                        <span className="hamburger-top"></span>
                        <span className="hamburger-middle"></span>
                        <span className="hamburger-bottom"></span>
                    </button>
                </div>
                {/* Mobile Navigation Menu */}
                <div className="md:hidden z-50">
                    <div onClick={open} id="menu" className={isToggle ? "absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md z-50" : "absolute hidden flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"}>
                        {menus.map((menu, index) => (
                            <Link key={index} to={menu.href} onClick={() => setIstoggle(false)}>
                                {menu.name}
                            </Link>
                        ))}
                        <p onClick={handleOptionClick} className="cursor-pointer hover:text-orange">Logout</p>
                    </div>
                </div>
            </nav>
        </>
    );
}