import React, { useState } from 'react';
import './App.css';
import LoginPage from './LoginPage';
import UserListPage from './UserListPage';
import UsersTablePage from './UsersTablePage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('login');
  const [users, setUsers] = useState([]);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentPage('user-list');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('login');
  };

  const handleAddUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <LoginPage onLogin={handleLogin} />;
      case 'user-list':
        return (
          <UserListPage
            isLoggedIn={isLoggedIn}
            onLogout={handleLogout}
            setCurrentPage={setCurrentPage}
            onAddUser={handleAddUser}
          />
        );
      case 'users-table':
        return <UsersTablePage users={users} onLogout={handleLogout} setCurrentPage={setCurrentPage} />;
      default:
    }
  };

  return <div className="app-container">{renderPage()}</div>;
}

export default App;