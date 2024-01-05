import React from 'react'

const Card = ({ name, img, status }) => {
    return (
        <div>
            <div className="relative">
                <img className="h-80 w-56 rounded-2xl hover:scale-105 duration-700 ease-in-out cursor-pointer shadow-lg" src={img} alt={name}></img>
                
                <p className="font-roboto bottom-4 left-4 text-sm font-medium text-white absolute no-underline leading-none">{name}</p>
                
                <p className={`${status === "Offline" ? "absolute mr-2 bottom-4 right-4 w-3 h-3 bg-red-600 rounded-full" :
                    "absolute mr-2 bottom-4 right-4 w-3 h-3 bg-green-500 rounded-full"}`}></p>
            </div>
        </div>
    )
}

export default Card
