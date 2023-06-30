import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleLogin = () => {
        // check thông tin đăng nhập,
        // Nếu thông tin hợp lệ, call hàm onLogin với thông tin user
        if (username !== '' && password !== '') {
            onLogin({ username, password });

            // chuyen hướng
            history.replace("/home");
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
