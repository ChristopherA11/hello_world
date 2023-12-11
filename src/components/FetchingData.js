import React, { useEffect, useState } from 'react'
import axios from 'axios'

const FetchingData = () => {
    const [loading,setLoading] = useState(true)
    const [post,setPost] = useState({})
    const [error,setError] = useState("")

   useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(res => {
        setLoading(false)
        setError("")
        setPost(res.data)
    })
    .catch (err => {
        setLoading(false)
        setError("some error")
        setPost({})
    })
   },[]) 
  return (
    <div>
        {loading ? "loading": post.title}
        {error ? error : null}
    </div>
  )
}

export default FetchingData