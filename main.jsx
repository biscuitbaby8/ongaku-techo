import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

/**
 * このファイルが index.html の "root" 部分に
 * App.jsx (アプリ本体) を流し込む役割をします。
 */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
