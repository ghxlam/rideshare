import React, { useState } from 'react';
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

  const generateLicensePlate = () => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const digits = '0123456789';
    let plate = '';
    for (let i = 0; i < 3; i++) {
      plate += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    plate += '-';
    for (let i = 0; i < 4; i++) {
      plate += digits.charAt(Math.floor(Math.random() * digits.length));
    }
    return plate;
  };

  const generateUCID = () => {
    const letters = 'abcdefghijklmmopqrstuvwxyz';
    const digits = '0123456789';
    let ucid = '';
    ucid += letters.charAt(Math.floor(Math.random() * letters.length));
    ucid += letters.charAt(Math.floor(Math.random() * letters.length));
    for (let i = 0; i < 3; i++) {
      ucid += digits.charAt(Math.floor(Math.random() * digits.length));
    }
    return ucid;
  };

  const [rides, setRides] = useState([
    {
      status: 'No driver assigned yet',
      date: '11/30/2024',
      time: '3:00 PM',
      pickupLocation: '45 Campus Lane, Jersey City, NJ',
      destination: 'NJIT, 184-198 Central Ave, Newark, NJ 07103',
      cost: '$15.00',
      driverName: 'Ghulam Ahmed',
      licensePlate: generateLicensePlate(),
      ucid: 'ga322',
    },
  ]);

  const [formDetails, setFormDetails] = useState({
    pickupLocation: '',
    date: '',
    time: '',
    cost: '',
  });

  const calculateCost = (pickupLocation) => {
    const baseFare = 5.0; // Base fare in dollars
    const perMileRate = 1.5; // Rate per mile in dollars
    const estimatedMiles = Math.random() * 10 + 1; // Random distance between 1 and 10 miles
    return `$${(baseFare + estimatedMiles * perMileRate).toFixed(2)}`;
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const rideCost = calculateCost(formDetails.pickupLocation);

    const newRide = {
      status: 'No driver assigned yet',
      date: formDetails.date,
      time: formDetails.time,
      pickupLocation: formDetails.pickupLocation,
      destination: 'NJIT, 184-198 Central Ave, Newark, NJ 07103',
      cost: rideCost,
      driverName: 'John Doe',
      licensePlate: generateLicensePlate(),
      ucid: generateUCID(),
    };

    setRides((prevRides) => [...prevRides, newRide]);

    setFormDetails({
      pickupLocation: '',
      date: '',
      time: '',
      cost: '',
    });
  };

  return (
    <div className="ride-screen">
      <h1>Ride</h1>

      <div className="scrollable-content">
        {/* Approved Rides Section */}
        <div className="section">
          <h2>
            Approved Rides <span className="checkmark">✔</span>
          </h2>
          <div className="ride-box approved">
            <p>
              <strong>Driver:</strong> Ghulam Ahmed <small>(Approved Driver, Student Driver <span className="checkmark">✔</span>)</small>
            </p>
            <p>
              <strong>License Plate:</strong> {generateLicensePlate()}
            </p>
            <p>
              <strong>NJIT UCID:</strong> ga322
            </p>
            <p>
              <strong>Date:</strong> 12/7/2024
            </p>
            <p>
              <strong>Time:</strong> 10:00 AM
            </p>
            <p>
              <strong>Pick-up Location:</strong> 123 University Road, Newark, NJ
            </p>
            <p>
              <strong>Destination:</strong> NJIT, 184-198 Central Ave, Newark, NJ 07103
            </p>
            <p>
              <strong>Cost:</strong> $10.00
            </p>
          </div>
        </div>

        {/* Scheduled Rides Section */}
        <div className="section">
          <h2>Scheduled Rides</h2>
          {rides.map((ride, index) => (
            <div className="ride-box scheduled" key={index}>
              <p>
                <strong>Status:</strong> {ride.status}
              </p>
              <p>
                <strong>Date:</strong> {ride.date}
              </p>
              <p>
                <strong>Time:</strong> {ride.time}
              </p>
              <p>
                <strong>Pick-up Location:</strong> {ride.pickupLocation}
              </p>
              <p>
                <strong>Destination:</strong> {ride.destination}
              </p>
              <p>
                <strong>Estimated Cost:</strong> {ride.cost}
              </p>
            </div>
          ))}
        </div>

        {/* Schedule a New Ride Section */}
        <div className="section">
          <h2>Schedule a New Ride</h2>
          <form className="schedule-form" onSubmit={handleFormSubmit}>
            <label>
              Pick-up Location:
              <input
                type="text"
                name="pickupLocation"
                value={formDetails.pickupLocation}
                onChange={handleInputChange}
                placeholder="Enter pick-up location"
                required
              />
            </label>
            <label>
              Pick-up Date:
              <input
                type="date"
                name="date"
                value={formDetails.date}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Pick-up Time:
              <input
                type="time"
                name="time"
                value={formDetails.time}
                onChange={handleInputChange}
                required
              />
            </label>
            <p>
              <strong>Destination:</strong> NJIT, 184-198 Central Ave, Newark, NJ 07103 (Locked)
            </p>
            <button type="submit" className="schedule-button">
              Schedule Ride
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};



