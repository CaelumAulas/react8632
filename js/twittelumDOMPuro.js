
function criaEExibeTweetIMPERATIVO(conteudo) {
    const tweetsArea = document.querySelector('.tweetsArea')

    const tweet = document.createElement('article')
    tweet.className="tweet"

    const tweet__conteudo = document.createElement('p')
    tweet__conteudo.className="tweet__conteudo"
    tweet__conteudo.innerHTML = conteudo

    const tweet__btnLike = document.createElement('button')
    tweet__btnLike.className="btn"
    tweet__btnLike.innerHTML = 0

    tweet__btnLike.addEventListener('click', function(){
        tweet__btnLike.innerHTML = 1
    })
    

    tweetsArea.appendChild(tweet)
    tweet.appendChild(tweet__conteudo)
    tweet.appendChild(tweet__btnLike)
}

function criaEExibeTweet (conteudo, qtLikes = 0) {
    const tweetsArea = document.querySelector('.tweetsArea')

    const htmlTweet = `
        <article class="tweet">
            <div class="tweet__cabecalho">
                <img class="tweet__fotoUsuario" src="https://placehold.it/50x50" alt="" />
                <span class="tweet__nomeUsuario">Fulano de Tal</span>
                <a href="/"><span class="tweet__userName">@usuario</span></a>
            </div>
            <p class="tweet__conteudo"> ${conteudo} </p>
            <footer class="tweet__footer">
                <button class="btn btn--clean">
                    <svg class="icon icon--small iconHeart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.5 47.5">
                        <defs>
                            <clipPath id="a">
                                <path d="M0 38h38V0H0v38z"></path>
                            </clipPath>
                        </defs>
                        <g clipPath="url(#a)" transform="matrix(1.25 0 0 -1.25 0 47.5)">
                            <path d="M36.885 25.166c0 5.45-4.418 9.868-9.867 9.868-3.308 0-6.227-1.632-8.018-4.128-1.79 2.496-4.71 4.129-8.017 4.129-5.45 0-9.868-4.418-9.868-9.868 0-.773.098-1.52.266-2.242C2.75 14.413 12.216 5.431 19 2.965c6.783 2.466 16.249 11.448 17.617 19.96.17.721.268 1.47.268 2.241"></path>
                        </g>
                    </svg>
                    ${ qtLikes }
                </button>
            </footer>
        </article>
    `

    
    tweetsArea.innerHTML = htmlTweet + tweetsArea.innerHTML 

    numero++
    const btn = document.querySelector(`.btn:ntch-child(${numero})`)
    btn.addEventListener
}


const form = document.querySelector('.novoTweet')
form.addEventListener('submit', function enviaFormulario(evento) {
    evento.preventDefault()

    const textArea = document.querySelector('.novoTweet__editor')
    const conteudo = textArea.value
    criaEExibeTweet(conteudo)
})

let numeroTweet = 0
setInterval(function() {
    criaEExibeTweet("Tweet do servidor " + numeroTweet)
    numeroTweet++
}, 2500)

