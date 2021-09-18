import React from 'react'
import './layout.css'
import Sidebar from '../sidebar/Sidebar'
import TopNav from '../topnav/TopNav'
import Routes from '../Routes'
import { BrowserRouter, Route } from 'react-router-dom';
import Logout from '../../pages/Logout';
import { useSelector } from 'react-redux';

const Layout = () => {
    const show = useSelector(state => state.auth.showLanding);
    const valid = useSelector(state => state.auth.validCredentials);
    console.log("layout",valid)

    return (
        <BrowserRouter>
            <Route render={(props) => (
                <>
                    {!show && <Logout valid={valid}/>}
                    { show && <div className="layout">
                        <Sidebar {...props} />
                        <div className="layout__content">
                            <TopNav />
                            <div className="layout__content-main">
                                <Routes />
                            </div>
                        </div>
                    </div>}
                </>
                
            )} />
        </BrowserRouter>
    )
}

export default Layout
