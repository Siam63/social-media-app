import React, {useContext } from 'react'
import nature from '../../Assets/images/nature.jpg';
import avatar from '../../Assets/images/avatar.jpg';

import { Tooltip, Avatar } from "@material-tailwind/react";
import Facebook from '../../Assets/images/facebook.png';
import Twitter from '../../Assets/images/twitter.png';
import Job from '../../Assets/images/job.png';
import Location from '../../Assets/images/location.png';
import { AuthContext } from '../AppContext/AppContext';
import { useDarkMode } from '../../contexts/DarkModeContext';

const LeftSide = () => {
    const { user, userData } = useContext(AuthContext);
    const { darkMode, toggleDarkMode } = useDarkMode();
    
    return (
        <div className={darkMode ? 'dark flex flex-col h-screen pb-4 rounded-r-xl shadow-lg' : 'flex flex-col h-screen light pb-4 rounded-r-xl shadow-lg'}>
            <div className="flex flex-col items-center relative">
                <img className="h-28 w-full rounded-r-xl" src={nature} alt="nature"/>
                <div className="absolute -bottom-4 h-10 w-10">
                    <Tooltip content="Profile" placement="top">
                        <Avatar size="md" src={user?.photoURL || avatar} alt="avatar"></Avatar>
                    </Tooltip>
                </div>
            </div>
            <div className="flex flex-col items-center pt-6">
                <p className={darkMode ? "font-roboto font-medium text-md text-white no-underline tracking-normal leading-none py-2" : "py-2 font-roboto font-medium text-md text-gray-500 no-underline tracking-normal leading-none"}>
                    { user?.email || userData?.email }
                </p>
                <p className={darkMode ? "font-roboto font-medium text-md text-white no-underline tracking-normal leading-none py-2" : "py-2 font-roboto font-medium text-md text-gray-500 no-underline tracking-normal leading-none"}>
                    Exclusive tools & insights
                </p>
                <p className={darkMode ? "font-roboto font-medium text-md text-white no-underline tracking-normal leading-none py-2" : "py-2 font-roboto font-medium text-md text-gray-500 no-underline tracking-normal leading-none"}>
                    Try premium for free
                </p>
            </div>
            <div className="flex flex-col pl-2">
                <div className="flex items-center pb-4">
                    <img className="h-8" src={Location} alt="location"></img>
                    <p className="font-roboto font-bold text-md no-underline tracking-normal leading-none">
                        Toronto
                    </p>
                </div>

                <div className="flex items-center pb-4">
                    <img className="h-8" src={Job} alt="job"></img>
                    <p className="font-roboto font-bold text-md no-underline tracking-normal leading-none">
                        React Developer
                    </p>
                </div>

                <div className="flex justify-center items-center pt-4">
                    <p className="font-roboto font-bold text-md text-[#0177b7] no-underline tracking-normal leading-none">
                        Events
                    </p>
                    <p className="font-roboto font-bold text-md text-[#0177b7] no-underline tracking-normal leading-none mx-2">
                        Groups
                    </p>
                    <p className="font-roboto font-bold text-md text-[#0177b7] no-underline tracking-normal leading-none">
                        Follow
                    </p>
                    <p className="font-roboto font-bold text-md text-[#0177b7] no-underline tracking-normal leading-none mx-2">
                        More
                    </p>
                </div>
                <div className="ml-2">
                    <p className="mt-4 font-roboto font-bold text-lg no-underline tracking-normal leading-none py-2">
                        Social Profiles
                    </p>
                    <div className="flex items-center">
                        <img className="h-8" src={Facebook} alt="facebook"></img>
                        <p className="font-roboto font-bold text-sm leading-none py-2">Social Network</p>
                    </div>
                    <div className="flex items-center">
                        <img className="h-8" src={Twitter} alt="twitter"></img>
                        <p className="font-roboto font-bold text-sm leading-none py-2">Social Network</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftSide
