import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { fromEvent } from 'rxjs'
import { mapTo } from 'rxjs/operators'

const link = document.createElement('link')
const fontsFething$ = fromEvent(link, 'load').pipe(mapTo(true))

link.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,400;0,500;1,400;1,500&display=swap')
link.setAttribute('rel', 'stylesheet')

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

fontsFething$.subscribe(isLoaded => {})

document.head.appendChild(link)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
