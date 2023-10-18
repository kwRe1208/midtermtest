import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navigation extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Main Page</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                <Link className="nav-link" to="/">New Shop</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/newProduct">New Product</Link>
                </li>
            
            </ul>
            </div>
        </nav>
        )
    }
    
}