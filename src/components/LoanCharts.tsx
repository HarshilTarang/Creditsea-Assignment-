import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement);

const LoanCharts: React.FC = () => {
  const barData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    datasets: [
      {
        label: 'Total Loans',
        data: [12000, 19000, 30000, 50000, 20000, 30000, 40000, 70000, 60000],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    datasets: [
      {
        label: 'Outstanding Loans',
        data: [10000, 15000, 25000, 40000, 15000, 25000, 35000, 60000, 50000],
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false,
        tension: 0.1,
      },
    ],
  };

  return (
    <section className="loan-charts">
      <h2>Loans Overview</h2>
      <div className="chart-container">
        <Bar data={barData} />
      </div>
      <div className="chart-container">
        <Line data={lineData} />
      </div>
    </section>
  );
};

export default LoanCharts;
