import React from 'react';
import NavLinks from './NavLinks';
import UserLinks from './UserLinks';
import { Link } from 'react-router-dom';
import { useDarkMode } from '../../contexts/DarkModeContext';

const Navbar = () => {
    const { darkMode, toggleDarkMode } = useDarkMode();

    return (
        <div className={darkMode ? 'flex justify-between items-center w-full px-44 py-2 dark' : "light flex justify-between items-center w-full px-44 py-2"}>
            <Link to="/">
                <div className="flex text-3xl font-extrabold text-gray-900 font-roboto">
                    <span className="text-blue-700 mr-4">
                        SocialSphere
                    </span>
                    <div className={darkMode ? 'text-white' : 'text-black'}>
                        .net
                    </div>
                </div>
                <div>
                    <button className={darkMode ? "hover:bg-blue-500 px-1 rounded-md transition-all" : "hover:bg-blue-200 px-1 rounded-md transition-all"} onClick={toggleDarkMode}>
                        Toggle Dark Mode
                    </button>
                </div>
            </Link>
            
            <div className="flex justify-center items-center mx-auto">
                <NavLinks/>
            </div>
            <div>
                <UserLinks/>
            </div>
        </div>
    )
}

export default Navbar
