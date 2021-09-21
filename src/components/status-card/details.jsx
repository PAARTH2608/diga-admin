import React from 'react';
import { useSelector } from 'react-redux';
import './details.css';
import MainHelper from '../InitialNav/MainHelper';

const Details = props => {
    
    const searchterm = useSelector(state => state.filters.term)
    const details = useSelector(state => state.bookings.adminInfoDetails);  
    console.log("payments here ", details)  

    // eslint-disable-next-line
    const paymentItems = details.filter(item => {
        if(!searchterm) return true
        if(item.lender.name.toLowerCase().includes(searchterm)){
            return true
        }
    }).map(item => (
        <>
        <MainHelper
            key={item._id} 
            lender={item.lender.name} 
            renter={item.renter.name} 
            amount={item.payment.amount} 
            durationFrom={item.date.from} 
            method={item.method}
            durationTo={item.date.to} 
            desc1={item.vehicle.name} 
            desc2={item.vehicle.model} 
            desc3={item.vehicle.regno}
            paymentSuccess={item.paymentAccepted}
            trans={false} 
        />
    </>
    ))
    return (
        <>
            {paymentItems} 
        </>
    )
}

export default Details
