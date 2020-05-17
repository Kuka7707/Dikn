import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header.jsx';
import Nav from './Components/Navbar/Nav.jsx';
import Profile from './Pages/Profile/Profile.jsx';
import Dialogs from './Pages/Dialogs/Dialogs.jsx';
import Picture from './Pages/Picture/Picture.jsx';
import News from './Pages/News/News.jsx';
import { BrowserRouter, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter className="body">
      <div className="wrap">
        <Header />
        <Nav />
        <div className="content">
        <Route path="/profile" component={Profile} />
        <Route path="/dialogs" component={Dialogs} />
        <Route path="/picture" component={Picture} />
        <Route path="/news" component={News} />        
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
