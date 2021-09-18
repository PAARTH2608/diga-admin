import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Payments from '../pages/Payments';
import Reports from '../pages/Reports';
import Lenders from '../pages/Lenders';
import Renters from '../pages/Renters';
import Logout from '../pages/Logout';
import { ProtectedRoute } from './protected.route';
const Routes = props => {
    // console.log(props.item)
    return (
        <Switch>
            <ProtectedRoute path='/payments' exact component={Payments}/>
            <ProtectedRoute path='/reports' exact component={Reports}/>
            <ProtectedRoute path='/lenders' exact component={Lenders}/>
            <ProtectedRoute path='/renters' exact component={Renters}/>
            <Route path='/' exact component={Logout} />
            {/* <Redirect from='/logout' to='/login' component={Logout} /> */}
        </Switch>
    )
}

export default Routes
