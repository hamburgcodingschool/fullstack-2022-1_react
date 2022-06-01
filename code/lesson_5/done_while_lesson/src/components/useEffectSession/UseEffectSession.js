import React, { useCallback, useEffect, useState } from 'react';

const UseEffectSession = () => {

    /// const [info, setInfo] = useState('posts');

    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    console.log(posts)

    // console.log('render');

    // useEffect(() => {
    //     console.log('state is changed');
    // }, [info])

    // for(var i = 0; i < 100000; i++) {

    // }

    
    // const fetchData = () => {
    //     fetch('https://jsonplaceholder.typicode.com/todos')
    //     .then(response => response.json())
    //     .then(json => console.log(json))
    // }

    // get, post, pull, delete 
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos') // 1step I am calling my api, request get
        .then((response) => response.json())
        // .then((dataJson) => console.log(dataJson))
        .then((json) => setPosts(json), setLoading(true))
    }, [])
    console.log(posts)

    // const example () => () {
            // process 
    // }

    // function examlpe () {
            // process 
    // }

    if(loading) {
        return (
            <h1>Loading .... </h1>
        )
    }

    return (
        <>
            {/* <button onClick={() => setInfo('texts')}>Click me texts</button>
            <button onClick={() => setInfo('images')}>Click me images</button>
            <button onClick={() => setInfo('posts')}>Click me posts </button> */}

            {/* <button onClick={fetchData}>Get data</button> */}

            <section className='post-list'>
                {
                    posts.map(post => {
                        return(
                            <div className='post-item' key={post.id}>
                                <h5 style={{
                                    color: '#fff'
                                }}>
                                    <span>{post.id}. </span>
                                    {post.title}
                                    <span> user id {post.userId}</span>
                                </h5>
                            </div>
                        )
                    })
                }
            </section>
        </>
    )

}

export default UseEffectSession;
