// Hook
import React, { useState, useEffect, useContext } from 'react'
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

import { Contexto as NotificacaoContexto } from '../../components/Notificacao/Notificacao.jsx'

import { StoreContexto } from  '../../components/index.js'

import { criaAcaoAdicionarServidor, criaAcaoCarregarServidor } from '../../ducks/listaTweets.js'

export function HomeSemAutenticacao() {
    const [ listaTweets, setListaTweets ] = useState([])

    const { setMsg } = useContext(NotificacaoContexto)

    const { store } = useContext(StoreContexto)

    store.subscribe(() => {
        setListaTweets(store.getState().listaTweets)
    })

    useEffect(() => {
        store.dispatch(criaAcaoCarregarServidor())
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
        store.dispatch(criaAcaoAdicionarServidor(textoTweetNovo))
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
