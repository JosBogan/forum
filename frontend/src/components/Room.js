// Libraries
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

// Components


// Lib
import { headers } from '../lib/headers'


function Room(props) {

  useEffect(() => {

    async function getPosts() {
      
      const room = props.match.params.room_name.toLowerCase()

      const res = await axios.get(`http://localhost:8000/rooms/${room}/posts/`)
      console.log(res.data)
    }

    getPosts()

  })

  return (
    <div>
      Room
    </div>
  )
}

export default Room