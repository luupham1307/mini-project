import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = ({ onLogout }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Gọi hàm onLogout khi người dùng đăng xuất
        onLogout();

        // Chuyển hướng
        navigate('/login');
    };

    return (
        <div>
            <button onClick={handleLogout}>Đăng xuất</button>
        </div>
    );
};

export default Logout;


