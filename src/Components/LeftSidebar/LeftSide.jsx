import React, {useRef, useState, useEffect, useContext } from 'react'
import nature from '../../Assets/nature.jpeg';
import avatar from '../../Assets/avatar.jpg';

import { Tooltip, Avatar } from "@material-tailwind/react";
import Facebook from '../../Assets/images/facebook.png';
import Twitter from '../../Assets/images/twitter.png';
import Job from '../../Assets/images/job.png';
import Location from '../../Assets/images/location.png';
import { AuthContext } from '../AppContext/AppContext';

const LeftSide = () => {
    const { user, userData } = useContext(AuthContext);
    
    return (
        <div className="flex flex-col h-screen bg-white pb-4 border-2 rounded-r-xl shadow-lg">
            <div className="flex flex-col items-center relative">
                <img className="h-28 w-full rounded-r-xl" src={nature} alt="nature"/>
                <div className="absolute -bottom-4 h-10 w-10">
                    <Tooltip content="Profile" placement="top">
                        <Avatar size="md" src={avatar} alt="avatar"></Avatar>
                    </Tooltip>
                </div>
            </div>
            <div className="flex flex-col items-center pt-6">
                <p className="font-roboto font-medium text-md text-gray-700 no-underline tracking-normal leading-none">
                    { user?.email || userData?.email }
                </p>
                <p className="font-roboto font-medium text-xs text-gray-700 no-underline tracking-normal leading-none">
                    Exclusive tools & insights
                </p>
                <p className="font-roboto font-medium text-sm text-gray-700 no-underline tracking-normal leading-none py-2">
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
