// Libraries
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

// Styles
import './App.css';

// Components
import Navbar from './components/Navbar'
import Rooms from './components/Rooms'
import Room from './components/Room'
import Login from './components/auth/Login'
import Register from './components/auth/Register'

function App() {

  return (
    <BrowserRouter>
      <div className="app">
        <header className="app_header">
          <Navbar />
          <Switch>
            <Route path="/rooms" component={Rooms}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/:room_name" component={Room}/>
          </Switch>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
