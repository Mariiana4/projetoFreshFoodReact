import React from 'react'
import CardDeReceitas from '../CardDeReceitas.css'

function Card_paginaFavoritos() {
  return (
    <>
        <main class="main">

            <h2 class="titulo_paginaFavoritos">Veja suas receitas favoritas</h2>

            <ul class="container_cards">

                <li class="card">
                    <img class="image_card" src="/imagens/cardReceitas/receitas/imagens_receita/imagem_receita_morango-suspiro.jpg" alt=""/>
            
                    <div class="container_informacoes">
                        <div class="tag_icone-fav">
                            <p class="tag">Vegetariano</p>
                            <i class="fa-regular fa-heart"></i>
                        </div>
            
                        <h2 class="nome-receita">Salada primavera simples</h2>
            
                        <div class="container_icones">
            
                            <div class="icone_descricao" id="tempo">
                                <img class="iconeCard" src="/imagens/tempo_dificuldade_porcao/tempo_icone.svg" alt=""/>
                                <p class="descricao_iconeCard">Tempo</p>
                            </div>
                    
                            <div class="icone_descricao">
                                <img class="iconeCard" src="/imagens/tempo_dificuldade_porcao/dificuldade_icone.jpg" alt=""/>
                                <p class="descricao_iconeCard">Dificuldade</p>
                            </div>
                    
                            <div class="icone_descricao">
                                <p class="quantidadePorcao_icone_descricao">5</p>
                                <img class="iconeCard" src="/imagens/tempo_dificuldade_porcao/porcao_icone.svg" alt=""/>
                                <p class="descricao_iconeCard">Porção</p>
                            </div>
                        </div>
                    </div>
            
                </li>

            </ul>

        </main>
    </>
  )
}

export default Card_paginaFavoritos