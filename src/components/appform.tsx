import './appform.css';  // Import the CSS file

import React, { useState } from 'react';

type FormData = {
  fullName: string;
  loanAmount: number;
  loanTenure: number;
  employmentStatus: string;
  reason: string;
  agreeToTerms: boolean;
};

const LoanApplicationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    loanAmount: 0,
    loanTenure: 0,
    employmentStatus: '',
    reason: '',
    agreeToTerms: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
  
    if (type === 'checkbox') {
      // Cast target as HTMLInputElement to access 'checked' property
      setFormData({
        ...formData,
        [name]: (e.target as HTMLInputElement).checked
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Perform form validation and submission
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Full name as it appears on bank account</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>How much do you need?</label>
        <input
          type="number"
          name="loanAmount"
          value={formData.loanAmount}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Loan tenure (in months)</label>
        <input
          type="number"
          name="loanTenure"
          value={formData.loanTenure}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Reason for loan</label>
        <textarea
          name="reason"
          value={formData.reason}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleChange}
          />
          I have read and accept the terms
        </label>
      </div>

      <button type="submit">Submit</button>

      <div className="chart-container">
        {/* Placeholder for Chart */}
        <canvas id="loanChart"></canvas>
      </div>
    </form>
  );
};

export default LoanApplicationForm;
