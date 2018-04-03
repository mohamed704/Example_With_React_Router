import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from 'pages/Home';
import About from 'pages/About';
import Topics from 'pages/Topics';
import Header from 'pages/Header';

const BasicExample = () => (
  <Router>
    <div>
      <div className="header">
      <Header />
      </div>
      <div className="divRacine">
        <div className="divFils">
          <ul className="ul">
            <li className="li">
              <Link to="/">Home</Link>
            </li>
            <li className="li">
              <Link to="/about">About</Link>
            </li>
            <li className="li">
              <Link to="/topics">Topics</Link>
            </li>
          </ul>
        </div>
        <div className="divFils">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />
        </div>
      </div>
    </div>
  </Router>
);

export default BasicExample;
