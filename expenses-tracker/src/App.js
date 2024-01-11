import Dashboard from "./components/Dashboard";
import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Expenses from "./components/Expenses";
import Income from "./components/Income";
import Login from "./components/Login";
import RegistrationForm from "./components/RegistrationForm";

function App() {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const handleLogin = (username, password) => {
    // Add login logic here
    setIsLoggedIn(true);
  };

  const handleRegister = (username, password) => {
    // Add registration logic here
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Handle logout
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1
                id="layoutTitle"
                className="text-4xl pb-3 text-center cursor-pointer lg:text-6xl font-bold text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out"
              >
                Expenses Tracker
              </h1>
              <div className="flex flex-col justify-center items-center h-screen space-y-4 bg-gray-100">
                <button
                  onClick={() => navigate("/login")}
                  className="bg-blue-500 hover:bg-blue-700 transition ease-out duration-300 text-white font-bold py-4 px-8 rounded focus:outline-none focus:shadow-outline min-w-[200px]"
                >
                  Login
                </button>
                <button
                  onClick={() => navigate("/register")}
                  className="bg-blue-500 hover:bg-blue-700 transition ease-out duration-300 text-white font-bold py-4 px-8 rounded focus:outline-none focus:shadow-outline min-w-[200px]"
                >
                  Register
                </button>
              </div>
            </>
          }
        />
        <Route
          path="/dashboard"
          element={
            isLoggedIn ? (
              <Dashboard onLogout={handleLogout} />
            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route
          path="/register"
          element={<RegistrationForm onRegister={handleRegister} />}
        />
        <Route
          path="/expenses"
          element={<Expenses onLogout={handleLogout} />}
        />
        <Route path="/income" element={<Income onLogout={handleLogout} />} />
      </Routes>
    </div>
  );
}

export default App;
