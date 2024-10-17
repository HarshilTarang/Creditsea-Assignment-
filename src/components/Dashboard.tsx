import React from 'react';
import Navbar from './Navbar.tsx';
import Sidebar from './Sidebar.tsx';
import LoanStats from './LoanStats.tsx';
import RecentLoans from './RecentLoans.tsx';
import LoanCharts from './LoanCharts.tsx';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="main-content">
        <Sidebar />
        <div className="loan-details">
          <div className="loan-stats">
            <LoanStats />
          </div>
          <div className="loan-section">
            <div className="recent-loans">
              <RecentLoans />
            </div>
            <div className="loan-charts">
              <LoanCharts />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
