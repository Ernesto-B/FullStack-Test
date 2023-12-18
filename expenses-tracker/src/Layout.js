import React from "react";

function Layout({ onLogout }) {
  const handleUserLogout = (event) => {
    event.preventDefault();
    onLogout();
  };

  return (
    <>
      <div id="header" className="flex justify-center items-center h-20">
        <button
          id="logout"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline absolute top-0 right-0 m-4"
          onClick={handleUserLogout}
        >
          Logout
        </button>
        <h1 id="layoutTitle" className="text-4xl">
          Expenses Tracker
        </h1>
      </div>
      <p id="welcomeMessage" className="text-center font-serif uppercase">
        Welcome to the app!
      </p>
    </>
  );
}

export default Layout;
