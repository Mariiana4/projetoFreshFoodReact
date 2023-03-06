import React from 'react'
import { Link } from 'react-router-dom'
import './Cabecalho_simples.css'

function Cabecalho_simples() {
  return (
    <>
        <header className="cabecalho-simples">
            <Link to="/"><i className="fa-solid fa-arrow-left"></i></Link>
            <img className="logo_cabecalho-simples" src="imagens/cabecalho/parte01/logo.svg" alt=""/>
        </header>
    </>
  )
}

export default Cabecalho_simples