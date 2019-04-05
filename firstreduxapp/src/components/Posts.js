import React, { Component } from 'react'

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')//fetch data from url
      .then(res => res.json())//return promise and map result to json
      .then(data=> this.setState({posts: data}))
      //.then(data => console.log(data));//testing if fetch working correctly
    console.log('Component is Mounted')
  }
  render() {
    const postItems = this.state.posts.map(post => 
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    );
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    )
  }
}


export default Posts;