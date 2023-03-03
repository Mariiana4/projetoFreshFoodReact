import React from 'react'
import './CabecalhoParte01.css'

function cabecalhoParte01() {
  return (
    <>
    {/* <div className="container01">
      <img className="logo" src="./imagens/cabecalho/parte01/logo.svg" width="30px" alt="ilustrsção de uma maçã vermelha com duas folhas verdes no topo"/>

      <nav className="nav-links">
          <a className="sobre-nos link" href="#sobre-nos">Sobre a Fresh Food</a>
  
          <a className="favoritos link" href="#"><img width="30px" src="./imagens/cabecalho/parte01/icone_favoritos.svg" alt="ilustração de um coração vermelho"/></a>
  
          <a className="cesta link" href="#"><img width="30px" src="./imagens/cabecalho/parte01/icone_cestaCompras.svg" alt="ilustração de cesta na cor preta"/></a>
  
          <a className="icone_login-cadastro link" href="#"><img width="30px" src="./imagens/cabecalho/parte01/icone_login-cadastro.svg" alt="ilustração da sobre um pessoa sem cabelo"/></a>

      </nav>
    </div> */}
    <div class="container01">
            <img class="logo" src="imagens/cabecalho/parte01/logo.svg" width="30px" alt="ilustrsção de uma maçã vermelha com duas folhas verdes no topo"/>
    
            <nav class="nav-links">
      
                <i class="fa-solid fa-heart" id='coracao'></i>
        
                <i class="fa-solid fa-basket-shopping" id='cesta'></i>
        
                <i class="fa-solid fa-circle-user" id='user'></i>
    
            </nav>
        </div>
    </>
  )
}

export default cabecalhoParte01