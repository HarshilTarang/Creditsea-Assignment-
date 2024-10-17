import React from 'react';
import './LoanStats.css';

const LoanStats: React.FC = () => {
  return (
    <section className="loan-stats">
      <div className="stat-card">
        <h3>200</h3>
        <p>Active Users</p>
      </div>
      <div className="stat-card">
        <h3>100</h3>
        <p>Borrowers</p>
      </div>
      <div className="stat-card">
        <h3>550,000</h3>
        <p>Cash Disbursed</p>
      </div>
      <div className="stat-card">
        <h3>450,000</h3>
        <p>Savings</p>
      </div>
      <div className="stat-card">
        <h3>30</h3>
        <p>Repaid Loans</p>
      </div>
    </section>
  );
};

export default LoanStats;
