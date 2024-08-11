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
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  return (
    <section className="resource-management">
      <h2>Resource Management</h2>
      <p>Overview of resource allocation will be displayed here.</p>
      <div className="chart-container">
        <Pie data={data} />
      </div>
    </section>
  );
};

export default ResourceManagement;
