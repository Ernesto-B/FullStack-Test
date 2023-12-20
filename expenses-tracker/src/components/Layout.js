import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ListIcon from "@mui/icons-material/List";
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
      <div id="header" className="flex justify-center items-center h-20">
        <button
          id="logout"
          className="bg-blue-500 shadow-md hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline absolute top-0 right-0 m-4"
          onClick={handleUserLogout}
        >
          Logout
        </button>
        <h1 id="layoutTitle" className="text-4xl">
          Expenses Tracker
        </h1>
      </div>
      <div id="body" className="flex flex-col h-screen bg-gray-100">
        <button
          id="sidebarButton"
          className="text-black shadow-md font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline absolute top-0 left-0 m-4"
          onClick={toggleSidebar}
        >
          <ListIcon />
        </button>
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      </div>
    </>
  );
}

export default Layout;
