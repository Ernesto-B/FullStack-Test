import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { SidebarData } from "./SidebarData";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();

  const location = useLocation();

  const handleNavigate = (path) => {
    navigate(path);
    setIsOpen(false); // Close the sidebar after navigation
  };

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className="h-full bg-blue-500">
        <ul>
          {SidebarData.map((val, key) => (
            <li
              name="row"
              id={location.pathname === val.path ? "active" : ""}
              className={`flex rounded-md bg-blue-500 shadow-md transition ease-out duration-500 hover:bg-blue-700 ${
                location.pathname === val.path ? "bg-blue-700" : "bg-blue-500"
              } text-white font-bold cursor-pointer flex-row justify-center items-center font-serif w-full h-24`}
              key={key}
              onClick={() => handleNavigate(val.path)}
            >
              <div id="icon" className="items-start pr-2">
                {val.icon}
              </div>
              <div id="title">{val.title}</div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
