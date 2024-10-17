import React from 'react';
import Navbar from './Navbar.tsx';  // Import the Navbar component
import './appliedLoans.css';

const AppliedLoansPage = () => {
  const loans = [
    {
      officer: 'John Okoh',
      amount: '50,000.00',
      date: 'June 09, 2021',
      time: '6:30 PM',
      status: 'PENDING',
      updated: '1 day ago',
    },
    {
      officer: 'John Okoh',
      amount: '100,000.00',
      date: 'June 07, 2021',
      time: '6:30 PM',
      status: 'VERIFIED',
      updated: '1 day ago',
    },
    {
      officer: 'John Okoh',
      amount: '100,000.00',
      date: 'June 07, 2021',
      time: '6:30 PM',
      status: 'REJECTED',
      updated: '1 day ago',
    },
    {
      officer: 'John Okoh',
      amount: '100,000.00',
      date: 'May 27, 2021',
      time: '6:30 PM',
      status: 'APPROVED',
      updated: '1 day ago',
    },
  ];

  return (
    <div className="applied-loans-page">
      {/* Add Navbar at the top */}
      <Navbar />

      <div className="content">
        <div className="header">
          <div className="deficit-box">
            <img src="deficit-icon.png" alt="Deficit Icon" />
            <div className="deficit-amount">₦0.0</div>
          </div>
          <button className="get-loan-button">Get A Loan</button>
        </div>

        <div className="loan-options">
          <button className="loan-option active">Borrow Cash</button>
          <button className="loan-option">Transact</button>
          <button className="loan-option">Deposit Cash</button>
        </div>

        <div className="loan-search">
          <input
            type="text"
            className="loan-search-input"
            placeholder="Search for loans"
          />
        </div>

        <div className="applied-loans">
          <h2>Applied Loans</h2>
          <table className="loan-table">
            <thead>
              <tr>
                <th>Loan Officer</th>
                <th>Amount</th>
                <th>Date Applied</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {loans.map((loan, index) => (
                <tr key={index}>
                  <td>
                    <div className="loan-officer">
                      <img
                        src="profile-pic.png"
                        alt="Profile"
                        className="loan-officer-img"
                      />
                      <div>
                        <div>{loan.officer}</div>
                        <div className="loan-updated">Updated {loan.updated}</div>
                      </div>
                    </div>
                  </td>
                  <td>₦{loan.amount}</td>
                  <td>
                    {loan.date}
                    <div className="loan-time">{loan.time}</div>
                  </td>
                  <td>
                    <span className={`status ${loan.status.toLowerCase()}`}>
                      {loan.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="table-pagination">
            <span>Rows per page: 7</span>
            <span>
              1-4 of 4 <span>&lt;</span> <span>&gt;</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppliedLoansPage;
