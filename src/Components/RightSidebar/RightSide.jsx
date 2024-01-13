import React, { useState, useContext } from 'react'
import nature from '../../Assets/images/nature.jpeg';
import { useDarkMode } from '../../contexts/DarkModeContext';
import { AuthContext } from '../AppContext/AppContext';
import { Link } from 'react-router-dom';
import avatar from '../../Assets/images/avatar.jpg';
import { Avatar } from "@material-tailwind/react";
import remove from '../../Assets/images/delete.png';

import {
    arrayRemove,
    collection,
    getDocs,
    query,
    updateDoc,
    where,
    doc
  } from "firebase/firestore";

import { db } from '../firebase/firebase';

const RightSide = () => {
    const [input, setInput] = useState("");
    const { user, userData } = useContext(AuthContext);
    const { darkMode, toggleDarkMode } = useDarkMode();

    const friendsList = userData?.friends;

    const searchFriends = (data) => {
        return data.filter((item) => item["name"].toLowerCase().includes(input.toLowerCase()));
    };

    const removeFriend = async (id, name, image) => {
        const q = query(collection(db, 'users'), where("uid", "==", user?.uid));
        const getDoc = await getDocs(q);
        const userDocumentId = getDoc.docs[0].id;

        await updateDoc(doc(db, 'users', userDocumentId), {
            friends: arrayRemove({id: id, name:name, image: image}),
        })
    }

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
                {friendsList?.length > 0 ? (
          searchFriends(friendsList)?.map((friend) => {
            return (
              <div
                className="flex items-center justify-between hover:bg-gray-100 duration-300 ease-in-out"
                key={friend.id}
              >
                <Link to={`/profile/${friend.id}`}>
                  <div className="flex items-center my-2 cursor-pointer">
                    <div className="flex items-center">
                      <Avatar
                        size="sm"
                        variant="circular"
                        src={friend?.image || avatar}
                        alt="avatar"
                      ></Avatar>
                      <p className={darkMode ? "ml-4 font-roboto font-medium text-sm text-white no-underline tracking-normal leading-none": "ml-4 font-roboto font-medium text-sm text-gray-700 no-underline tracking-normal leading-none"}>
                        {friend.name}
                      </p>
                    </div>
                  </div>
                </Link>
                <div className="mr-4">
                  <img
                    onClick={() =>
                      removeFriend(friend.id, friend.name, friend.image)
                    }
                    className="cursor-pointer"
                    src={remove}
                    alt="deleteFriend"
                  ></img>
                </div>
              </div>
            );
          })
        ) : (
          <p className="mt-10 font-roboto font-medium text-sm text-gray-700 no-underline tracking-normal leading-none">
            Add friends to check their profile
          </p>
        )}
            </div>
        </div>
    )
}

export default RightSide
