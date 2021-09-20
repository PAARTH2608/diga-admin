import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logout } from '../../redux/actions/auth.action';

const SidebarItem = props => {
    const active = props.active ? 'active' : '';
    const history = useHistory();

    const dispatch = useDispatch();
    
    const handler = () => {
        if(props.title !== 'Logout'){
            history.push(props.route);
        }
        else{
            dispatch(logout());
            // dispatch(showLanding())
            history.push('/');
        }
        props.onClicking();
    }
    return (
        <Fragment>
        <div className="sidebar__item">
            <div className={`sidebar__item-inner ${active}`} onClick={handler}>
                <span>
                    {props.title}
                </span>
            </div>
        </div>
        </Fragment>
    )
}
export default SidebarItem;