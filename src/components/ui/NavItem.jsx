import React from "react";
import { Link } from "react-router-dom";

function NavItem({ children, data: { title, link } }) {
  return (
    <ul>
      <Link to={link} className="flex flex-col items-center space-y-1 ">
        <div className="text-xl sm:text-3xl"> {children}</div>
        <div className=" hidden sm:inline">{title}</div>
      </Link>
    </ul>
  );
}

export default NavItem;
