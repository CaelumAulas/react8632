import React from 'react'

import { Home } from './pages/Home/Home.jsx'
import { Login } from './pages/Login/Login.jsx'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact={true}>
                    <Home />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
            </Switch>
        </Router>
    )
}