// Libraries
import React, { useState, useEffect } from 'react';
import axios from 'axios'

// Components

// Lib
import { headers } from '../lib/headers'

function Rooms() {

  const [rooms, setRooms] = useState([])

  useEffect(() => {
    async function getData() {
      const res = await axios.get('http://localhost:8000/rooms/', headers)
      setRooms(res.data)
    }
    getData()
  }, [])

  return (
    <div>
      {rooms.map(item => <div key={rooms.name}>{item.name}</div>)}
    </div>
  )
}

export default Rooms