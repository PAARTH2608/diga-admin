import React from 'react'
import ReportDetails from '../components/status-card/ReportDetails';

const Customers = () => {
    return (
        <div>
            <h2 className="page-header">REPORTS</h2>
            <ReportDetails key={Math.random()}/>   
        </div>
    )
}

export default Customers
