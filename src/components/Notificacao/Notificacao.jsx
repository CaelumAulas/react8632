import React, { useState, createContext } from 'react'

export const NotificacaoContext = createContext({
    setMsg: () => {}
})

export function Notificacao(props) {
    const conteudo = props.children

    const [ msg, setMsg ] = useState("")

    return (
        <NotificacaoContext.Provider 
            value={ {setMsg: setMsg}  }
        >
            { conteudo }
            {msg.length > 0 
                ? <div className="notificacaoMsg"> { msg } </div>
                : ''
            }
        </NotificacaoContext.Provider>
    )
}