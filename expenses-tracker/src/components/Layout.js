import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Sidebar from "./Sidebar";
function Layout({ onLogout }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // ... existing code

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const navigate = useNavigate();

  const handleUserLogout = (event) => {
    event.preventDefault();
    onLogout();
    navigate("/");
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 h-full w-64 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-20`}
      >
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      </div>
      <button
        id="logout"
        className="bg-blue-500 transition ease-out duration-500 shadow-md hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline absolute top-0 right-0 m-4"
        onClick={handleUserLogout}
      >
        Logout
      </button>
      <h1
        className="text-4xl text-center cursor-pointer lg:text-6xl font-bold text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out"
        onClick={() => navigate("/dashboard")}
      >
        Expenses Tracker
      </h1>
      <button
        id="sidebarButton"
        className={`text-black shadow-md transition ease-out duration-300 hover:bg-gray-100 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline absolute top-0 left-0 m-4 z-30 ${
          isSidebarOpen ? "transform translate-x-64 duration-200" : ""
        }`}
        onClick={toggleSidebar}
      >
        {!isSidebarOpen ? <ArrowForwardIosIcon /> : <ArrowBackIosNewIcon />}
      </button>

      <div id="main-content"></div>
    </>
  );
}

export default Layout;
