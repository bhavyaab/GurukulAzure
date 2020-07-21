import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    // Redirect,
} from 'react-router-dom';

import { Home } from '../Component/Home';
import { Classroom } from '../Component/Classroom';
import { PageNotFound } from '../Component/notFound';

export const GurukulRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/home' component={Home} />
                <Route exact path='/classroom' component={Classroom} />
                <Route component={ PageNotFound } />
            </Switch>
        </Router>
    )}