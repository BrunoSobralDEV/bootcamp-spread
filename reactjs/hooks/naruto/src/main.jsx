import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './pages/app/App'
import { GlobalStyle } from './components'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <>
    <GlobalStyle />
      <App />
  </>
  // </React.StrictMode>
)
