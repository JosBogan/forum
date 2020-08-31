// Libraries
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

// Styles
import './App.css';

// Components
import Navbar from './components/Navbar'
import Rooms from './components/Rooms'

function App() {

  return (
    <BrowserRouter>
      <div className="app">
        <header className="app_header">
          <Navbar />
          <Switch>
            <Route path="/rooms" component={Rooms}/>
          </Switch>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
