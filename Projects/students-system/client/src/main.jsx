import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { ResetStyle } from './styles/reset'
import { Theme } from './styles/theme'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes'


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <ThemeProvider theme={Theme}>
    <ResetStyle/>
    <RouterProvider router= {routes}/>
    </ThemeProvider>
  // {/* </React.StrictMode> */}
)
