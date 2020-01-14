import ReactDOM from 'react-dom'
import { Tweet } from './components/Tweet/Tweet'

const tweetsArea = document.querySelector('.tweetsArea')

const listaTweets = [
    Tweet('oi'),
    Tweet('tchau')
]

ReactDOM.render(listaTweets, tweetsArea)
