import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Layout from "./Layout";
import Login from "./Login";
import RegistrationForm from "./RegistrationForm";

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
            isLoggedIn ? (
              <Layout onLogout={handleLogout} />
            ) : (
              <>
                <h1
                  id="layoutTitle"
                  className="text-center text-4xl font-serif p-3"
                >
                  Expenses Tracker
                </h1>
                <div className="flex flex-col justify-center items-center h-screen space-y-4 bg-gray-100">
                  <button
                    onClick={() => navigate("/login")}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded focus:outline-none focus:shadow-outline min-w-[200px]"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => navigate("/register")}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded focus:outline-none focus:shadow-outline min-w-[200px]"
                  >
                    Register
                  </button>
                </div>
              </>
            )
          }
        />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route
          path="/register"
          element={<RegistrationForm onRegister={handleRegister} />}
        />
      </Routes>
    </div>
  );
}

export default App;
