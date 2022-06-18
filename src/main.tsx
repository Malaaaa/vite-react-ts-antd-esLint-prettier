import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { store } from './feartures/store'
import { Provider } from 'react-redux'
import { BrowserRouter } from "react-router-dom";
import { worker } from './mocks/browser'

worker
  .start({ quiet: true })
  .then(() => {
    ReactDOM.createRoot(document.getElementById('root')!).render(
      <React.StrictMode>
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      </React.StrictMode>
    )
  }).catch(err => {

    console.error(err)
  }
  )
