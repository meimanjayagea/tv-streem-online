import React from 'react';
import logo from '../../logo.svg';
import '../../App.css';

const Dashboard = () => {
  return (
    <div className="bg-slate-400" style={{ height: 'calc(800px)' }}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </div>
    </div>
  );
};

export default Dashboard;
