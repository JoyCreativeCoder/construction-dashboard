import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">Dashboard</h1>
      <div className="nav-links">
        <a href="#project-overview">Project Overview</a>
        <a href="#resource-management">Resource Management</a>
        <a href="#budget-tracking">Budget Tracking</a>
      </div>
    </nav>
  );
};

export default Navbar;
