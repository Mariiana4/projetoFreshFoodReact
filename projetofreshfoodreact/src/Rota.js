import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Pagina_inicio from './componentes/paginas/Pagina_inicio'
import Pagina_login from './componentes/paginas/Pagina_login'
import Pagina_cadastro from './componentes/paginas/Pagina_cadastro'

function RotaLogin() {
  return (
      <Routes>
        <Route path="/" element={<Pagina_inicio/>}/>
        <Route path="/login" element={<Pagina_login/>}/>
        <Route path="/cadastro" element={<Pagina_cadastro/>}/>
      </Routes>
  )
}

export default RotaLogin