import React, { Component } from "react";
import Post from "./post";

class Posts extends Component {
  state = {
    post: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
    ],
  };

  render() {
    return (
      <div>
        {this.state.post.map((post) => (
          <Post key={post.id} value={post.value} />
        ))}
      </div>
    );
  }
}

export default Posts;
