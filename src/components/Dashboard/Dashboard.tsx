import React from 'react';
import Navbar from '../Navbar/Navbar';
import Sliders from '../Sliders/Sliders';
import Summary from '../Summary/Summary';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <Navbar />
      <Sliders />
      <Summary />
    </div>
  );
}

export default Dashboard;
