import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PostForm from "./postForm";
import "./index.css";
import App from "./App";

ReactDOM.render(
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/post/new" component={PostForm} />
      </Switch>
    </Router>,
  document.getElementById("root")
);
