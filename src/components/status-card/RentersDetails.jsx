import React from 'react';
import { useSelector } from 'react-redux'
import user_image from '../../assets/images/paarth.png';
import './RentersDetails.css';
import MainHelper from '../InitialNav/MainHelper';
const RentersDetails = () => {
    const searchterm = useSelector(state => state.filters.term)
    const rentersDetails = useSelector(state => state.bookings.adminInfoDetails);
    // eslint-disable-next-line
    const renters = rentersDetails.filter(item => {
        if(!searchterm) return true
        if(item.renter.name.toLowerCase().includes(searchterm) || item.renter.name.toUpperCase().includes(searchterm)){
            return true
        }
    }).map(renter => (
        <MainHelper 
            key={renter._id} 
            img={user_image} 
            lender={renter.lender.name} 
            renter={renter.renter.name} 
            durationFrom={renter.date.from}
            durationTo={renter.date.to} 
            amount={renter.payment.amount} 
            desc1={renter.vehicle.name} 
            desc2={renter.vehicle.model} 
            desc3={renter.vehicle.regno}
            trans={true}
            />
    ))
    return (
        <>
            {renters}
        </>
    )
}
export default RentersDetails;