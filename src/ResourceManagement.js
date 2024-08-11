import React from "react";
import "./ResourceManagement.css";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const ResourceManagement = () => {
  const data = {
    labels: ["Labor", "Materials", "Equipment"],
    datasets: [
      {
        label: "Resource Allocation",
        data: [40, 35, 25],
        backgroundColor: ["#8BC34A", "#FF5722", "#FFC107"],
        hoverBackgroundColor: ["#7CB342", "#E64A19", "#FFA000"], 
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#FBFBFB',
          font: {
            size: 14
          }
        }
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            return `${tooltipItem.label}: ${tooltipItem.raw}%`;
          }
        }
      }
    },
    maintainAspectRatio: false,
  };

  return (
    <section className="resource-management">
      <h2>Resource Management</h2>
      <p className="overview-text">
        This section provides an overview of how resources are allocated in the project. 
        The Pie chart shows the proportion of each resource type.
      </p>
      <div className="chart-container">
        <h3>Resource Allocation</h3>
        <div className="chart-wrapper">
          <Pie data={data} options={options} />
        </div>
      </div>
      <div className="resource-details">
        <h3>Resource Details</h3>
        <table className="resource-table">
          <thead>
            <tr>
              <th>Resource Type</th>
              <th>Allocated (%)</th>
              <th>Cost (₦)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Labor</td>
              <td>40%</td>
              <td>5000</td>
            </tr>
            <tr>
              <td>Materials</td>
              <td>35%</td>
              <td>3000</td>
            </tr>
            <tr>
              <td>Equipment</td>
              <td>25%</td>
              <td>2000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ResourceManagement;
