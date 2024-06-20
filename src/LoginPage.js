import React, { useState } from 'react';
import './LoginPage.css';

const adminCredentials = {
  username: 'admin',
  password: 'adminpassword',
};

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Check if the entered credentials match the admin credentials
    if (
      username === adminCredentials.username &&
      password === adminCredentials.password
    ) {
      // Successful admin authentication
      onLogin();
    } else {
      // Failed authentication
      alert('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;