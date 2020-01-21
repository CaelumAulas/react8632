import React from 'react'

import { Home } from './pages/Home/Home.jsx'
import { Login } from './pages/Login/Login.jsx'
import { Logout } from './pages/Logout/Logout.jsx'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { 
    Notificacao,
    ReduxStoreProvider
} from './components/index.js'

export function App() {
    return (
    <ReduxStoreProvider>
        <Notificacao>
            <Router>
                <Switch>
                    <Route path="/" exact={true}>
                        <Home />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/logout">
                        <Logout />
                    </Route>
                </Switch>
            </Router>
        </Notificacao>
    </ReduxStoreProvider>
    )
}