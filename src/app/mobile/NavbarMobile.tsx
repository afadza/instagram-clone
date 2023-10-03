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
import StoriesMobile from "./StoriesMobile";
import PostMobile from "./PostMobile";

export default function NavbarMobile() {
  return (
    <div className="flex flex-col sm:hidden w-full h-full p-4">
      <div className="flex justify-between mb-4">
        <p className="font-bold">Instagram</p>
        <div className="">
          <FontAwesomeIcon icon={faHeart} className="w-[30px] h-[30px] mr-4" />
          <FontAwesomeIcon icon={faComment} className="w-[30px] h-[30px]" />
        </div>
      </div>
      <div>
        <StoriesMobile />
      </div>
      <div>
        <PostMobile />
      </div>
      <div className="fixed bottom-0 left-0 flex justify-between w-full bg-white p-4">
        <FontAwesomeIcon icon={faHome} className="w-[30px] h-[30px]" />
        <FontAwesomeIcon icon={faSearch} className="w-[30px] h-[30px]" />
        <FontAwesomeIcon icon={faSquarePlus} className="w-[30px] h-[30px]" />
        <FontAwesomeIcon icon={faPlay} className="w-[30px] h-[30px]" />
        <FontAwesomeIcon icon={faUser} className="w-[30px] h-[30px]" />
      </div>
    </div>
  );
}
