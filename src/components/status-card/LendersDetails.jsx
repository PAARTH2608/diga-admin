import React, { useState } from 'react';
import user_image from '../../assets/images/paarth.png';
import './LendersDetails.css';
import { useSelector } from 'react-redux';
import HelperModal from '../InitialNav/HelperModal';

const LendersDetails = () => {
    const [modal, setModal] = useState(false)
    const searchterm = useSelector(state => state.filters.term);
    const lendersDetails = useSelector(state => state.bookings.adminInfoDetails);

    const openModalHandler = () => {
        setModal(true);
    }
    const closeModalHandler = () => {
        setModal(false);
    }

    // eslint-disable-next-line
    const lenders = lendersDetails.filter(item => {
        if(!searchterm) return true
        if(item.lender.name.toLowerCase().includes(searchterm) || item.lender.name.toUpperCase().includes(searchterm)){
            return true
        }
    }).map(lender => (
        <>
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
                <button onClick={openModalHandler}>DETAILS</button>
            </div>
        </div>
        <HelperModal 
            lender={lender.lender.name} 
            renter={lender.renter.name} 
            durationFrom={lender.date.from} 
            durationTo={lender.date.to} 
            amount={lender.payment.amount} 
            desc1={lender.vehicle.name} 
            desc2={lender.vehicle.model} 
            desc3={lender.vehicle.regno}
            closeModalHandler={closeModalHandler}
            modal={modal}
            key={lender._id}
        />
        </>
        
    ))
    return (
        <>
            {lenders}
        </>
    )
}
export default LendersDetails;