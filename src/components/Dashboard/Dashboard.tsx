import React from 'react';
import Navbar from '../Navbar/Navbar';
import Sliders from '../Sliders/Sliders';
import Summary from '../Summary/Summary';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="sliders-and-summary">
        <Sliders />
        <Summary />
      </div>
    </div>
  );
}

export default Dashboard;
