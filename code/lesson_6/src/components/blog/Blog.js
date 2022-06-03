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

    // limitation for the quantity of visible items 
    const LIMIT = 7;
    const [state, setState] = useState(LIMIT);

    // defining the default value (state) of array
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

    const loadMore = () => {
        setState(state + 40);
        console.log(state);

        console.log(blog.length)

        if(state === blog.length || state > blog.length) {
            alert('There is no information')
        }
    }


    const loadLess = () => {
        setState(state - 10);
        console.log(state);

        console.log(blog.length)

        if(state === 0 || state < 0) {
            alert('There is no information')
            return state;
        }
    }
    // if (true) {
    //     console.log('color green')
    // } else {
    //     console.log('color red')
    // }

    (true) ? console.log('color green') : console.log('color red')

    return (
      <div className="blog">
          {
              blog.slice(0, state).map(blogItem => {
                  return(
                    <ul key={blogItem.id}>
                        <li>User ID {blogItem.id}</li>
                        <li>{blogItem.userId}. {blogItem.title}</li>
                    </ul>
                  )
              }) 
          } 

          <div className='btn-list'>
            <button 
                onClick={loadMore}
                style={{
                    backgroundColor: (state === blog.length || state > blog.length) ? 'red' : 'green',
                    textTransform: (state === blog.length || state > blog.length) ? 'uppercase' : 'lowercase'
                }}
            >Load more</button>
              <button onClick={loadLess} disabled={state === 0 ? true : false}>Load less</button>
          </div>

            {
                state === 0 ? <h1>There is no items</h1> : ''
            }
          
      </div>
    );
}

export default Blog;
