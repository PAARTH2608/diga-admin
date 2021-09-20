import React from 'react'
import './layout.css'
import Sidebar from '../sidebar/Sidebar'
import TopNav from '../topnav/TopNav'
import Routes from '../Routes'
import { BrowserRouter, Route } from 'react-router-dom';
import Logout from '../../pages/Logout';
import { useSelector } from 'react-redux';
// import HelperModal from '../InitialNav/HelperModal'

const Layout = () => {
    const show = useSelector(state => state.auth.showLanding);
    
    return (
        <BrowserRouter>
            <Route render={(props) => (
                <>
                    {!show && <Logout/>}
                    { show && <div className="layout">
                        <Sidebar {...props} />
                        <div className="layout__content">
                            <TopNav />
                            <div className="layout__content-main">
                                <Routes />
                            </div>
                        </div>
                        <div className="helpermodal">
                        {/* <HelperModal
                            lender="name" 
                            renter="name"
                            durationFrom="name" 
                            durationTo="name" 
                            amount="name" 
                            desc1="name" 
                            desc2="name"
                            desc3="name"
                            closeModalHandler="name"
                            modal="name"
                        /> */}
                        </div>
                    </div>}
                </>
                
            )} />
        </BrowserRouter>
    )
}

export default Layout
