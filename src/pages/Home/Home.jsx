import React from 'react'
import { Tweet, Cabecalho, NavMenu, Dashboard, Widget, TrendsArea } from '../../components/index.js'

export function Home() {
    const infoTweet1 = {
        conteudo: 'oi', 
        nomeCompletoUsuario: "Artur Diniz", 
        nomeUsuario: "artdiniz", 
        qtLikes: 0
    }
    
    const infoTweet2 = {
        conteudo: 'tchau', 
        nomeCompletoUsuario: "Artur Adam", 
        nomeUsuario: "artadam", 
        qtLikes: 2
    }
    
    const listaTweets = [
        React.createElement(
            Tweet, 
            {...infoTweet1, key: 1}, 
            [ 
                "alo alo"
            ]
        ),
        <Tweet { ...infoTweet2 } key="2">
            { infoTweet2.conteudo }
        </Tweet>
    ]

    return (
        <div>
            <Cabecalho>
               <NavMenu> </NavMenu>
            </Cabecalho>

            <div className="container">
                <Dashboard>
                    <Widget>
                        <form className="novoTweet">
                            <div className="novoTweet__editorArea">
                                <span className="novoTweet__status">0/140</span>
                                <textarea className="novoTweet__editor" placeholder="O que está acontecendo?"></textarea>
                            </div>
                            <button type="submit" className="novoTweet__envia">Tweetar</button>
                        </form>
                    </Widget>
                    <Widget>
                        <TrendsArea></TrendsArea>
                    </Widget>
                </Dashboard>

                <Dashboard posicao="centro">
                    <Widget>
                        <div className="tweetsArea">
                            { listaTweets }
                        </div>
                    </Widget>
                </Dashboard>
            </div>
        </div>
    )
}