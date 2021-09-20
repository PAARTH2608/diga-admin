import React from 'react';
import LoginNav from '../components/InitialNav/LoginNav';
import LoginContent from '../components/InitialNav/LoginContent';
import Custom from '../components/InitialNav/Custom';
import '../components/status-card/Logout.css';
// import Overlay from '../components/status-card/Overlay';
const Logout = props => {
    return ( 
        <Custom>
            <LoginNav/>   
            <LoginContent />
        </Custom>
    )
}

export default Logout;
