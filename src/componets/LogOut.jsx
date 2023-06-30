import React from 'react';

const Logout = ({ onLogout }) => {
    return (
        <div>
            <button onClick={onLogout}>Đăng xuất</button>
        </div>
    );
};

export default Logout;
