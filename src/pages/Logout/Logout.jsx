import React from "react"

import * as AutenticarService from '../../model/services/AutenticarService.js'
import { Redirect } from "react-router-dom"

export function Logout() {

    AutenticarService.desautenticar()
    
    return (
        <Redirect to="/login" />
    )
}