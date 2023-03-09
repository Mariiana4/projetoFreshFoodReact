import React, { useState } from 'react'
import {Routes, Route } from 'react-router-dom'
import Pagina_inicio from './componentes/paginas/Pagina_inicio'
import Pagina_login from './componentes/paginas/Pagina_login'
import Pagina_cadastro from './componentes/paginas/Pagina_cadastro'
import Context from './Context.'
import Pagina_cestaDeCompras from './componentes/paginas/Pagina_cestaDeCompras'

function RotaLogin() {
  const  [context, setContext] = useState(null);

  return (
    <Context.Provider value={[context, setContext]}>
      <Routes>
        <Route path="/" element={<Pagina_inicio/>}/>
        <Route path="/login" element={<Pagina_login/>}/>
        <Route path="/cadastro" element={<Pagina_cadastro/>}/>
        <Route path="/cestaDeCompras" element={<Pagina_cestaDeCompras/>}/>
      </Routes>

    </Context.Provider>
  )
}

export default RotaLogin