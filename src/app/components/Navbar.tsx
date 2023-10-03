import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faSearch,
  faCompass,
  faPlay,
  faComment,
  faHeart,
  faSquarePlus,
  faUser,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import Stories from "./Stories";
import Post from "./Post";

const HomePage = () => {
  return (
    <div className="hidden sm:flex">
      <div className="flex flex-col w-[18%] h-screen border-r-2 fixed p-2">
        <div className="mb-auto cursor-pointer p-3">
          <p className="text-xl font-bold">Instagram</p>
        </div>
        <div className="flex flex-col my-[10%]">
          <div className="flex gap-6 hover:bg-gray-300 duration-200 p-3 cursor-pointer rounded-lg">
            <FontAwesomeIcon icon={faHome} className="w-[20px]" />
            <p className="text-xl">Home</p>
          </div>
          <div className="flex gap-6 hover:bg-gray-300 duration-200 p-3 cursor-pointer rounded-lg">
            <FontAwesomeIcon icon={faSearch} className="w-[20px]" />
            <p className="text-xl">Search</p>
          </div>
          <div className="flex gap-6 hover:bg-gray-300 duration-200 p-3 cursor-pointer rounded-lg">
            <FontAwesomeIcon icon={faCompass} className="w-[20px]" />
            <p className="text-xl">Explore</p>
          </div>
          <div className="flex gap-6 hover:bg-gray-300 duration-200 p-3 cursor-pointer rounded-lg">
            <FontAwesomeIcon icon={faPlay} className="w-[20px]" />
            <p className="text-xl">Reels</p>
          </div>
          <div className="flex gap-6 hover:bg-gray-300 duration-200 p-3 cursor-pointer rounded-lg">
            <FontAwesomeIcon icon={faComment} className="w-[20px]" />
            <p className="text-xl">Messages</p>
          </div>
          <div className="flex gap-6 hover:bg-gray-300 duration-200 p-3 cursor-pointer rounded-lg">
            <FontAwesomeIcon icon={faHeart} className="w-[20px]" />
            <p className="text-xl">Notifications</p>
          </div>
          <div className="flex gap-6 hover:bg-gray-300 duration-200 p-3 cursor-pointer rounded-lg">
            <FontAwesomeIcon icon={faSquarePlus} className="w-[20px]" />
            <p className="text-xl">Create</p>
          </div>
          <div className="flex gap-6 hover:bg-gray-300 duration-200 p-3 cursor-pointer rounded-lg">
            <FontAwesomeIcon icon={faUser} className="w-[20px]" />
            <p className="text-xl">Profile</p>
          </div>
        </div>
        <div className="flex gap-6 mt-auto hover:bg-gray-300 duration-200 p-3 cursor-pointer rounded-lg">
          <FontAwesomeIcon icon={faBars} className="w-[20px]" />
          <p className="text-xl">More</p>
        </div>
      </div>
      <div className="w-[60%] h-full ml-[18%] p-8 border-r-2">
        <div>
          <Stories />
        </div>
        <div className="w-[60%] mx-auto p-2">
          <Post />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
