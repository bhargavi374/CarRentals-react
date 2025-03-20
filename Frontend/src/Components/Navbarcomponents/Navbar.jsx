// import React, { useState, useContext, useEffect } from 'react';
// import logo from "../images/carlogo.png"
// import { Link } from 'react-router-dom';
// import { UserContext } from '../../Context/Clientcontext';


    



// export default function Navbar(){

//     const [isToggle, setIstoggle] = useState(false);
//     const {user} = useContext(UserContext);
    

    
//     const menus = [
//         {name: 'Home', href:'/'},
//         {name: 'About', href: "/about"},
//         {name: 'Models', href: "/model"},
//         {name: 'Testimaonials', href: "/testimonials"},
//         {name: 'Team', href: "/team"},
//         {name: 'Contact', href: "/contact"},
//         {name: 'Login', href: "/login"},
//         {name: 'Register', href: "/register"}
//     ]

    

//     const open =()=>{
//         setIstoggle(!isToggle)
//     }

//     return(
//         <>
//             <nav className="relative container mx-auto p-6 bg-transparent">
//                 <div className="flex items-center justify-between space-x-20">
//                     <div className="pt-2">
//                         <img style={{cursor:"pointer"}} className="w-40 h-12" src={logo} alt="c"/>
//                     </div>
//                     <div className="hidden md:flex space-x-6">
//                         {menus.map((menu,index)=>(
//                             index != menus.length - 1 &&
//                             index != menus.length - 2 &&
//                             <a className="font-bold text-lg font-sans hover:text-orange" key={index} href={menu.href}>{menu.name}</a>
//                         ))}
//                     </div>
//                      <div className="hidden md:flex space-x-6">
//                             <Link to={'/login'} className="font-bold text-lg font-sans py-3 px-4 hover:text-orange">Login</Link>
//                             <Link to={'/register'} className="font-bold text-lg font-sans py-3 px-4 rounded text-white bg-orange opacity-90 hover:opacity-100 hover:shadow-md">Register</Link>
//                     </div>
//                     <button onClick={open} id="menu-btn" className={isToggle ? 'open block hamburger md:hidden focus:outline-none' : 'block hamburger md:hidden focus:outline-none'}>
//                         <span className="hamburger-top"></span>
//                         <span className="hamburger-middle"></span>
//                         <span className="hamburger-bottom"></span>
//                     </button>
//                 </div>
//                 <div className="md:hidden">
//                     <div onClick={open} id="menu" className={isToggle ? "absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md z-50" : "absolute hidden flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md" }>
//                         {menus.map((menu,index)=>(
//                             <a key={index} href={menu.href}>{menu.name}</a>
//                         ))}
//                      </div>
//                 </div>
//             </nav>
//         </>
//     )
// }

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
        { name: 'Testimonials', href: '/testimonials' },  // Fixed typo
        { name: 'Team', href: '/team' },
        { name: 'Contact', href: '/contact' },
        { name: 'Login', href: '/login' },
        { name: 'Register', href: '/register' }
    ];

    const toggleMenu = () => setIsToggle(!isToggle);

    return (
        <nav className="relative container mx-auto p-6 bg-transparent">
            <div className="flex items-center justify-between space-x-20">
                {/* Logo */}
                <div className="pt-2">
                    <Link to="/">
                        <img style={{ cursor: "pointer" }} className="w-40 h-12" src={logo} alt="Car Logo" />
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6">
                    {menus.slice(0, -2).map((menu, index) => (
                        <Link 
                            key={index} 
                            to={menu.href} 
                            className="font-bold text-lg font-sans hover:text-orange"
                        >
                            {menu.name}
                        </Link>
                    ))}
                </div>

                {/* Login & Register Buttons (Desktop) */}
                <div className="hidden md:flex space-x-6">
                    <Link to="/login" className="font-bold text-lg font-sans py-3 px-4 hover:text-orange">
                        Login
                    </Link>
                    <Link to="/register" className="font-bold text-lg font-sans py-3 px-4 rounded text-white bg-orange opacity-90 hover:opacity-100 hover:shadow-md">
                        Register
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button onClick={toggleMenu} id="menu-btn" className={`block md:hidden focus:outline-none ${isToggle ? 'open' : ''}`}>
                    <span className="hamburger-top"></span>
                    <span className="hamburger-middle"></span>
                    <span className="hamburger-bottom"></span>
                </button>
            </div>

            {/* Mobile Menu */}
            {isToggle && (
                <div className="md:hidden absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md z-50">
                    {menus.map((menu, index) => (
                        <Link 
                            key={index} 
                            to={menu.href} 
                            onClick={() => setIsToggle(false)} // Close menu on click
                        >
                            {menu.name}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
}
