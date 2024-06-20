import React from 'react';
import './UsersTablePage.css';

const UsersTablePage = ({ users, onLogout, setCurrentPage }) => {
  return (
    <div className="users-table-container">
      <h2>Users Table</h2>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.username}</td>
              <td>{user.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => setCurrentPage('user-list')}>Back to User List</button>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default UsersTablePage;
