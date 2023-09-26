import '../css/Home.css'
import Post from './Post'
import { useEffect } from 'react'
import React from 'react'
import { useState } from 'react'

function Home () {

    const [posts, setPosts] = useState([])

    useEffect(() => {
      fetch('http://localhost:2222/post').then(response => {
        response.json().then(posts => {
          setPosts(posts)
        })
      })
    }, [])

    return (
    <main>
    <>
      {posts.length > 0 && posts.map(post => (
        <Post {...post} />
      ))}
    </>
    </main>
    )
}

export default Home