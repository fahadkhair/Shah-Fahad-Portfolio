// import React from 'react';
// import { Link } from 'react-router-dom';
// import logo from './images/Logo.png';

// export default function Navbar() {
//     return (
//         <div>
//             <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#001660' }}>
//                 <div className="container-fluid">
//                     <img src={logo} alt="Logo" style={{ width: '80px' }} />
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarNav">
//                         <ul className="navbar-nav">
//                             <li className="nav-item">
//                                 <Link className="nav-link" style={{ color: 'white', fontWeight: 'bold' }} aria-current="page" to="/Home">Home</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" style={{ color: 'white', fontWeight: 'bold' }} aria-current="page" to="/ButtonChange">Button Change</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" style={{ color: 'white', fontWeight: 'bold' }} to="/List">List To Do</Link>
//                             </li>
//                             <li className='nav-item'>
//                                 <Link className='nav-link' style={{ color: 'white', fontWeight: 'bold' }} to="/Text">Toggle & Text Input</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" style={{ color: 'white', fontWeight: 'bold' }} to="/DataFetcher">Data Fetcher</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" style={{ color: 'white', fontWeight: 'bold' }} to="/ClickComponent">Click Component</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" style={{ color: 'white', fontWeight: 'bold' }} to="/UseEffect">Use Effect</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" style={{ color: 'white', fontWeight: 'bold' }} to="/About">About</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" style={{ color: 'white', fontWeight: 'bold' }} to="/Contact">Contact</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" style={{ color: 'white', fontWeight: 'bold' }} to="/Login">Login</Link>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         </div>
//     )
// }


import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/Logo.png';

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#001660' }}>
                <div className="container-fluid">
                    <img src={logo} alt="Logo" style={{ width: '80px' }} />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" style={{ color: 'white', fontWeight: 'bold' }} aria-current="page" to="/Home">Home</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link 
                                    className="nav-link dropdown-toggle" 
                                    style={{ color: 'white', fontWeight: 'bold' }} 
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
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" style={{ color: 'white', fontWeight: 'bold' }} to="/About">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" style={{ color: 'white', fontWeight: 'bold' }} to="/Contact">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" style={{ color: 'white', fontWeight: 'bold' }} to="/Login">Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
