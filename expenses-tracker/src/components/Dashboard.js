import React from "react";
import Layout from "./Layout";

function Dashboard({ onLogout }) {
  return (
    <>
      <Layout onLogout={onLogout} />
      <div id="dashboardHeader">
        <h1 id="dashboardTitle" className="text-3xl text-center">
          Dashboard
        </h1>
      </div>
      <div
        id="content"
        className="flex items-center justify-center h-screen bg-gray-100"
      ></div>
    </>
  );
}

export default Dashboard;
