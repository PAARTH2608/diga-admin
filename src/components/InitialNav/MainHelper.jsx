import React, { useState } from 'react';
import HelperModal from './HelperModal';
import '../status-card/LendersDetails.css';
import '../status-card/details.css'
const MainHelper = props => {
    const [open, setOpen] = useState(false);
    const closeModalHandler = () => {
        setOpen(false);
    };
    const openModalHandler = () => {
        setOpen(true);
    }
    return (
		<>
			{props.trans && <><div className='lenders-main' key={props.key}>
				<div className='image'>
					<div className='lenders-image'>
						<img src={props.img} alt='img'></img>
					</div>
				</div>
				<div className='lenders-name'>
					<h2 className='lender'>{props.lender}</h2>
					<p className='car-name'>{props.desc1}</p>
				</div>
				<div className='lenders-details'>
					<button onClick={openModalHandler}>DETAILS</button>
						</div>
			</div>
			<HelperModal
				lender={props.lender}
				renter={props.renter}
				durationFrom={props.durationFrom}
				durationTo={props.durationTo}
				amount={props.amount}
				desc1={props.desc1}
				desc2={props.desc2}
				desc3={props.desc3}
				closeModalHandler={closeModalHandler}
				modal={open}
				key={props.key}
			/></>}

            {!props.trans && <><div className='details-card' key={props.key}>
                <div className="details-card__icon">
                    <i className="bx bx-cart"></i>
                </div>
            <div className="status-card__info">
                    <div className="name-money">
                        <h2>{props.lender} to {props.renter}</h2>
                        <p>Rs. {props.amount}</p>
                    </div>
                    <div className="car-details-time">
                        <h2>{props.desc1}</h2>
                        <p>On {props.durationFrom.substring(0,10)}</p>
                    </div>
                    <div className="payment-method">
                        <div className="via">
                            <h2>{props.method}</h2>
                        </div>
                        <div className="via-2">
                            <div className="receipt">
                                <button onClick={openModalHandler}>RECEIPT</button>
                            </div>
                            <div className="payment-batch">
                                <i className="bx bx-cart"></i>
                                <h2>{props.paymentSuccess && <p>Payment Successful</p>}{!props.paymentSuccess && <p>Payment Not Successful</p>}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <HelperModal 
                key={props.key}
                lender={props.lender} 
                renter={props.renter} 
                durationFrom={props.durationFrom} 
                durationTo={props.durationTo} 
                amount={props.amount} 
                desc1={props.desc1} 
                desc2={props.desc2} 
                desc3={props.desc3}
                paymentSuccess={props.paymentSuccess}
                closeModalHandler={closeModalHandler}
                modal={open}
            /></>}
		</>
	);
}
export default MainHelper;
