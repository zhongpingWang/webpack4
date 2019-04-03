import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

// React component
export default class Header extends Component { 

    render() {
        return (
            <ul className="navHeader">
              <li>
                <NavLink exact activeClassName="selected" to="/">Home</NavLink>
              </li>
              <li>
                <NavLink exact activeClassName="selected" to="/about">About</NavLink>
              </li>
              <li>
                <NavLink exact  activeClassName="selected" to="/topics">Topics</NavLink>
              </li>
            </ul>
          );
    }
  }  
  