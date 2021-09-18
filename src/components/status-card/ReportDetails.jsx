import React from 'react'
import "./ReportsDetails.css";
import user_image from '../../assets/images/paarth.png';

const reportsArr = [
    {
        name: "Carmen Sanders To Danielle Murphy",
        report: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry when an unknown printer took a galley of type and scrambled it to make a type specimen book. It.'
    },
    {
        name: "Carmen Sanders To Danielle Murphy",
        report: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry when an unknown printer took a galley of type and scrambled it to make a type specimen book. It.'
    }
    ,
    {
        name: "Carmen Sanders To Danielle Murphy",
        report: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry when an unknown printer took a galley of type and scrambled it to make a type specimen book. It.'
    },
    {
        name: "Carmen Sanders To Danielle Murphy",
        report: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry when an unknown printer took a galley of type and scrambled it to make a type specimen book. It.'
    }
];
const ReportDetails = () => {
    const reports = reportsArr.map(report => (
        <div className="reports-main">
            <div className="image">
                <div className="reports-icon">
                    <img src={user_image} alt="icon"></img>
                </div>
            </div>
            <div className="name-text">
                <h2 className="name">{report.name}</h2>
                <div className="small-para">
                    <p className="text">{report.report}</p>
                </div>
            </div>
            <div className="reports-buttons">
                <button className="report-button" id="btn-1">Suspend Account</button>
                <button className="report-button" id="btn-2">Reinstate Account</button>
            </div>
        </div>
    ))
    return (
        <>
            {reports}
        </>
    )
}

export default ReportDetails
