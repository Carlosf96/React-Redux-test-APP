import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postsActions'
class Posts extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/posts')//fetch data from url
  //     .then(res => res.json())//return promise and map result to json
  //     .then(data=> this.setState({posts: data}))
  //     //.then(data => console.log(data));//testing if fetch working correctly
  //   console.log('Component is Mounted')
  // }
  render() {
    const postItems = this.props.posts.map(post => 
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

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  posts: state.posts.items
})

export default connect(mapStateToProps, { fetchPosts })(Posts);