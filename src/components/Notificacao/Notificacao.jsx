import React, { useState, createContext } from 'react'

export const Contexto = createContext({
    setMsg: () => {}
})

export function Notificacao(props) {
    const conteudo = props.children

    const [ msg, setMsg ] = useState("")

    return (
        <Contexto.Provider 
            value={ {setMsg: setMsg}  }
        >
            { conteudo }
            {msg.length > 0 
                ? <div className="notificacaoMsg"> { msg } </div>
                : ''
            }
        </Contexto.Provider>
    )
}