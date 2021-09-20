import React, { useState } from 'react'
import "./ReportsDetails.css";
import user_image from '../../assets/images/paarth.png';
import { useSelector, useDispatch } from 'react-redux';
import { reInstate, suspend } from '../../redux/actions/auth.action';

const ReportDetails = () => {
    const [modal, setModal] = useState(false);
    const [reinstated, setReinstate] = useState(false);
    const [suspended, setSuspend] = useState(false);

    const dispatch = useDispatch();
    const searchterm = useSelector(state => state.filters.term);

    const reportsAr = useSelector(state => state.reports.reports.reports);
    const token = useSelector(state => state.auth.token);
    
    const reinstateHandler = id => {
        dispatch(reInstate({token: token, id: id}));
        setModal(true);
        setReinstate(true);
        setSuspend(false);
    };
    const suspendHandler = id => {
        dispatch(suspend({token: token, id: id}));
        setModal(true);
        setSuspend(true);
        setReinstate(false);
    };

    const closeModal = () => {
        setModal(false)
    }

    // eslint-disable-next-line
    const reports = reportsAr.filter(item => {
        if(!searchterm) return true
        if(item.against.name.toLowerCase().includes(searchterm) || item.against.name.toUpperCase().includes(searchterm) || item.from.name.toLowerCase().includes(searchterm) || item.from.name.toUpperCase().includes(searchterm)){
            return true
        }
    }).map(report => (
        <div className="reports-main" key={report._id}>
            <div className="image">
                <div className="reports-icon">
                    <img src={user_image} alt="icon"></img>
                </div>
            </div>
            <div className="name-text">
                <h2 className="name">{report.from.name} to {report.against.name}</h2>
                <div className="small-para">
                    <p className="text">{report.complaint}</p>
                </div>
            </div>
            <div className="reports-buttons">
                <button className="report-button" id="btn-1" onClick={() => suspendHandler(report._id)}>Suspend Account</button>             
                <button className="report-button" id="btn-2" onClick={() => reinstateHandler(report._id)}>Reinstate Account</button>
                
            </div>
        </div>
    ))
    return (
        <>
            {modal && <div className="features" onClick={closeModal}>
                {reinstated && <div className="reinstated">
                    <p>Reinstated Successfully</p>
                </div>}
                {suspended && <div className="suspended">
                    <p>Suspended Successfully</p>
                </div>}
            </div>}
            {reports}
        </>
    )
}

export default ReportDetails
