import { useState } from 'react';
import React from 'react'

import CabecalhoParte01 from '../cabecalho/parte01/CabecalhoParte01'
import cabecalhoParte02 from '../cabecalho/parte02/CabecalhoParte02'

import CardDeReceitas from '../cardReceitas/CardDeReceitas'
import {Receitas} from '../data/Data'

import Rodape from '../rodape/Rodape'

function Pagina_inicio() {

    const [receitas, setReceitas] = useState(Receitas);
    const buscarReceitasPorTitulo = (titulo) => {
    setReceitas(Receitas.filter(x => x.nomeCardReceitas.toLowerCase().includes(titulo.toLowerCase())));
  }

  return (
    <>
        <div className="App">
            <CabecalhoParte01/>
            <div className="container02">
                    <label for="filter" className="sr-only">Pesquisar</label>
                    <input id="filter" className="campo-pesquisa" type="text" placeholder="| Pesquisar" onChange={(e)=> buscarReceitasPorTitulo(e.target.value)}/>
                    <img className="icone-lupa" src="./imagens/cabecalho/parte02/lupa-pesquisa.svg" alt="ilustração de lupa"/>
            </div>

            <ul class="container_cards">
                {
                receitas.map((x,i) =>(
                    <CardDeReceitas
                    imagemCardReceitas={x.imagemCardReceitas} 
                    tagCardReceitas={x.tagCardReceitas} 
                    nomeCardReceitas={x.nomeCardReceitas} 
                    tempoCardReceitas={x.tempoCardReceitas} 
                    dificuldadeCardReceitas={x.dificuldadeCardReceitas} 
                    porcaoCardReceitas={x.porcaoCardReceitas}
                    itensCardReceitas={x.itensCardReceitas} 
                    precoCardReceitas={x.precoCardReceitas}/>
                ))
                }
            </ul>
      
            <Rodape/>
        </div>
    </>
  )
}

export default Pagina_inicio