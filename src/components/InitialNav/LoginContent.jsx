import React, { useRef, useState } from 'react';
import './LoginContent.css';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
// import { uiActions } from '../../store/ui-slice';
import { login } from '../../redux/actions/auth.action';
const LoginContent = props => {
    const [error, setError] = useState(false);
    const userIdInputRef = useRef('');
    const passwordInputRef = useRef('');

    const dispatch = useDispatch();
    let history = useHistory();

    const toggleLandingHandler = e => {
        e.preventDefault();
        console.log(userIdInputRef.current.value, passwordInputRef.current.value);
        const userID = userIdInputRef.current.value;
        const password = passwordInputRef.current.value;
        const isUserIdValid = userID.length > 0;
        const isPasswordValid = password.length > 0;
        
        
        if (!isUserIdValid || !isPasswordValid) {
            setError(true);
            return
        }
        setError(false)
        dispatch(login({ phone: userID, password: password }));
        history.push('/payments') 
    }
    

    return (
        <>
        <form className="login-content" onSubmit={toggleLandingHandler}>
            <div className="login-page-logo">
                <img src="" alt="login-logo"></img>
            </div>
            <div className="user-id">
                <h2 className="user-id-name">User_ID</h2>
                <input placeholder="Enter your user_ID" type="text" ref={userIdInputRef}></input>
            </div>
            <div className="user-password">
                <h2 className="user-password-name">Password</h2>
                <input placeholder="Enter your Password" type="Password" ref={passwordInputRef}></input>
            </div>
            <div className="btn">
                <button type="submit" value="Send">Sign In</button>
            </div>
            {error && <p className="error-bottom">*Fields cannot be empty</p>}
            
        </form>
        
        </>
    )
}

export default LoginContent;