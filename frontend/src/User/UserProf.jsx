// UserProfile.jsx
import React, { useState } from 'react';
import './UserProfile.css'; // Optional for styling

export default function UserProfile() {
  const user = JSON.parse(localStorage.getItem('user'));
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="profile-container">
      <div className="avatar" onClick={toggleDropdown}>
        <img
          src="https://ui-avatars.com/api/?name=User&background=random"
          alt="User Avatar"
        />
      </div>

      {showDropdown && (
        <div className="dropdown">
          <p><strong>{user?.name}</strong></p>
          <p>Role: {user?.role}</p>
          <button onClick={() => {
            localStorage.clear();
            window.location.href = '/';
          }}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
