import React from 'react';
import { FaHome, FaUsers, FaDollarSign, FaChartLine, FaSignOutAlt } from 'react-icons/fa';
import './Sidebar.css';
import { Link } from 'react-router-dom'; 
const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <div className="profile-section">
        <img src="path-to-your-image/logo.png" alt="User" className="profile-pic" />
        <h4>John Doe</h4>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li><FaHome /> Dashboard</li>
          <li><FaUsers /> Borrowers</li>
          <Link to="/apply-loan" className="sidebar-link"><FaDollarSign/>
            Apply Loan
          </Link>
          <li><FaChartLine /> Reports</li>
          <li><FaSignOutAlt /> Sign Out</li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
