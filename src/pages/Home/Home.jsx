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
    Form,
    Modal
} from '../../components/index.js'

import * as AutenticarService from '../../model/services/AutenticarService.js'
import * as TweetsService from '../../model/services/TweetsService.js'

import { Contexto as NotificacaoContexto } from '../../components/Notificacao/Notificacao.jsx'

import { store } from '../../store.js'

export function HomeSemAutenticacao() {
    const [ listaTweets, setListaTweets ] = useState([])

    const { setMsg } = useContext(NotificacaoContexto)

    store.subscribe(() => {
        setListaTweets(store.getState().listaTweets)
    })

    useEffect(() => {
        TweetsService.carrega()
            .then(listaServidor => {
                store.dispatch({
                    type: "LISTA",
                    lista: listaServidor
                })
            })
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setMsg("")
        }, 5000)
    })

    const [tweetModal, setTweetModal] = useState(null)

    function abreModal(tweet) {
        setTweetModal(tweet)
    }

    function fechaModal() {
        setTweetModal(null)
    }

    function adicionaTweet(textoTweetNovo) {
        TweetsService.adiciona(textoTweetNovo)
            .then(novoTweet => {
                store.dispatch({
                    type: "ADICIONA",
                    tweet: novoTweet
                })
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
                                <Tweet { ...infoTweet } key={infoTweet.id} onConteudoClicado={() => abreModal(infoTweet)} >
                                    { infoTweet.conteudo }
                                </Tweet>
                            )}

                        </div>
                    </Widget>
                </Dashboard>
            </div>

            {tweetModal !== null
                ? (
                    <Modal onFechando={fechaModal}>
                        <Tweet {...tweetModal} >
                            {tweetModal.conteudo} 
                        </Tweet>
                    </Modal>
                )
                : ''
            }

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