import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import TermPage from './pages/TermPage.jsx'
import TermIndex from './pages/TermIndex.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/term/:termId" element={<TermPage />} />
        <Route path="/index" element={<TermIndex />} />
        <Route path="/index/:category" element={<TermIndex />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
