import React, { useState, useEffect } from 'react';

export default function FetchMultiplePosts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then((data) => {
                setPosts(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);  // <-- dependency array ensures the effect only runs once

    return (
        <div>
            <ul>
                {posts && posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}
