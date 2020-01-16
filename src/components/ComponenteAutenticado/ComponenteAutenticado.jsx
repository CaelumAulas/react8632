import React from 'react'
import { Redirect } from 'react-router-dom'

export function ComponenteAutenticado(props) {

    const { children: pagina, redirecionarPara, podeExibir} = props
    
    return (
        (podeExibir)
            ? pagina
            : <Redirect to={redirecionarPara} />
    )
}