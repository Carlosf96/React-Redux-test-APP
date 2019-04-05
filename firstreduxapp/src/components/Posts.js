import React, { Component } from 'react'

class Posts extends Component {

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')//fetch data from url
      .then(res => res.json())//return promise and map result to json
      .then(data => console.log(data));//testing if fetch working correctly 
    console.log('Component is Mounted')
  }
  render() {
    return (
      <div>
       <h1>Posts</h1>
      </div>
    )
  }
}


export default Posts;