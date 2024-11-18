import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import map from './mapimagephone.jpg'

const Home = () => {
  return (
    <div className="home-screen">
      {/*<h1>Home Screen</h1>*/}
      <img src={map} alt="Home-Screen" style={{ width: '433px', height: '820px' }} />
      {/* Placeholder for homescreen */}
    </div>
  );
};

const Ride = () => {
  return (
    <div className="ride-screen">
      <h1>Ride Screen</h1>
      {/* Placeholder for ride screen */}
    </div>
  );
};

const Drive = () => {
  return (
    <div className="drive-screen">
      <h1>Drive Screen</h1>
      {/* Placeholder for drive screen */}
    </div>
  );
};

const Account = () => {
  return (
    <div className="account-screen">
      <h1>Account Screen</h1>
      {/* Placeholder for account */}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ride" element={<Ride />} />
          <Route path="/drive" element={<Drive />} />
          <Route path="/account" element={<Account />} />
        </Routes>

        <div className="bottom-nav">
          <Link to="/" className="nav-button">
            <i className="fa fa-home"></i>
            <p>Home</p>
          </Link>
          <Link to="/ride" className="nav-button">
            <i className="fa fa-arrow-up"></i>
            <p>Ride</p>
          </Link>
          <Link to="/drive" className="nav-button">
            <i className="fa fa-car"></i>
            <p>Drive</p>
          </Link>
          <Link to="/account" className="nav-button">
            <i className="fa fa-user"></i>
            <p>Account</p>
          </Link>
        </div>
      </div>
    </Router>
  );
};

export default App;
