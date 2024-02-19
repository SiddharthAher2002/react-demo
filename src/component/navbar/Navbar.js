import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';

function Navbar() {
    const [isNavVisible, setNavVisibility] = useState(false);
    let toggleNav = ()=>setNavVisibility(!isNavVisible);
    const hamburgerStyle = isNavVisible ? 'active' : '';
    const navStyle = {
        display: isNavVisible ? "none" : "float"
    }
    return (
        <>
            <div className="container-fluid">
                <nav className="row navbar navbar-expand navbar-light d-flex">
                    <Link className=" index-logo" to="/">
                        <img src="https://marketplace.canva.com/EAEyrxfbXiY/6/0/1600w/canva-brown-vintage-coffee-shop-logo-h09r2PsrZno.jpg" style={{ width: '100px' }} alt="Scanfcode" />
                    </Link>
                    <h3 className="ml-3 d-flex justify-content-center protest-revolution-regular ">Chase the Coffee</h3>
                    <div className="navbarNav collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav mr-4" style={navStyle}>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/menu">Menu</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/services">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/posts">Posts</Link>
                            </li>
                            <li className="nav-item user-dropdown">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Contact us</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={`hamburger ${hamburgerStyle}`} onClick={toggleNav}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                </nav>

            </div>
        </>
    );
}
export default Navbar;