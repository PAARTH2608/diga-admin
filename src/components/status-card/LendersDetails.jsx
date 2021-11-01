import React from 'react';
import user_image from '../../assets/images/user.png';
import './LendersDetails.css';
import { useSelector } from 'react-redux';
import MainHelper from '../InitialNav/MainHelper';
const LendersDetails = () => {
    const searchterm = useSelector(state => state.filters.term);
    const lendersDetails = useSelector(state => state.bookings.adminInfoDetails);
    // eslint-disable-next-line
    const lenders = lendersDetails.filter(item => {
        if(!searchterm) return true
        if(item.lender.name.toLowerCase().includes(searchterm) || item.lender.name.toUpperCase().includes(searchterm)){
            return true
        }
    }).map(lender => (
        <MainHelper 
            key={lender._id} 
            img={user_image} 
            lender={lender.lender.name} 
            renter={lender.renter.name} 
            durationFrom={lender.date.from}
            durationTo={lender.date.to} 
            amount={lender.payment.amount} 
            desc1={lender.vehicle.name} 
            desc2={lender.vehicle.model} 
            desc3={lender.vehicle.regno}
            trans={true}
            />
    ))
    return (
        <>
            {lenders}
        </>
    )
}
export default LendersDetails;