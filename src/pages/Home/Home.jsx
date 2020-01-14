import React from 'react'
import { Tweet } from '../../components/Tweet/Tweet.jsx'

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
        React.createElement(Tweet, infoTweet1, [ 
            "alo alo"
        ]),
        <Tweet { ...infoTweet2 } >
            { infoTweet2.conteudo }
        </Tweet>
    ]

    return (
        <div>
            <header class="cabecalho">
                <div class="cabecalho__container container">
                    <h1 class="cabecalho__logo">
                        <a href="/">Twitelum</a>
                    </h1>
                    <nav class="navMenu">
                        <ul class="navMenu__lista">
                            <li class="navMenu__item">
                                <a class="navMenu__link" href="/">
                                    Bem vindo(a): <br />
                                    <strong> @alumna</strong>
                                </a>
                            </li>
                            <li class="navMenu__item">
                                <a class="navMenu__link" href="/">
                                    Página Inicial
                                </a>
                            </li>
                            <li class="navMenu__item">
                                <a class="navMenu__link" href="/hashtags">
                                    Hashtags
                                </a>
                            </li>
                            <li class="navMenu__item">
                                <a class="navMenu__link" href="/logout">
                                    Logout
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            <div class="container">
                <div class="dashboard">
                <div class="widget">
                    <form class="novoTweet">
                        <div class="novoTweet__editorArea">
                            <span class="novoTweet__status">0/140</span>
                            <textarea class="novoTweet__editor" placeholder="O que está acontecendo?"></textarea>
                        </div>
                        <button type="submit" class="novoTweet__envia">Tweetar</button>
                    </form>
                </div>
                <div class="widget">
                    <div class="trendsArea">
                        <h2 class="trendsArea__titulo widget__titulo">Trends Brasil</h2>
                        <ol class="trendsArea__lista">
                            <li><a href="/">#react</a></li>
                            <li><a href="/">#reactHooks</a></li>
                        </ol>
                    </div>
                </div>
            </div>

                <div class="dashboard dashboard__centro">
                    <div class="widget">
                        <div class="tweetsArea">
                            { listaTweets }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}