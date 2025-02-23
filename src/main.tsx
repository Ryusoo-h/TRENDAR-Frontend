import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { RouterProvider } from 'react-router-dom'

import { basicTheme } from '@layouts/theme.ts'
import { GlobalStyle } from '@layouts/GlobalStyle.ts'
import router from './router.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={basicTheme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
)
