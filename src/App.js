import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import map from './exampleMap1.png'
import placeholderImage from './placeholder-profile.jpg'

const Home = () => {
  return (
    <div className="home-screen">
      {/*<h1>Home Screen</h1>*/}
      <img src={map} alt="Home-Screen"/>
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
  const [userName, setUserName] = useState('John Doe');
  const [userEmail, setUserEmail] = useState('johndoe@example.com');
  const [userBio, setUserBio] = useState('I am the Storm that is approaching');
  const [profileImage, setProfileImage] = useState(placeholderImage);

  const handleUserName = () => {
    const newUserName = prompt('Edit your username', userName);
    if (newUserName !== null && newUserName.trim() !== ""){
      setUserName(newUserName);
    }
  };

  const handleUserEmail = () => {
    const newUserEmail = prompt('Enter new email', userEmail);
    if (newUserEmail !== null && newUserEmail.trim() !== "" && newUserEmail.includes("@") && newUserEmail.includes(".")){
      setUserEmail(newUserEmail);
    }
  };

  const handleEditBio = () => {
    const newBio = prompt('Edit your bio', userBio);
    if (newBio !== null && newBio.trim() !== ""){
      setUserBio(newBio);
    }
  };

  const handleEditImage = () => {
    const newImageUrl = prompt('Enter the URL of your new profile image: ');
    if (newImageUrl){
      setProfileImage(newImageUrl);
    }
  };
  return (
    <div className="account-screen">
      <h1>Profile</h1>
      <div className = "profile-info">
        <div className = "profile-image-container">
          <img
            src={profileImage}
            alt="Profile"
            className="profile-image"
          />
          <button onClick={handleEditImage} className="edit-image-btn">Change Image</button>
        </div>

        <div className="user-details">
          <h2>{userName}</h2>
          <button onClick={handleUserName} className = "edit username">Edit username</button>
          <p>{userEmail}</p>
          <button onClick={handleUserEmail} className = "edit email"> Edit email</button>
          <p className="bio">{userBio}</p>
          <button onClick={handleEditBio} className="edit-bio-tbn">Edit Bio</button>
        </div>

        <div ClassName="account-actions">
          <button className="logout-btn">Logout</button>
        </div>
      </div>
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

