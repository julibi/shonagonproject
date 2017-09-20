import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// This imports also need to have proper exports!
import Home from "./components/Home";

export const MyRouter = () =>
  <Router>
    <div className="container">
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to="/">Shonagon Project</Link>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/readStories">Gelesen</Link></li>
            </ul>
          </div>
        </div>
      </nav>
      <Route path="/" component={Home} />
    </div>
  </Router>;

