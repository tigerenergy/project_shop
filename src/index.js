import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'


const basicState = 
  [
      {id: 0, name: '멋진기타', quan: 2},
      {id: 1, name: '예쁜기타', quan: 5},
      {id: 2, name: '귀여운기타', quan: 6}
  ]

const reducer = (state = basicState , action) =>
{  
  if(action.type === 'add')
  {
    let copy = [...state]
    copy[0].quan++
    return copy
  }
  if(action.type === 'remove')
  {
    let copy = [...state]
    copy[0].quan--
    return copy
  }
  else
  {
    return state
  }
}

const store = createStore(reducer)


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
