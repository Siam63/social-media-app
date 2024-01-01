import React from 'react';
import NavLinks from './NavLinks';
import UserLinks from './UserLinks';

const Navbar = () => {
    return (
        <div className="flex justify-between items-center border-b border-gray-100 w-full px-44 py-2">
            <div className="text-3xl font-extrabold text-gray-900 font-roboto">
                <span className="text-blue-700">
                    Social Media
                </span>
                App
            </div>

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