import React, { useState, useEffect } from 'react';

export default function FetchMultiplePosts() {
    const [posts, setPosts] = useState();
    
    useEffect(()=>{
        fetch.get('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>{
            console.log(res)
            setPosts(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    })
  return (
    <div>
        <ul>
            {posts.map((post)=>(
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    </div>
  )
}


