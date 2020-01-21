import { createStore } from 'redux'

const ESTADO_INICIAL = { listaTweets: [] }

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

export const store = createStore(function reducer(estado = ESTADO_INICIAL, acao) {

    if (acao.type === "LISTA") {
        return {
            listaTweets: acao.lista.map(converteTweet)
        }
    }

    if (acao.type === "LIKE") {
        const tweetLikeado = estado.listaTweets.find(({id}) => id === acao.id)

        if (tweetLikeado.likeado) {
            tweetLikeado.likeado = false
            tweetLikeado.qtLikes = tweetLikeado.qtLikes - 1 
        } else {
            tweetLikeado.likeado = true
            tweetLikeado.qtLikes = tweetLikeado.qtLikes + 1 
        }
    
        return {
            listaTweets: [...estado.listaTweets]
        }
    }

    if (acao.type === "ADICIONA") {
        return {
            listaTweets: [
                converteTweet(acao.tweet),
                ...estado.listaTweets
            ]
        }
    }

    return estado
})


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