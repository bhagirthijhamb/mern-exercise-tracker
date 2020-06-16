import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render(){
        return (
          <nav className="navbarStyle navbar navbar-dark bg-dark navbar-expand-lg">
            <Link to="/" className="navbar-brand">
              ExerciseTracker
            </Link>

            <div className="navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link as={Link} to="/" className="nav-link">
                    Exercises
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link as={Link} to="/create" className="nav-link">
                    Create Exercises Log
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link as={Link} to="/user" className="nav-link">
                    Create User
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        );
    }
} 