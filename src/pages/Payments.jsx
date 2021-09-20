import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Details from '../components/status-card/details';
import { getBookings, getReports } from '../redux/actions/auth.action';
const Dashboard = props => {

    const token = useSelector(state => state.auth.token);
    console.log("payments token", token)
    const dispatch = useDispatch();

    
    useEffect(() => {
        dispatch(getBookings({token: token}));
        dispatch(getReports({token: token}));
    })

    

    
    return (
        <div>
            <h2 className="page-header">PAYMENTS</h2>
            <Details/>
        </div>
    )
}

export default Dashboard
