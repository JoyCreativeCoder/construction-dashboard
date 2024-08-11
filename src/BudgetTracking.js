import React from 'react';
import './BudgetTracking.css';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BudgetTracking = () => {
  const data = {
    labels: ['Labor', 'Materials', 'Overhead'],
    datasets: [
      {
        label: 'Planned Spending',
        data: [5000, 3000, 2000],
        backgroundColor: '#8BC34A', // Light Green color for Planned Spending
      },
      {
        label: 'Actual Spending',
        data: [4500, 3200, 2200],
        backgroundColor: '#FF5722', // Deep Orange color for Actual Spending
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#E0E0E0' // Light gray color for the legend text
        }
      },
      title: {
        display: true,
        text: 'Budget Overview',
        color: '#E0E0E0', // Light gray color for the title text
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#E0E0E0' // Light gray color for x-axis labels
        },
      },
      y: {
        ticks: {
          color: '#E0E0E0' // Light gray color for y-axis labels
        },
      },
    },
  };

  return (
    <div className="budget-tracking">
      <h2>Budget Tracking</h2>
      <div className="budget-summary">
        <Bar data={data} options={options} />
      </div>
      <div className="utilization-indicators">
        <div className="indicator">
          <p>Labor</p>
          <div className="progress-bar" style={{ width: '90%', backgroundColor: '#8BC34A' }}>90%</div>
        </div>
        <div className="indicator">
          <p>Materials</p>
          <div className="progress-bar" style={{ width: '80%', backgroundColor: '#FF5722' }}>80%</div>
        </div>
        <div className="indicator">
          <p>Overhead</p>
          <div className="progress-bar" style={{ width: '110%', backgroundColor: '#FFC107' }}>110%</div>
        </div>
      </div>
      <div className="cost-breakdown">
        <h3>Cost Breakdown</h3>
        <p>Labor: ₦4500</p>
        <p>Materials: ₦3200</p>
        <p>Overhead: ₦2200</p>
      </div>
    </div>
  );
};

export default BudgetTracking;
