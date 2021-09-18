import React from 'react';
import { useSelector } from 'react-redux'
import user_image from '../../assets/images/paarth.png';
import './RentersDetails.css';
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
                    <a href="/">{renter.renter_detail}</a>
                </div>
            </div>
    ))
    return (
        <>
            {renters}
        </>
    )
}
export default RentersDetails;