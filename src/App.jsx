import React, { useState } from 'react';
import Logout from './componets/LogOut';
import Login from './componets/LogIn';

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    // Thực hiện quá trình đăng nhập
    setLoggedIn(true);
    setUser(userData);
  };

  const handleLogout = () => {
    // Thực hiện quá trình đăng xuất
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
          <h2>Welcome to, {user.username}!</h2>
          {/* Hiển thị nội dung dành cho người dùng đã đăng nhập */}
        </div>
      )}
    </div>
  );
};

export default App;
