import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'

import Navbar from './components/Navbar'

import { headers } from './lib/headers'

function App() {

  useEffect(() => {
    async function getData() {
      const res = await axios.get('http://localhost:8000/rooms/', headers)
      console.log(res)
    }
    getData()
  }, [])

  return (
    <div className="app">
      <header className="app_header">
        <Navbar />
      </header>
    </div>
  );
}

export default App;
