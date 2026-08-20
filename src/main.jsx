import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from "@vercel/speed-insights/react"
import App from './App.jsx'

// /term/* と /index/* は本番では静的HTMLが配信されるため、これらのReactルートは
// 実際にはローカル開発時のフォールバックとしてしか使われない。
// これらは termArticles.js（1.8MB）を読み込むので、遅延読み込みにして
// トップページの初回バンドルから外す。
const TermPage = lazy(() => import('./pages/TermPage.jsx'))
const TermIndex = lazy(() => import('./pages/TermIndex.jsx'))

const Loading = () => (
  <div style={{ padding: 48, textAlign: 'center', fontWeight: 700, color: '#94a3b8' }}>読み込み中…</div>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/term/:termId" element={<TermPage />} />
          <Route path="/index" element={<TermIndex />} />
          <Route path="/index/:category" element={<TermIndex />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
    <Analytics />
    <SpeedInsights />
  </React.StrictMode>,
)
