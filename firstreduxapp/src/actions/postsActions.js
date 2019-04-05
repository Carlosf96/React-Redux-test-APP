import { FETCH_POSTS, NEW_POST } from "./types";

export const fetchPosts = () => dispatch => {
  console.log("Fetching");
  fetch("https://jsonplaceholder.typicode.com/posts") //fetch data from url
    .then(res => res.json()) //return promise and map result to json
    .then(posts =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      })
    );
  //.then(data => console.log(data));//testing if fetch working correctly
};

export const createPosts = postData => dispatch => {
  console.log("creating Post");
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(post => dispatch({
      type: NEW_POST,
      payload: post
    }));
  //.then(data => console.log(data));//testing if fetch working correctly
};
