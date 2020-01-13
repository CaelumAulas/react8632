import { Tweet } from './components/Tweet.js'

const tweetsArea = document.querySelector('.tweetsArea')

const listaTweets = [
    Tweet('oi'),
    Tweet('tchau')
]
ReactDOM.render(listaTweets, tweetsArea)
