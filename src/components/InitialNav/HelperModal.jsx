import React from 'react';
import './HelperModal.css'
const HelperModal = props => {
    const closeModal = () => {
        props.closeModalHandler();
    }
    return (
        <>
        {props.modal && <div className="helper-main">
            <div className="helper-btn">
                <button onClick={closeModal} className="helper-btn-btn">X</button>
            </div>
            <div>
                <h2>Lender's Name : {props.lender}</h2>
                <h2>Renter's Name : {props.renter}</h2>
            </div>
            <div>
                <h2>Duration : {props.duration}</h2>
            </div>
            <div>
                <h2>Amount Due : {props.amount}</h2>
            </div>
            <div>
                <h2>Vehicle Description</h2> 
                <h2>Name : {props.desc1} </h2><h2>Model : {props.desc2}</h2>
                <h2>Registration Number : {props.desc3}</h2>
            </div>
            {props.paymentSuccess && <h2>Payment Successful</h2>}
            {!props.paymentSuccess && <h2>Payment Not Successful</h2>}
        </div>}
        </>
    )
}
export default HelperModal;