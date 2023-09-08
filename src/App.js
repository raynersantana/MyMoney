import React from 'react'
import Header from './elements/Header'
import Home from './pages/Home/index'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Movimentacoes from './pages/Movimentacoes'

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/movimentacoes/:data' Component={Movimentacoes} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App