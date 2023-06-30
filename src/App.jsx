
import React, { useState } from 'react';
import Logout from './componets/LogOut';
import Login from './componets/LogIn';

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    //  login done
    setLoggedIn(true);
    setUser(userData);
  };

  const handleLogout = () => {
    // logout
    setLoggedIn(false);
    setUser(null);
  };

  return (
    <div>
      {isLoggedIn ? (
        <Logout onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} />
      )}

      {isLoggedIn && (
        <div>
          <h2>Well come to , {user.username}!</h2>
          {/* Hiển thị content dành cho user login */}
        </div>
      )}
    </div>
  );
};

export default App;
