import React, { useState } from 'react'
import nature from '../../Assets/images/nature.jpeg';
import { useDarkMode } from '../../contexts/DarkModeContext';

const RightSide = () => {
    const [input, setInput] = useState("");
    const { darkMode, toggleDarkMode } = useDarkMode();

    return (
        <div className={darkMode ? "flex flex-col h-screen dark shadow-lg rounded-l-xl" : "flex flex-col h-screen light shadow-lg rounded-l-xl"}>
            <div className="flex flex-col items-center relative pt-10">
                <img className="h-32 rounded-md" src={nature} alt="nature"></img>
            </div>
            <p className={darkMode ? "font-roboto font-normal text-sm text-gray-200 max-w-fit no-underline tracking-normal leading-tight py-2 mx-2" : "font-roboto font-normal text-sm text-gray-700 max-w-fit no-underline tracking-normal leading-tight py-2 mx-2"}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            </p>
            <div className="mx-2 mt-10">
                <p className={darkMode ? "font-roboto font-medium text-sm text-gray-200 no-underline tracking-normal leading-none" : "font-roboto font-medium text-sm text-gray-700 no-underline tracking-normal leading-none"}>Friends: </p>
                <input className="mt-4 border-0 outline-none" name="input" value={input} type="text" placeholder="Searching Friends..." onChange={(e) => setInput(e.target.value)}></input>
            </div>
        </div>
    )
}

export default RightSide
