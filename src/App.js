import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Profile from './Pages/Profile';





function App() {
  return (
    <div>
      <div className="wrap">
        <Header/>
        <Nav/>
        <Profile/>
      </div>

    </div>
  );
}

export default App;
