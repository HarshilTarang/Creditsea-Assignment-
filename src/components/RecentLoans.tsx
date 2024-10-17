import React from 'react';
import './RecentLoans.css';

const RecentLoans: React.FC = () => {
  const loans = [
    { user: 'Tom Cruise', customer: 'Contact Email not Linked', date: 'June 09, 2021', status: 'Pending' },
    { user: 'Matt Damon', customer: 'Adding Images to Featured Posts', date: 'June 09, 2021', status: 'Pending' },
    { user: 'Robert Downey', customer: 'When will I be charged?', date: 'June 08, 2021', status: 'Pending' },
    { user: 'Henry Cavil', customer: 'Unable to add replies', date: 'June 08, 2021', status: 'Approved' },
    { user: 'Chris Evans', customer: 'Downtime since last week', date: 'June 08, 2021', status: 'Approved' },
  ];

  return (
    <section className="recent-loans">
      <h2>Recent Loans</h2>
      <ul>
        {loans.map((loan, index) => (
          <li key={index} className={loan.status.toLowerCase()}>
            <span>{loan.user}</span>
            <span>{loan.customer}</span>
            <span>{loan.date}</span>
            <span className="loan-status">{loan.status}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default RecentLoans;
