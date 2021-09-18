import React, { useState } from 'react';
import LoginNav from '../components/InitialNav/LoginNav';
import LoginContent from '../components/InitialNav/LoginContent';
import Custom from '../components/InitialNav/Custom';
import '../components/status-card/Logout.css';
// import Overlay from '../components/status-card/Overlay';
import ErrorModal from '../components/InitialNav/ErrorModal';
const Logout = props => {
      const [show, setShow] = useState(false);

      const closeModalHandler = () => {
        setShow(false);
      }

    return ( 
        <Custom>
            <LoginNav/>
            {show && <ErrorModal onClick={closeModalHandler} />}
            <LoginContent />
        </Custom>
    )
}

export default Logout;
