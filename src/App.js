import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Import necessary router components
import LoanApplicationForm from './components/appform.tsx';
import Dashboard from './components/Dashboard.tsx';
import AppliedLoansPage from './components/appliedLoans.tsx';  // Make sure this import is correct
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/apply-loan" element={<LoanApplicationForm />} />
          <Route path="/applied-loans" element={<AppliedLoansPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
