import React from "react";
import Layout from "./Layout";

function Income({ onLogout }) {
  return (
    <>
      <Layout onLogout={onLogout} />
      <div id="incomeHeader">
        <h1 id="incomeTitle" className="text-3xl text-center">
          Income
        </h1>
      </div>
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
              Source:
            </label>
            <input
              id="name"
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="cost"
            >
              Amount:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="cost"
              type="text"
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
              <option>Bi-Weekly</option>
              <option>Monthly</option>
              <option>Annually</option>
            </select>
          </div>
          <div>
            <textarea
              id="notes"
              rows="4"
              cols="50"
              placeholder="Additional notes about the income"
              className="shadow border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            ></textarea>
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

export default Income;
