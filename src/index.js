import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux'

const alertState = true

const alertReducer = (state = alertState, action) =>
{ 
  if(action.type === 'close')
  {
    state = false
    return state
  }
  else 
  {
    return state
  }
}


const basicState = 
  [
      // {
 
      //   quan: 2
      // },
      // {

      //   quan: 2
      // }
  ]


const reducer = (state = basicState , action) =>
{ 
  let found = state.findIndex((item)=>
  {
    return item.id === action.payload.id 
  })
  
  if(action.type === 'addItem')
  { 

    if(found >= 0)
    {
      let copy = [...state]
      copy[found].quan++
      return copy
    }
    else
    {
      let copy = [...state]
      copy.push(action.payload)
      return copy
    }
    
  }

  if(action.type === 'add')
  {
    let copy = [...state]
    copy[action.payload].quan++
    return copy
  }
  if(action.type === 'remove')
  {
    let copy = [...state]
    copy[action.payload].quan--
    return copy
  }  
  else
  {
    return state
  }
}

const store = createStore(combineReducers({reducer, alertReducer}))


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
