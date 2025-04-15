
import React, { useState, useEffect, useRef, useContext } from 'react';
import { UserContext } from '../../Context/Clientcontext';
import { useNavigate, Link } from 'react-router-dom';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import axios from 'axios';

export default function Dropdown() {
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleLogout = async () => {
        await axios.post('/logout');
        setUser(null);
        navigate('/');
    };

    return (
        <div className="relative inline-block text-left" ref={dropdownRef}>
            <p onClick={toggleDropdown} className="inline-flex rounded-full justify-center w-7 h-7 mt-2 cursor-pointer">
                <AccountCircleOutlinedIcon className="hover:text-orange" />
            </p>

            {isOpen && (
                <div className="origin-top absolute left-1/2 transform -translate-x-1/2 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1 text-center">
                        <Link to="/account/bookings" className="block px-4 py-2 text-base font-semibold text-gray-700 hover:bg-cyan-200">
                            Bookings
                        </Link>
                        <p onClick={handleLogout} className="block px-4 py-2 text-base font-semibold text-gray-700 hover:bg-cyan-200 cursor-pointer">
                            Logout
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}

