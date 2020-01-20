// Hook
import React, { useState, useEffect, useContext} from 'react'
import { 
    Tweet, 
    Cabecalho, 
    NavMenu, 
    Dashboard, 
    Widget, 
    TrendsArea,
    ComponenteAutenticado,
    Form
} from '../../components/index.js'

import * as AutenticarService from '../../model/services/AutenticarService.js'
import * as TweetsService from '../../model/services/TweetsService.js'

import { Contexto as NotificacaoContexto } from '../../components/Notificacao/Notificacao.jsx'

function converteTweet(tweet) {
    return {
        nomeUsuario: tweet.usuario.login,
        nomeCompletoUsuario: tweet.usuario.nome,
        qtLikes: tweet.totalLikes,
        conteudo: tweet.conteudo
    }
}

export function HomeSemAutenticacao() {
    const [ listaTweets, setListaTweets ] = useState([])

    const { setMsg } = useContext(NotificacaoContexto)

    useEffect(() => {
        TweetsService.carrega()
            .then(listaServidor => {
                setListaTweets([
                    ...listaServidor.map(converteTweet), 
                    ...listaTweets
                ])
            })
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setMsg("")
        }, 5000)
    })

    // Função Closure
    // Prop de callback
    // Adicionar Tweets no servidor
    function adicionaTweet(textoTweetNovo) {
        TweetsService.adiciona(textoTweetNovo)
            .then(novoTweet => {
                setListaTweets([ 
                    converteTweet(novoTweet), 
                    ...listaTweets 
                ])
            })
    }

    return (
        <div>
            <Cabecalho>
               <NavMenu usuario="artadam"> </NavMenu>
            </Cabecalho>

            <div className="container">
                <Dashboard>
                    <Widget>
                        <Form adicionaTweet={ adicionaTweet }/>
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


export function Home(props) {
    const isLogado = AutenticarService.isAutenticado()

    return (
        <ComponenteAutenticado podeExibir={isLogado} redirecionarPara="/login" >
            <HomeSemAutenticacao {...props}/>
        </ComponenteAutenticado>
    )
}