const Drive = () => {
  const [availableDrives, setAvailableDrives] = useState([
    {
      status: 'Available for acceptance',
      date: '12/7/2024',
      time: '2:00 PM',
      pickupLocation: '123 University Road, Newark, NJ',
      destination: 'NJIT, 184-198 Central Ave, Newark, NJ 07103',
      cost: '$12.00',
      driverName: 'John De Dios',
      licensePlate: 'FGR-1068',
      ucid: 'jd223',
    },
  ]);

  const [upcomingDrives, setUpcomingDrives] = useState([]);

  const acceptDrive = (index) => {
    const acceptedDrive = availableDrives[index];
    const newUpcomingDrives = [...upcomingDrives, acceptedDrive];
    setUpcomingDrives(newUpcomingDrives);

    const newAvailableDrives = availableDrives.filter((_, i) => i !== index);
    setAvailableDrives(newAvailableDrives);
  };

  return (
    <div className="drive-screen">
      <h1>Drive</h1>
      <div className="scrollable-content">
        {/* Upcoming Drives Section */}
        <div className="section">
          <h2>
            Upcoming Drives
          </h2>
          {upcomingDrives.map((drive, index) => (
            <div className="ride-box upcoming" key={index}>
              <p>
                <strong>Status:</strong> Accepted
              </p>
              <p>
                <strong>Rider:</strong> John Aaron De Dios <small>(Approved Student <span className="checkmark">✔</span>)</small>
              </p>
              <p>
                <strong>NJIT UCID:</strong> jd229
              </p>
              <p>
                <strong>Date:</strong> {drive.date}
              </p>
              <p>
                <strong>Time:</strong> {drive.time}
              </p>
              <p>
                <strong>Pick-up Location:</strong> {drive.pickupLocation}
              </p>
              <p>
                <strong>Destination:</strong> {drive.destination}
              </p>
              <p>
                <strong>Estimated Pay:</strong> {drive.cost}
              </p>
            </div>
          ))}
        </div>

        {/* Available Drives Section */}
        <div className="section">
          <h2>Available Drives</h2>
          {availableDrives.map((drive, index) => (
            <div className="drive-box available" key={index}>
              <p>
                <strong>Status:</strong> {drive.status}
              </p>
              <p>
                <strong>Rider:</strong> John Aaron De Dios <small>(Approved Student <span className="checkmark">✔</span>)</small>
              </p>
              <p>
                <strong>NJIT UCID:</strong> jd229
              </p>
              <p>
                <strong>Date:</strong> {drive.date}
              </p>
              <p>
                <strong>Time:</strong> {drive.time}
              </p>
              <p>
                <strong>Pick-up Location:</strong> {drive.pickupLocation}
              </p>
              <p>
                <strong>Destination:</strong> {drive.destination}
              </p>
              <p>
                <strong>Estimated Pay:</strong> {drive.cost}
              </p>
              <button onClick={() => acceptDrive(index)} className="accept-button">
                Accept Drive
              </button>
            </div>
          ))}
        </div>
      </div>
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
