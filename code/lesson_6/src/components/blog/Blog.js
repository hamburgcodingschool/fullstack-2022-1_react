import React, { useState, useEffect } from 'react';
import './Blog.css';

// function Blog () {
//   return (
//     <div className="App">
      
//     </div>
//   );
// }


// https://jsonplaceholder.typicode.com/posts

const Blog = () => {

    const [blog, setBlog] = useState([]);

    // fetch('https://jsonplaceholder.typicode.com/posts', { 
    //     params: {
    //         method: 'GET' // POST, PULL, DELETE
    //     }
    // })
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setBlog(json))
            .catch(err => console.log(err))
    }, [])

    return (
      <div className="blog">
          {
              blog.map(blogItem => {
                  return(
                    <ul key={blogItem.id}>
                        <li>User ID {blogItem.id}</li>
                        <li>{blogItem.userId}. {blogItem.title}</li>
                    </ul>
                  )
              })
          } 
      </div>
    );
}

export default Blog;
