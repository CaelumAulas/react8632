import * as TweetsService from '../model/services/TweetsService.js'

const LISTA_TWEETS_INICIAL = []

function converteTweet(tweet) {
    return {
        nomeUsuario: tweet.usuario.login,
        nomeCompletoUsuario: tweet.usuario.nome,
        qtLikes: tweet.totalLikes,
        conteudo: tweet.conteudo,
        likeado: false,
        id: tweet._id
    }
}

export function listaTweetsReducer(listaTweets = LISTA_TWEETS_INICIAL, acao) {

    if (acao.type === "LISTA") {
        return acao.lista.map(converteTweet)
    }

    if (acao.type === "LIKE") {
        const tweetLikeado = listaTweets.find(({id}) => id === acao.id)

        if (tweetLikeado.likeado) {
            tweetLikeado.likeado = false
            tweetLikeado.qtLikes = tweetLikeado.qtLikes - 1 
        } else {
            tweetLikeado.likeado = true
            tweetLikeado.qtLikes = tweetLikeado.qtLikes + 1 
        }
    
        return [...listaTweets]
    }

    if (acao.type === "ADICIONA") {
        return [
            converteTweet(acao.tweet),
            ...listaTweets
        ]
    }

    return listaTweets
}


// Action Creators
export const criaAcaoLista = (tweets) => {
    return {
        type: "LISTA",
        lista: tweets
    }
}

export const criaAcaoLike = (id) => {
    return {
        type: "LIKE", 
        id: id
    }
}

export const criaAcaoAdiciona = (tweet) => {
    return {
        type: "ADICIONA", 
        tweet: tweet
    }
}

//Thunk Action Creator
export const criaAcaoAdicionarServidor = (textoTweetNovo) => {
    return (dispatch) => {
        TweetsService
            .adiciona(textoTweetNovo)
            .then(novoTweet => {
                dispatch(criaAcaoAdiciona(novoTweet))
            })
    }
}

//Thunk Action Creator
export const criaAcaoCarregarServidor = () => {
    return (dispatch) => {
        TweetsService
            .carrega()
            .then((listaServidor) => {
                dispatch(criaAcaoLista(listaServidor))
            })
    }
}