// Libraries
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

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
      {rooms.map(item => (
        <Link key={rooms.name} to={`/${item.id}`}>{item.name}</Link>
        )
      )}
    </div>
  )
}

export default Rooms