import React from "react";
import GreetingContainer from './greeting/greeting_container'
import { Route } from 'react-router-dom'
import LoginFormContainer from './session_form/login_form_container'
import SignupFormContainer from './session_form/signup_form_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util'
import DashboardContainer from './dashboard/dashboard_container'
import TextFomContainer from './post_forms/text_form_container'

const App = () => (
    <div className="cheese">
        <ProtectedRoute exact path='/dashboard' component={DashboardContainer} />
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <AuthRoute exact path='/' component={GreetingContainer} />
        <Route path="/upload-text" component={TextFomContainer}/>
    </div>
);

export default App;