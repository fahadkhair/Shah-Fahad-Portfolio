import React from 'react'
import { Link } from 'react-router-dom'
import logo from './images/Logo.png'


export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <img src={logo} className="fa fa-home" style={{ color: 'white', fontWeight: 'bold', width: '80px' }} />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" style={{ color: 'white', fontWeight: 'bold' }} aria-current="page" to="/Home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" style={{ color: 'white', fontWeight: 'bold' }} aria-current="page" to="/ButtonChange">Button Change</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" style={{ color: 'white', fontWeight: 'bold' }} to="/List">List To Do</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' style={{ color: 'white', fontWeight: 'bold' }} to="/Text">Toggle & Text Input</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" style={{ color: 'white', fontWeight: 'bold' }} to="/DataFetcher">Data Fetcher</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" style={{ color: 'white', fontWeight: 'bold' }} to="/ClickComponent">Click Component</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" style={{ color: 'white', fontWeight: 'bold' }} to="/UseEffect">Use Effect</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" style={{ color: 'white', fontWeight: 'bold' }} to="/About">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" style={{ color: 'white', fontWeight: 'bold' }} to="/components/Contact/Contact">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" style={{ color: 'white', fontWeight: 'bold' }} to="/components/LoginSignUp/LoginSignup">Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
