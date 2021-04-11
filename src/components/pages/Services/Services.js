import React from 'react';
import { RiCustomerService2Line, RiGlobalLine } from 'react-icons/ri';
import { GiLockedChest } from 'react-icons/gi';
import Button from '../../Button';
import { Link } from 'react-router-dom';
import './Services.scss';

let Services = () => {
    return (
        <div className="services-container">
            <div className="services-container-row">
                <div className="services-container-col">
                    <div className="services-container-text-wrapper">
                        <h3 className='services-container-col-heading'>1st Class Customer Service</h3>
                        <p className="services-container-col-text">
                            Customer service is our main priority at LVSH. Access to customer service representatives is guaranteed 24 hours a day, 365 days a year - meaning you'll never have to worry about losing access to your Diamond Card.
                        </p>
                    </div>
                </div>
                <div className="services-container-col">
                    <div className="services-container-col-img-wrapper">
                        <RiCustomerService2Line className='services-container-col-img'/>
                    </div>
                </div>
            </div>
            <div className="services-container-row">
                <div className="services-container-col">
                    <div className="services-container-text-wrapper">
                        <h3 className='services-container-col-heading'>Worldwide Coverage</h3>
                        <p className="services-container-col-text">
                            With over 140 locations around the world, becoming a Diamond Card member has never been easier. Just fill out the registration form to join.
                        </p>
                        <Link to='/sign-up'>
                            <Button buttonSize='btn-wide' buttonColor='blue' className='services-container-col-btn'>Join Now</Button>
                        </Link>
                    </div>
                </div>
                <div className="services-container-col">
                    <div className="services-container-col-img-wrapper">
                        <RiGlobalLine className='services-container-col-img'/>
                    </div>
                </div>
            </div>
            <div className="services-container-row">
                <div className="services-container-col">
                    <div className="services-container-text-wrapper">
                        <h3 className='services-container-col-heading'>Rewards Just For You</h3>
                        <p className="services-container-col-text">
                        Using your Diamond Card rewards you with bigger and better benefits. Benefits are tailor-made to your specific spending habits. Spend more to receive more!
                        </p>
                        <Link to='/rewards'>
                            <Button buttonSize='btn-wide' buttonColor='blue' className='services-container-col-btn'>Rewards</Button>
                        </Link>
                    </div>
                </div>
                <div className="services-container-col">
                    <div className="services-container-col-img-wrapper">
                        <GiLockedChest className='services-container-col-img'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;