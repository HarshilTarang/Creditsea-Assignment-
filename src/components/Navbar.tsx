import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom'; 
const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">CREDIT APP</div>
      <ul className="navbar-menu">
      <Link to="/" className="nav-link">
            Dashboard
          </Link>
        <li>Payments</li>
        <li>Budget</li>
        <li>Card</li>
        
        {/* User Dropdown */}
        <li className="navbar-user">
          <button onClick={toggleDropdown} className="user-button">
            User <i className="arrow-down"></i> {/* Optionally add an arrow icon */}
          </button>
          {dropdownOpen && (
            <div className="dropdown-menu">
              <ul>
                <li>
                  <a href="/applied-loans">Loan History</a> {/* Link to Loan Page */}
                </li>
                <li>
                  <a href="/profile">Profile</a> {/* Another link */}
                </li>
                <li>
                  <a href="/settings">Settings</a>
                </li>
                <li>
                  <a href="/logout">Logout</a>
                </li>
              </ul>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;