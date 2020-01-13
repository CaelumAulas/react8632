const tweetsArea = document.querySelector('.tweetsArea')

function criaTweet(conteudo) {
    return React.createElement('article', {className: 'tweet'}, [
        React.createElement('p', {className: 'tweet__conteudo'}, [
            conteudo
        ])
    ])
}

const listaTweets = [
    criaTweet('oi'),
    criaTweet('tchau')
]

ReactDOM.render(listaTweets, tweetsArea)
