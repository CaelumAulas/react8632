
// Componente Tweet
export function Tweet(conteudo) {
    return React.createElement('article', {className: 'tweet'}, [
        React.createElement('div', {class: 'tweet__cabecalho'}, [
            "CABEACALHO TWEET"
        ]),
        React.createElement('p', {className: 'tweet__conteudo'}, [
            conteudo
        ]),
        React.createElement('footer', {class: 'tweet__footer'}, [
            "FOOTER TWEET"
        ]),
    ])
}