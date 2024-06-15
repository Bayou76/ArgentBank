import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/argentBankLogo.png';
import './header.scss';

function Header() {
    return (
        <nav className="main-nav">
            <Link className="main-nav-logo" to='/ArgentBank'>
            <img
          className="main-nav-logo-image"
          src={Logo}
          alt="Argent Bank Logo"
        />
        <h1 class="sr-only">Argent Bank</h1>
            </Link>
            <h1 className="sr-only">Argent Bank</h1>
            <div>
                <Link className="main-nav-item" to="/Login">
                <i className="fa fa-user-circle"></i>
                    Sign In
                </Link>
            </div>
        </nav>
    );
}

export default Header;
