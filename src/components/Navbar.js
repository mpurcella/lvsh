import React, { useState } from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { BiHive } from 'react-icons/bi';
import './Navbar.scss';

let Navbar = () => {
    // --click state--
    let [click, setClick] = useState(false);

    let handleClick = () => {
        setClick(!click);
    }

    // --button state--
    let [button, setButton] = useState(true);

    let showButton = () => {
        if (window.innerWidth <= 992) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    window.addEventListener('resize', showButton);

    // --close menu--
    let closeMobileMenu = () => {
        setClick(false);
    }

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="navbar-logo">
                        <Link  to='/' className='navbar-logo-icon' onClick={closeMobileMenu}>
                            <BiHive/>
                        </Link>
                        <Link  to='/' className='navbar-logo-text' onClick={closeMobileMenu}>
                            <p>LVSH</p>
                        </Link>
                    </div>
                    <ul className={click ? 'navbar-list active' : 'navbar-list'}>
                        <li className="navbar-list-item" onClick={closeMobileMenu}>
                            <Link to='/' className='navbar-list-link'>
                                Home
                            </Link>
                        </li>
                        <li className="navbar-list-item" onClick={closeMobileMenu}>
                            <Link to='/services' className='navbar-list-link'>
                                Services
                            </Link>
                        </li>
                        <li className="navbar-list-item" onClick={closeMobileMenu}>
                            <Link to='/products' className='navbar-list-link'>
                                Products
                            </Link>
                        </li>
                        <li className="navbar-list-btn" onClick={closeMobileMenu}>
                            {button ? (
                                <Link to='/sign-up' className="btn-link">
                                    <Button buttonStyle='btn-outline'>Sign Up</Button>
                                </Link>
                            ): (
                                <Link to='/sign-up' className='btn-link'>
                                    <Button buttonStyle='btn-outline' buttonSize='btn-mobile'>Sign Up</Button>
                                </Link>
                            )}
                        </li>
                    </ul>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
