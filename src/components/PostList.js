import React, { useEffect, useState } from 'react'

export default function PostList() {
  let [posts, setPosts] = useState([])
  //run a api after render component
  useEffect(function () {
    fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json()).then(function (data) {
      setPosts(data)

    })
  }, [])
  return (
    <div>
      <h3>Post List</h3>
      <div className='row'>
        {(posts.length != 0) ? posts.map(function (item) {
          return <div key={item.id} className='col-md-12'>
                    <div className='card mb-3'>
                      <div className='card-body'>
                        <h4>{item.title}</h4>
                        <p>{item.body}</p>
                        <button className='btn btn-sm btn-secondary'>Read More</button>
                      </div>
                    </div>
          </div>
        }) : ''}
      </div>
    </div>
  )
}
