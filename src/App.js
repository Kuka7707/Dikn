import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header.jsx';
import Nav from './Components/Navbar/Nav.jsx';
import Profile from './Pages/Profile/Profile.jsx';
import Dialogs from './Pages/Dialogs/Dialogs.jsx';
import Picture from './Pages/Picture/Picture.jsx';
import News from './Pages/News/News.jsx';
import { Route } from 'react-router-dom';



function App(props) {
  return (
    <div className="wrap">
      <Header />
      <Nav state={props.state.navbarFriends} />
      <div className="content">
        {/* <Route path="/profile" component={Profile} /> */}

        <Route path="/profile" render={() => (<Profile profilePage={props.state.profilePage} addNewPost={props.addNewPost} updateText={props.updateText} />)} />
        <Route path="/dialogs" render={() => (<Dialogs state={props.state.dialogsPage}  addDialogText={props.addDialogText} GoText={props.GoText} />)} />
        <Route path="/picture" render={() => (<Picture />)} />
        <Route path="/news" render={() => (<News />)} />
      </div>
    </div>
  );
}

export default App;
