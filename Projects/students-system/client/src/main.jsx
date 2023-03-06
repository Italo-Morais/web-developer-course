import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/reset'
import { Theme } from './styles/theme'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
    <GlobalStyle/>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
)
