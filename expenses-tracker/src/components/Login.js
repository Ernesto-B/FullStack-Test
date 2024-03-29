import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login({ onLogin }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(username, password); // This should be replaced with your authentication logic
    navigateToHome();
  };

  const navigateToHome = () => {
    navigate("/dashboard"); // Use the path to your register page
  };

  return (
    <>
      <h1
        id="layoutTitle"
        className="text-4xl pb-3 text-center cursor-pointer lg:text-6xl font-bold text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out"
      >
        Expenses Tracker
      </h1>
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              autoComplete="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              autoComplete="current-password"
              placeholder="******************"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
          </div>
          <p>
            Not a user?
            <Link to="/register" className="text-blue-500 hover:text-blue-700">
              Register here.
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default Login;
