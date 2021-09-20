import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import user_image from '../../assets/images/paarth.png';
import './RentersDetails.css';
import HelperModal from '../InitialNav/HelperModal';
const RentersDetails = () => {
    const [modal, setModal] = useState(false)
    const searchterm = useSelector(state => state.filters.term)
    const rentersDetails = useSelector(state => state.bookings.adminInfoDetails);

    console.log("rrererr", rentersDetails)

    const openModalHandler = () => {
        setModal(true);
    }
    const closeModalHandler = () => {
        setModal(false);
    }
    // eslint-disable-next-line
    const renters = rentersDetails.filter(item => {
        if(!searchterm) return true
        if(item.renter.name.toLowerCase().includes(searchterm) || item.renter.name.toUpperCase().includes(searchterm)){
            return true
        }
    }).map(renter => (
        <>
        <div className="renters-main" key={renter.date._id}>
                <div className="image">
                    <div className="renters-image">
                        <img src={user_image} alt="img"></img>
                    </div>
                </div>
                <div className="renters-name">
                    <h2 className="renter">{renter.renter.name}</h2>
                    <p className="car-name">{renter.vehicle.name}</p>
                </div>
                <div className="renters-details">
                    <button href="/" onClick={openModalHandler}>DETAILS</button>
                </div>
            </div>
            <HelperModal 
            lender={renter.lender.name} 
            renter={renter.renter.name} 
            durationFrom={renter.date.from} 
            durationTo={renter.date.to} 
            amount={renter.payment.amount} 
            desc1={renter.vehicle.name} 
            desc2={renter.vehicle.model} 
            desc3={renter.vehicle.regno}
            closeModalHandler={closeModalHandler}
            modal={modal}
            key={renter._id}
        />
        </>
    ))
    return (
        <>
            {renters}
        </>
    )
}
export default RentersDetails;