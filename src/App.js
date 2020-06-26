import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header.jsx';
import Nav from './Components/Navbar/Nav.jsx';
import Profile from './Pages/Profile/Profile.jsx';
import Picture from './Pages/Picture/Picture.jsx';
import News from './Pages/News/News.jsx';
import { Route, Redirect } from 'react-router-dom';
import DialogsContainer from './Pages/Dialogs/DialogsContainer';
import UserContainer from './Pages/Users/UsersContainer';




function App(props) {
  return (
    <div className="wrap">
      <Header />
      <Nav />
      <div className="content">
        {/* <Route path="/profile" component={Profile} /> */}

        <Route path="/profile" render={() => (<Profile/>)} />
        <Route path="/dialogs" render={() => (<DialogsContainer />)} />


        <Route path="/picture" render={() => (<Picture />)} />
        <Route path="/news" render={() => (<News />)} />
        <Route path="/users" render={() => (<UserContainer/>)} />

        {/* <Redirect path="/" to="/profile" /> */}
      </div>
    </div>
  );
}

export default App;
