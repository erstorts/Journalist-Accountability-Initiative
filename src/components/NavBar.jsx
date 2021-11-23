import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(props) {
    return (
        
        <nav className="container navbar navbar-expand-lg navbar-dark">
            <Link className="navbar-brand" to="/">Got Bias?</Link>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            </div>
            <Link className="nav-item nav-link navbar-right" to="/support">
            <button type="button" className="btn btn-warning navbar-btn">Support Us</button>
            </Link>
        </nav>
    );
}

export default NavBar;