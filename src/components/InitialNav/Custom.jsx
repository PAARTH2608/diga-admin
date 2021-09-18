import React from 'react';
import './Custom.css';
const Custom = props => {
    return (
        <div className="full">{props.children}</div>
    )
}
export default Custom;