import Axios from "axios";
import React from "react";

class postForm extends React.Component {
  state = {
    post: {
      title: "",
      body: "",
    },
  };

  handleChange = e => {
    const { value, name } = e.target;
    const post = { ...this.state.post };
    post[name] = value;
    this.setState({ post });
  };

  handleSubmit = e => {
    e.preventDefault();
    Axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      this.state.post
    ).then(res => console.log(res));
    this.props.history.push("/");
  };

  render() {
    const { title, body } = this.state.post;
    return (
      <div>
        <div className="card card-body">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="body"
              value={body}
              onChange={this.handleChange}
            />
            <input type="submit" value="submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default postForm;
