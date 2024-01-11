import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";

function ViewTransactions({ onLogout }) {
  const navigate = useNavigate();
  const handleUserLogout = (event) => {
    onLogout();
    navigate("/");
  };
  return (
    <>
      <Layout onLogout={handleUserLogout} />
      <h1 id="view-transactions" className="text-3xl text-center">
        User Transactions
      </h1>
      <div
        id="content"
        className="flex items-center justify-center h-screen bg-gray-100"
      ></div>
    </>
  );
}

export default ViewTransactions;
