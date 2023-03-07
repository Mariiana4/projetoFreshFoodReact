import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Cabecalho_simples.css'

function Cabecalho_simples() {
  const navigate = useNavigate();
  
  return (
    <>
        <header className="cabecalho-simples">
            <i onClick={() => navigate(-1)} className="fa-solid fa-arrow-left"></i>
            <img className="logo_cabecalho-simples" src="imagens/cabecalho/parte01/logo.svg" alt=""/>
        </header>
    </>
  )
}

export default Cabecalho_simples