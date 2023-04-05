import React from 'react'
import ReactDOM from 'react-dom/client'
import 'assets/style/global.css'

import { BrowserRouter } from 'react-router-dom'
import Routes from 'Routes'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </React.StrictMode>
)
