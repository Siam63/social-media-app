import React from 'react'
import { Avatar, Button } from "@material-tailwind/react";
import avatar from '../Assets/avatar.jpg';
import live from '../Assets/images/live.png';
import smile from '../Assets/images/smile.png';
import addImage from '../Assets/images/add-image.png';

const Main = () => {
    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-col py-4 w-full bg-white rounded-3xl shadow-lg">
                <div className="flex items-center border-b-2 border-gray-300 pb-4 pl-4 w-full">
                    <Avatar className="h-8" size="sm" variant="circular" src={avatar} alt="avatar"></Avatar>
                    <form className="w-full">
                        <div className="flex justify-between items-center">
                            <div className="w-full ml-4">
                                <input placeholder="What's on your mind?" type="text" name="text" className="outline-none w-full bg-white rounded-md"></input>
                            </div>
                            <div className="mx-4">
                                {/* preview image*/}
                            </div>
                            <div className="mr-4">
                                <Button variant="text" type="submit">Share</Button>
                            </div>
                        </div>
                    </form>
                </div>
                <span>{/* progress bar */}</span>
                <div className="flex justify-around items-center pt-4">
                    <div className="flex items-center">
                        <label htmlFor="addImage" className="cursor-pointer flex items-center">
                            <img className="h-10 mr-4" src={addImage} alt="addImage"></img>
                            <input id="addImage" type="file" style={{ display: "none" }}>
                            
                            </input>
                        </label>
                        <button></button>
                    </div>
                    <div className="flex items-center">
                        <img className="h-10 mr-4" src={live} alt="live"></img>
                        <p className="font-roboto font-medium text-md text-gray-700 no-underline tracking-normal leading-none">Live</p>
                    </div>
                    <div className="flex items-center">
                        <img className="h-10 mr-4" src={smile} alt="feeling"></img>
                        <p className="font-roboto font-medium text-md text-gray-700 no-underline tracking-normal leading-none">Feeling</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col py-4 w-full">
                {/* Posts */}
            </div>

            <div>
                {/* Reference for later */}
            </div>
        </div>
    )
}

export default Main
