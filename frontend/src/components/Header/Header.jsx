import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/argentBankLogo.png';
import { logout } from '../../redux/reducers/authReducer';

function Header() {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const user = useSelector((state) => state.auth.user);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        sessionStorage.clear();
        localStorage.clear();
        navigate('/');
    };

    return (
        <nav className="main-nav">
            <Link className="main-nav-logo" to='/'>
                <img
                    className="main-nav-logo-image"
                    src={Logo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                {isAuthenticated ? (
                    <div className="user-info">
                        <Link to='/profile' className="main-nav-item">
                            <i className='fa fa-user-circle'></i>
                            {user && <span>{user.lastName} {user.firstName}</span>}
                        </Link>
                        <Link to='/' onClick={handleLogout} className="main-nav-item">
                            <i className='fa fa-sign-out'></i>
                            Sign out
                        </Link>
                    </div>
                ) : (
                    <div>
                        <Link to='/login' className="main-nav-item">
                            <i className="fa fa-user-circle"></i>
                            Sign In
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Header;
