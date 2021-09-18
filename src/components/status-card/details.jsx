
import React from 'react';
import { useSelector } from 'react-redux';
import './details.css'

const Details = props => {
    
    const searchterm = useSelector(state => state.filters.term)
    const details = useSelector(state => state.bookings.adminInfoDetails);    
    // eslint-disable-next-line
    const paymentItems = details.filter(item => {
        if(!searchterm) return true
        if(item.lender.name.toLowerCase().includes(searchterm) || item.renter.name.toLowerCase().includes(searchterm)){
            return true
        }
    }).map(item => (
        <div className='details-card' key={item._id}>
            <div className="details-card__icon">
                <i className="bx bx-cart"></i>
            </div>
            <div className="status-card__info">
                <div className="name-money">
                    <h2>{item.lender.name} to {item.renter.name}</h2>
                    <p>Rs. {item.payment.amount}</p>
                </div>
                <div className="car-details-time">
                    <h2>{item.vehicle.name}</h2>
                    <p>On {item.date.from.substring(0,10)}</p>
                </div>
                <div className="payment-method">
                    <div className="via">
                        <h2>{item.method}</h2>
                    </div>
                    <div className="via-2">
                        <div className="receipt">
                            <a href="/">RECEIPT</a>
                        </div>
                        <div className="payment-batch">
                            <i className="bx bx-cart"></i>
                            <h2>{item.paymentAccepted && <p>Payment Successful</p>}{!item.paymentAccepted && <p>Payment Not Successful</p>}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ))
    return (
        <>
            {paymentItems} 
        </>
    )
}

export default Details
