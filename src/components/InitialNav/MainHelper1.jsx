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
			{props.trans && <><div className='lenders-main'>
				<div className='image'>
					<div className='lenders-image'>
						<img src={props.img} alt='img'></img>
					</div>
				</div>
				<div className='lenders-name'>
					<h2 className='lender'>{props.renter}</h2>
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
			/></>}
		</>
	);
}
export default MainHelper;
