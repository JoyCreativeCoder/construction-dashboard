import React from "react";
import "./ProjectOverview.css"; // Import the CSS file for styling

const ProjectOverview = () => {
  return (
    <section className="project-overview">
      <div className="project-header">
        <h2>Project Alpha</h2>
        <p className="summary">
          A detailed overview of Project Alpha with milestones, team, and
          progress.
        </p>
      </div>
      <div className="status-section">
        <h3>Project Status</h3>
        <div className="status-details">
          <div className="status-item">
            <div className="icon progress-icon"><span class="material-symbols-outlined">
clock_loader_20
</span></div>
            <div className="status-text">
              <span className="label">Overall Progress</span>
              <div className="progress-circle">
                <svg width="100" height="100">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="#666666"
                    strokeWidth="10"
                    fill="none"
                  ></circle>
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="#FF5722"
                    strokeWidth="10"
                    fill="none"
                    strokeDasharray="282.6"
                    strokeDashoffset="94.0"
                  ></circle>
                </svg>
                <div className="progress-text">65%</div>
              </div>
            </div>
          </div>
          <div className="status-item">
            <div className="icon deadline-icon">
              <span class="material-symbols-outlined">calendar_month</span>
            </div>
            <div className="status-text">
              <span className="label">Deadline</span>
              <p>August 30, 2024</p>
            </div>
          </div>
          <div className="status-item">
            <div className="icon manager-icon">
              <span class="material-symbols-outlined">person</span>
            </div>
            <div className="status-text">
              <span className="label">Project Manager</span>
              <p>Jane Desmond</p>
            </div>
          </div>
        </div>
      </div>
      <div className="milestones">
        <h3>Upcoming Milestones</h3>
        <ul>
          <li>
            <strong>Phase 1:</strong> Design Completion - August 15, 2024
          </li>
          <li>
            <strong>Phase 2:</strong> Development Start - August 20, 2024
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ProjectOverview;
