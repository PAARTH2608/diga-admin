import React, { useLayoutEffect } from 'react';
import { Link } from 'react-router-dom'
import './sidebar.css'
import SidebarItem from './SidebarItem'
// import logo from '../../assets/images/logo.png'
import sidebar_items from '../../assets/JsonData/sidebar_routes.json'
import { useState, Fragment } from 'react';
import * as Icons from "react-icons/fa";
const Sidebar = props => {
    const [sidebar, setSidebar] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    useLayoutEffect(() => {
        function updateSize() {
            if (window.innerWidth < 1065) {
                setIsMobile(true);
            }
            else {
                setIsMobile(false);
                setSidebar(false);
            }
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    const activeItem = sidebar_items.findIndex(item => item.route === props.location.pathname)

    const handler = () => {
        setSidebar(state => !state);
    }


    
    return (
        <Fragment>
            {!isMobile && <div className='sidebar'>
                <div className="sidebar__logo">
                    <img alt="company logo" />
                </div>
                {
                    sidebar_items.map((item, index) => (
                        <Link to={item.route} key={index}>
                            <SidebarItem
                                title={item.display_name}
                                active={index === activeItem}
                                onClicking={handler}
                            />
                        </Link>
                    ))
                }
            </div>}
            {isMobile && (
                <Fragment>
                    <div className="sidebar-toggle">
                        <Icons.FaBars
                            className="sidebar-toggle-logo"
                            onClick={() => setSidebar(!sidebar)}
                        />
                    </div>
                    {sidebar && (
                        <Fragment>

                            <div className='sidebar-1'>
                                {
                                    sidebar_items.map((item, index) => (
                                        <Link to={item.route} key={index}>
                                            <SidebarItem
                                                title={item.display_name}
                                                active={index === activeItem}
                                                onClicking={handler}
                                                route={item.route}
                                            />
                                        </Link>
                                    ))
                                }
                            </div>
                        </Fragment>)}
                </Fragment>
            )}
        </Fragment>
    )
}

export default Sidebar
