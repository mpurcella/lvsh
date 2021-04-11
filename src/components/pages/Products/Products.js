import React from 'react';
import { Link } from 'react-router-dom';
import { ImTrophy } from 'react-icons/im';
import { AiFillGold } from 'react-icons/ai';
import { GiCutDiamond } from 'react-icons/gi';
import Button from '../../Button';
import './Products.scss';

let Products = () => {
    return (
        <>
            <div className="pricing">
                <div className="pricing-wrapper">
                    <h1 className="pricing-heading">Tiered Loyalty Rewards to Help You Find the Best Fit</h1>
                    <div className="pricing-container">
                        <Link to='/sign-up' className='pricing-container-card'>
                            <div className="pricing-container-card-info">
                                <div className="pricing-container-card-info-icon">
                                    <ImTrophy />
                                </div>
                                <h3 className='pricing-container-card-info-heading'>Starter</h3>
                                <h4 className='pricing-container-card-info-subheading'>$9.99</h4>
                                <p className='pricing-container-card-info-text'>Per Month</p>
                                <ul className="pricing-container-features-list">
                                    <li className="pricing-container-features-list-item">
                                        1000 Transactions
                                    </li>
                                    <li className="pricing-container-features-list-item">
                                        2% Cash Back
                                    </li>
                                    <li className="pricing-container-features-list-item">
                                        $10,000 Limit
                                    </li>
                                </ul>
                                <Button buttonSize='btn-wide' buttonColor='primary'>Choose Plan</Button>
                            </div>
                        </Link>
                        <Link to='/sign-up' className='pricing-container-card'>
                            <div className="pricing-container-card-info">
                                <div className="pricing-container-card-info-icon">
                                    <AiFillGold />
                                </div>
                                <h3 className='pricing-container-card-info-heading'>Gold</h3>
                                <h4 className='pricing-container-card-info-subheading'>$49.99</h4>
                                <p className='pricing-container-card-info-text'>Per Month</p>
                                <ul className="pricing-container-features-list">
                                    <li className="pricing-container-features-list-item">
                                        20,000 Transactions
                                    </li>
                                    <li className="pricing-container-features-list-item">
                                        3% Cash Back
                                    </li>
                                    <li className="pricing-container-features-list-item">
                                        $50,000 Limit
                                    </li>
                                </ul>
                                <Button buttonSize='btn-wide' buttonColor='blue'>Choose Plan</Button>
                            </div>
                        </Link>
                        <Link to='/sign-up' className='pricing-container-card'>
                            <div className="pricing-container-card-info">
                                <div className="pricing-container-card-info-icon">
                                    <GiCutDiamond />
                                </div>
                                <h3 className='pricing-container-card-info-heading'>Diamond</h3>
                                <h4 className='pricing-container-card-info-subheading'>$99.99</h4>
                                <p className='pricing-container-card-info-text'>Per Month</p>
                                <ul className="pricing-container-features-list">
                                    <li className="pricing-container-features-list-item">
                                        Unlimited Transactions
                                    </li>
                                    <li className="pricing-container-features-list-item">
                                        5% Cash Back
                                    </li>
                                    <li className="pricing-container-features-list-item">
                                        Unlimited Spending
                                    </li>
                                </ul>
                                <Button buttonSize='btn-wide' buttonColor='primary'>Choose Plan</Button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products;