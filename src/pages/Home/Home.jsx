// Hook
import React, { useState } from 'react'
import { 
    Tweet, 
    Cabecalho, 
    NavMenu, 
    Dashboard, 
    Widget, 
    TrendsArea 
} from '../../components/index.js'

const listaInicialFake = [
    {
        conteudo: 'alo alo', 
        nomeCompletoUsuario: "Artur Diniz", 
        nomeUsuario: "artdiniz", 
        qtLikes: 0,
        id: 5
    },
    {
        conteudo: 'vamo logar', 
        nomeCompletoUsuario: "Artur Adam", 
        nomeUsuario: "artadam", 
        qtLikes: 2,
        id: 7
    }
]

export function Home() {
    const [ textoTweetNovo, setTextoTweetNovo ] = useState("")
    
    const [ listaTweets, setListaTweets ] = useState(listaInicialFake)

    function onSubmitFormulario(eventoSubmit) {
        eventoSubmit.preventDefault()
        const novoTweet = {
            conteudo: textoTweetNovo, 
            nomeCompletoUsuario: "Artur Adam", 
            nomeUsuario: "artadam", 
            qtLikes: 2,
            id: 7
        }

        setListaTweets( [ novoTweet, ...listaTweets ] )
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
        <div>
            <Cabecalho>
               <NavMenu> </NavMenu>
            </Cabecalho>

            <div className="container">
                <Dashboard>
                    <Widget>
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
                    </Widget>
                    <Widget>
                        <TrendsArea></TrendsArea>
                    </Widget>
                </Dashboard>

                <Dashboard posicao="centro">
                    <Widget>
                        <div className="tweetsArea">

                            {listaTweets.map(infoTweet => 
                                <Tweet { ...infoTweet } key={infoTweet.id}>
                                    { infoTweet.conteudo }
                                </Tweet>
                            )}

                        </div>
                    </Widget>
                </Dashboard>
            </div>
        </div>
    )
}
