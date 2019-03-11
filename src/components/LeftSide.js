import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export default class LeftSide extends Component {
  render() {
    return (
      <div>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/topics">Topics</Link>
            </li>
        </ul>
      </div>
    )
  }
}
