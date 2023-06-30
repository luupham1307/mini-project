import React, { useState } from 'react';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // check thông tin đăng nhập,
        // Nếu thông tin hợp lệ, call hàm onLogin với thông tin người dùng
        if (username !== '' && password !== '') {
            onLogin({ username, password });
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Tên đăng nhập"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Đăng nhập</button>
        </div>
    );
};

export default Login;
