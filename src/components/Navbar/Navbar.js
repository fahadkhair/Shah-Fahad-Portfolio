import { Avatar } from '@mui/material';
// import { styled } from '@mui/material/styles';
import React from 'react';
import { Link } from 'react-router-dom';
// import logo from '../images/Lognpmo.png';
import './Navbar.css';
import { deepOrange } from '@mui/material/colors';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    <Avatar sx={{ bgcolor: deepOrange[500] }}>SF</Avatar>
                    {/* <img src={logo} alt="Logo" className="navbar-logo" /> */}
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/Home">Home</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link
                                className="nav-link dropdown-toggle"
                                to="#"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Projects
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="/ButtonChange">Button Change</Link></li>
                                <li><Link className="dropdown-item" to="/List">List To Do</Link></li>
                                <li><Link className="dropdown-item" to="/Text">Toggle & Text Input</Link></li>
                                <li><Link className="dropdown-item" to="/DataFetcher">Data Fetcher</Link></li>
                                <li><Link className="dropdown-item" to="/ClickComponent">Click Component</Link></li>
                                <li><Link className="dropdown-item" to="/UseEffect">Use Effect</Link></li>
                                <li><Link className="dropdown-item" to="/Todo">ToDo Context</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/About">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Login">Login</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
}