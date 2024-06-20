import React, { useState } from 'react';
import './UserListPage.css';

const UserListPage = ({ isLoggedIn, onLogout, setCurrentPage, onAddUser }) => {
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');

  if (!isLoggedIn) {
    return <div>You must be logged in to access this page.</div>;
  }

  const handleAddUser = () => {
    if (newUsername && newPassword) {
      const newUser = { username: newUsername, password: newPassword };
      onAddUser(newUser);
      setNewUsername('');
      setNewPassword('');
    }
  };

  return (
    <div className="user-list-container">
      <h2>User List</h2>
      <div>
        <input
          type="text"
          placeholder="New Username"
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <button onClick={handleAddUser}>Add User</button>
      </div>
      <button onClick={() => setCurrentPage('users-table')}>View Users Table</button>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default UserListPage;