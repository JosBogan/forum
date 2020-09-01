// Libraries
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

// Components


// Lib
import { headers } from '../lib/headers'


function Room(props) {

  const [posts, setPosts] = useState([])

  useEffect(() => {

    async function getPosts() {
      
      try {
        const room = props.match.params.room_name.toLowerCase()
  
        const res = await axios.get(`http://localhost:8000/rooms/${room}/posts/`)
  
        setPosts(res.data)

      } catch {
        console.log('ERROR')
      }
    }

    getPosts()

  }, [])
  return (
    <div>
      {console.log(posts)}
      <h1>{}</h1>
      <div className="posts_container">
        {posts.map(item => (
          <div className="post">
            <h3>
              {item.title}
            </h3>
            <div className="post_stats_container">
              <div className="post_stat">{item.upvotes}</div>
              <div className="post_stat">{item.views}</div>
            </div>
          </div>
          )
        )}
      </div>
    </div>
  )
}

export default Room