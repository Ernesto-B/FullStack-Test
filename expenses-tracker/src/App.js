import React, { useState } from 'react';
import Layout from './Layout';
import Login from './Login';
import RegistrationForm from './RegistrationForm';
// Import your Register component if you have one

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [action, setAction] = useState(''); // 'login' or 'register'

  const handleLogin = (username, password) => {
    // Add login logic here
    setIsLoggedIn(true);
  };

  const handleRegister = (username, password) => {
    // Add registration logic here
    setIsLoggedIn(true);
  };

  const renderForm = () => {
    switch (action) {
      case 'login':
        return <Login onLogin={handleLogin} />;
      case 'register':
        return <RegistrationForm onRegister={handleRegister} />;
      default:
        return (
          <div className="flex flex-col items-center justify-center space-y-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setAction('login')}>
              Login
            </button>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={() => setAction('register')}>
              Register
            </button>
          </div>
        );
    }
  };

  return (
    <div className="App">
      {!isLoggedIn ? renderForm() : <Layout />}
    </div>
  );
}

export default App;
