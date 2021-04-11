import React from 'react'
import Button from './Button';
import { Link } from 'react-router-dom';
import { FiFacebook, FiInstagram, FiTwitter, FiYoutube, FiLinkedin } from 'react-icons/fi';
import { BiHive } from 'react-icons/bi';
import './Footer.scss';

let Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer-subscribe">
                    <h4 className="footer-subscribe-heading">Subscribe to receive exclusive deals</h4>
                    <p className="footer-subscribe-text">You can unsubscribe at any time</p>
                    <div className="footer-form">
                        <form>
                            <input type="email" className='form-email' placeholder='Email Address' />
                            <Button buttonStyle='btn-outline'>Subscribe</Button>
                        </form>
                    </div>
                </div>
                <nav className="footer-links about">
                    <h5 className="footer-links-heading">About Us</h5>
                    <ul className="footer-links-list">
                        <li className="footer-links-item">
                            <Link to='/' className='footer-links-link'>How it Works</Link>
                        </li>
                        <li className="footer-links-item">
                            <Link to='/' className='footer-links-link'>Careers</Link>
                        </li>
                        <li className="footer-links-item">
                            <Link to='/' className='footer-links-link'>Investors</Link>
                        </li>
                        <li className="footer-links-item">
                            <Link to='/' className='footer-links-link'>Terms of Service</Link>
                        </li>
                    </ul>
                </nav>
                <nav className="footer-links customer-service">
                    <h5 className="footer-links-heading">Contact Us</h5>
                    <ul className="footer-links-list">
                        <li className="footer-links-item">
                            <Link to='/' className='footer-links-link'>Help Center</Link>
                        </li>
                        <li className="footer-links-item">
                            <Link to='/' className='footer-links-link'>Support</Link>
                        </li>
                        <li className="footer-links-item">
                            <Link to='/' className='footer-links-link'>Feedback</Link>
                        </li>
                        <li className="footer-links-item">
                            <Link to='/' className='footer-links-link'>Frequently Asked Questions</Link>
                        </li>
                    </ul>
                </nav>
                <nav className="footer-social-links">
                    <ul className="footer-social-links-list">
                        <li className="footer-social-links-item">
                            <Link
                                to='/'
                                className='footer-social-links-link'
                                target='_blank'
                                aria-label='Facebook'
                            >
                                <FiFacebook />
                            </Link>
                        </li>
                        <li className="footer-social-links-item">
                            <Link
                                to='/'
                                className='footer-social-links-link'
                                target='_blank'
                                aria-label='Instagram'
                            >
                                <FiInstagram />
                            </Link>
                        </li>
                        <li className="footer-social-links-item">
                            <Link
                                to='/'
                                className='footer-social-links-link'
                                target='_blank'
                                aria-label='Twitter'
                            >
                                <FiTwitter />
                            </Link>
                        </li>
                        <li className="footer-social-links-item">
                            <Link
                                to='/'
                                className='footer-social-links-link'
                                target='_blank'
                                aria-label='Youtube'
                            >
                                <FiYoutube />
                            </Link>
                        </li>
                        <li className="footer-social-links-item">
                            <Link
                                to='/'
                                className='footer-social-links-link'
                                target='_blank'
                                aria-label='LinkedIn'
                            >
                                <FiLinkedin />
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="footer-copy">
                    <div className="footer-copy-logo">
                        <Link to='/' className='footer-copy-logo-icon'>
                            <BiHive />
                        </Link>
                        <Link to='/' className='footer-copy-logo-text'>
                            <p>LVSH</p>
                        </Link>
                    </div>
                    <p className='footer-copy-text'>© 2021 LVSH</p>
                </div>
            </div>
        </>
    )
}

export default Footer;