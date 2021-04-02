import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';
import './Hero.scss';

let Hero = ({ 
    lightBg, heading, lightText, lightTextDesc, subheading, description, buttonText, src, alt, imgLocation, imgOrder }) => {
    return (
        <>
            <div className={lightBg ? 'home-hero' : 'home-hero darkBg'}>
                <div className="home-hero-container"> 
                    <div className="home-hero-row row">
                        <div className="home-hero-col" style={{ order: imgOrder === 'start' ? 0 : 1 }}>
                            <div className="home-hero-text-wrapper">
                                <div className="test">
                                    <h3 className="home-hero-heading">{heading}</h3>
                                    <h2 className={lightText ? 'home-hero-subheading' : 'home-hero-subheading dark'}>{subheading}</h2>
                                    <p className={lightTextDesc ? 'home-hero-description' : 'home-hero-description dark'}>{description}</p>
                                    <Link to='/sign-up'>
                                        <Button buttonSize='btn-wide' buttonColor='blue'>
                                            {buttonText}
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="home-hero-col">
                            <div className="home-hero-img-wrapper">
                                <img src={src} alt={alt} className="home-hero-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;