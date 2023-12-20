import { Key } from "@mui/icons-material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SidebarData } from "./SidebarData";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    setIsOpen(false); // Close the sidebar after navigation
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      id="sidebar"
      className={`h-full w-64 bg-blue-300 shadow-md transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out z-20`}
    >
      <ul id="sidebarList" className="h-auto p-0 w-full">
        {SidebarData.map((val, key) => {
          return (
            <li
              id="row"
              className="flex bg-blue-500 shadow-md hover:bg-blue-700 text-white font-bold cursor-pointer flex-row justify-center items-center font-serif w-full h-12 border border-solid border-white m-0"
              key={key}
              onClick={() => handleNavigate(val.path)}
            >
              <div id="icon" className="items-start">
                {val.icon}
              </div>
              <div id="title">{val.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
