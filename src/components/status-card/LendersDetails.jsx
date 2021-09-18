import React from 'react';
import user_image from '../../assets/images/paarth.png';
import './LendersDetails.css';

import { useSelector } from 'react-redux';

const LendersDetails = () => {
    const searchterm = useSelector(state => state.filters.term)
    const lendersDetails = useSelector(state => state.bookings.adminInfoDetails);
    // eslint-disable-next-line
    const lenders = lendersDetails.filter(item => {
        if(!searchterm) return true
        if(item.lender.name.toLowerCase().includes(searchterm) || item.lender.name.toUpperCase().includes(searchterm)){
            return true
        }
    }).map(lender => (
        <div className="lenders-main" key={lender.date._id}>
                <div className="image">
                    <div className="lenders-image">
                        <img src={user_image} alt="img"></img>
                    </div>
                </div>
                <div className="lenders-name">
                    <h2 className="lender">{lender.lender.name}</h2>
                    <p className="car-name">{lender.vehicle.name}</p>
                </div>
                <div className="lenders-details">
                    <a href="/">DETAILS</a>
                </div>
            </div>
    ))
    return (
        <>
            {lenders}
        </>
    )
}
export default LendersDetails;