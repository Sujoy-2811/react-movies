import React from "react";
import { Link } from "react-router-dom";
import { PiTelevisionSimpleFill } from "react-icons/pi";
import { FaSearch } from "react-icons/fa";
import { MdMovieCreation } from "react-icons/md";
import { HiFire } from "react-icons/hi";

import { NAVLIST } from "../../data/navList";
import NavItem from "./NavItem";

function BottomNav() {
  const icons = [
    <HiFire key={0} />,
    <MdMovieCreation key={1} />,
    <PiTelevisionSimpleFill key={2} />,
    <FaSearch key={3} />,
  ];
  return (
    <div className="w-full text-[3lg] cursor-pointer fixed  bottom-0 uppercase bg-[#39445a] p-2 text-white font-bold z-[100] sm:p-4 sm:text-[3xl]">
      <ul className="flex justify-around">
        {NAVLIST.map((data, index) => (
          <NavItem key={data.to} data={data}>
            {icons[index]}
          </NavItem>
        ))}
      </ul>
    </div>
  );
}

export default BottomNav;
