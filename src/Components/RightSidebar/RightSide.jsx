import React, { useState } from 'react'
import nature from '../../Assets/images/nature.jpeg';

const RightSide = () => {
    const [input, setInput] = useState("");

    return (
        <div className="flex flex-col h-screen bg-white shadow-lg border-2 rounded-l-xl">
            <div className="flex flex-col items-center relative pt-10">
                <img className="h-32 rounded-md" src={nature} alt="nature"></img>
            </div>
            <p className="font-roboto font-normal text-sm text-gray-700 max-w-fit no-underline tracking-normal leading-tight py-2 mx-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            </p>
            <div className="mx-2 mt-10">
                <p className="font-roboto font-medium text-sm text-gray-700 no-underline tracking-normal leading-none">Friends: </p>
                <input className="mt-4 border-0 outline-none" name="input" value={input} type="text" placeholder="Searching Friends..." onChange={(e) => setInput(e.target.value)}></input>
            </div>
        </div>
    )
}

export default RightSide
