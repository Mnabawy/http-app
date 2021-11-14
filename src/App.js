import React from "react";
import Axios from "axios";

import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  state = {
    posts: [],
    url: "https://jsonplaceholder.typicode.com/posts",
  };

  async componentDidMount() {
    const { data: posts } = await Axios.get(this.state.url);
    this.setState({ posts });
  }

  handleAdd = async () => {
    const newPost = {
      title: "test post",
      body: "test post body",
    };
    const { data: post } = await Axios.post(this.state.url, newPost);
    const posts = [...this.state.posts];
    posts.unshift(post);
    this.setState({ posts });
  };

  handleUpdate = id => {
    const updatePost = {
      title: "new post teststs",
      body: "new post body",
    };

    // update the post
    const posts = [...this.state.posts];
    const index = posts.findIndex(p => p.id === id);

    posts[index] = updatePost;

    this.setState({ posts });
  };

  handleDelete = id => {
    const { posts: allPosts } = this.state;
    const posts = allPosts.filter(p => p.id !== id);
    this.setState({ posts });
  };

  render() {
    const { posts } = this.state;
    return (
      <div className="App">
        <button className="btn btn-primary" onClick={this.handleAdd}>
          add post
        </button>
        {`displaying ${this.state.posts.length} posts`}
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post, key) => (
              <tr key={key}>
                <td>{post.title}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => this.handleUpdate(post.id)}
                  >
                    update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => this.handleDelete(post.id)}
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
