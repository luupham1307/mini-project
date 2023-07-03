import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, BrowserRouter, Link, Routes } from "react-router-dom";
import { useState } from 'react';
// import Login from './components/Login.jsx';
// import Logout from './components/Logout.jsx';
// import Home from './components/Home.jsx';
import Login from './componets/LogIn.jsx';
import Logout from './componets/LogOut.jsx';
import Home from './componets/Home.jsx';

const queryClient = new QueryClient();

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

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);
