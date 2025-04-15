
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

    const open = () => setIstoggle(!isToggle);

    const handleLogout = useCallback(async () => {
        await axios.post('/logout');
        setUser(null);
        navigate('/');
    }, [setUser, navigate]);

    return (
        <nav className="relative container mx-auto p-6 bg-transparent">
            <div className="flex items-center justify-between">
                <div className="pt-2">
                    <img className="w-40 h-12 cursor-pointer" src={logo} alt="Logo" />
                </div>

                <div className="hidden md:flex space-x-6">
                    {menus.filter(menu => menu.name !== "Bookings").map((menu, index) => (
                        <Link key={index} to={menu.href} className="font-bold text-lg font-sans hover:text-orange">
                            {menu.name}
                        </Link>
                    ))}
                </div>

                <div className="hidden md:flex space-x-4">
                    <Dropdown />
                </div>

                <div className="md:hidden flex justify-end w-full">
                    <button onClick={open} className={`hamburger ${isToggle ? 'open' : ''}`}>
                        <span className="hamburger-top"></span>
                        <span className="hamburger-middle"></span>
                        <span className="hamburger-bottom"></span>
                    </button>
                </div>
                
            </div>

            {isToggle && (
                <div className="md:hidden absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md z-50">
                    {menus.map((menu, index) => (
                        <Link key={index} to={menu.href} onClick={() => setIstoggle(false)}>
                            {menu.name}
                        </Link>
                    ))}
                    <p onClick={handleLogout} className="cursor-pointer hover:text-orange">Logout</p>
                </div>
            )}
        </nav>
    );
}

