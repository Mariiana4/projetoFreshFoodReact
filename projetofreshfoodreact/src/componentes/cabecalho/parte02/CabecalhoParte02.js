import React from 'react'
import './CabecalhoParte02.css'

function CabecalhoParte02() {
  return (
    <>
        <div className="container02">
            <label for="filter" className="sr-only">Pesquisar</label>
            <input id="filter" className="campo-pesquisa" type="text" placeholder="| Pesquisar"/>
            <img className="icone-lupa" src="./imagens/cabecalho/parte02/lupa-pesquisa.svg" alt="ilustração de lupa"/>
        </div>
    </>
  )
}

export default CabecalhoParte02