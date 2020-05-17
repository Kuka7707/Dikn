import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header.jsx';
import Nav from './Components/Navbar/Nav.jsx';
import Profile from './Pages/Profile/Profile.jsx';





function App() {
  return (
    <div className="body">
      <div className="wrap">
        <Header />
        <Nav />
        <Profile />
      </div>

    </div>
  );
}

export default App;
