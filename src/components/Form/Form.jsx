import React, { useState } from 'react'

import './novoTweet.css'

export function Form(props) {
    const [ textoTweetNovo, setTextoTweetNovo ] = useState("")

    const { adicionaTweet } = props

    function onSubmitFormulario(eventoSubmit) {
        eventoSubmit.preventDefault()
        adicionaTweet(textoTweetNovo)
    }

    function onChangeTextarea(evento) {
        const novoTweet = evento.target.value
        setTextoTweetNovo(novoTweet)
    }

    const isInvalido = textoTweetNovo.length > 140

    const classeStatusTweet = (isInvalido)
        ? "novoTweet__status novoTweet__status--invalido"
        : "novoTweet__status"

    return (
        <form onSubmit={ onSubmitFormulario } className="novoTweet">
            <div className="novoTweet__editorArea">
                <span className={ classeStatusTweet }>
                    { textoTweetNovo.length }/140
                </span>
                <textarea 
                    id="novoTweet"
                    onChange={ onChangeTextarea }  
                    className="novoTweet__editor" 
                    placeholder="O que está acontecendo?"
                >
                </textarea>
            </div>
            <button disabled={ isInvalido } type="submit" className="novoTweet__envia">Tweetar</button>
        </form>
    )
}
