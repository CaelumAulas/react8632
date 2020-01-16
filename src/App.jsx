import React from 'react'

import { Home } from './pages/Home/Home.jsx'
import { Login } from './pages/Login/Login.jsx'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Notificacao } from './components/Notificacao/Notificacao.jsx'

export function App() {
    return (
    <Notificacao>
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
    </Notificacao>
    )
}