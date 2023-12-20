import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";

function Expenses({ onLogout }) {
  const navigate = useNavigate();
  const [transactionName, setTransactionName] = useState("");
  const [cost, setCost] = useState(0);
  const [details, setDetails] = useState("");

  const handleUserLogout = (event) => {
    onLogout();
    navigate("/");
  };

  return (
    <>
      <Layout onLogout={handleUserLogout} />
      <h1 id="expensesTitle" className="text-3xl text-center">
        Expenses
      </h1>
      <div
        id="content"
        className="flex items-center justify-center h-screen bg-gray-100"
      >
        <form
          id="expenseForm"
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div id="transaction" className="mb-6">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Transaction:
            </label>
            <input
              id="name"
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e) => setTransactionName(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="cost"
            >
              Cost:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="cost"
              type="text"
              onChange={(e) => setCost(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="date"
            >
              Date:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="date"
              type="date"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="paymentMethod"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Payment Method:
            </label>
            <select
              id="paymentMethod"
              className="shadow border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option>Cash</option>
              <option>Credit</option>
              <option>Debit</option>
            </select>
          </div>
          <div className="mb-6">
            <label
              htmlFor="frequency"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Frequency:
            </label>
            <select
              id="frequency"
              className="shadow border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option>One Time</option>
              <option>Weekly</option>
              <option>Monthly</option>
              <option>Annually</option>
            </select>
          </div>
          <div className="mb-4">
            <textarea
              id="notes"
              rows="4"
              cols="50"
              placeholder="Additional notes about the expense"
              className="shadow border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e) => setDetails(e.target.value)}
            ></textarea>
          </div>
          <div className="mb-6">
            <label
              htmlFor="receipt"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Receipt File/Image:
            </label>
            <input type="file" id="receipt" accept="image/*,application/pdf" />
          </div>
          <div id="submitButton" className="flex justify-end">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Expenses;
