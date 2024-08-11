import React from 'react';
import Navbar from './Navbar';
import ProjectOverview from './ProjectOverview';
import ResourceManagement from './ResourceManagement';
import BudgetTracking from './BudgetTracking';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-content">
        <div className="top-section">
          <ProjectOverview />
          <ResourceManagement />
        </div>
        <BudgetTracking />
      </div>
    </div>
  );
}

export default App;
