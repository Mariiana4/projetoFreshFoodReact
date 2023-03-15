import React from 'react'
import CardDeReceitas from '../CardDeReceitas.css'
import '../card_paginaFavoritos/Card_paginaFavoritos02.css'

function Card_paginaFavoritos() {
  return (
    <>
        <main class="main">

            <h2 className='titulo_paginaFavoritos'>Veja suas receitas favoritas</h2>
            <ul class="container_cards" id='container_paginaFavoritos'>

                <li class="card">
                    <img class="image_card" src="/imagens/cardReceitas/receitas/imagens_receita/imagem_receita_mousse-chocolate.jpg" alt=""/>
            
                    <div class="container_informacoes">
                        <div class="tag_icone-fav">
                            <p class="tag">Sobremesas</p>
                            <i class="fa-solid fa-heart" id='testeFavorito'></i>
                        </div>
            
                        <h2 class="nome-receita">Mousse Clássica de Chocolate</h2>
            
                        <div class="container_icones">
            
                            <div class="icone_descricao" id="tempo">
                                <img class="iconeCard" src="/imagens/cardReceitas/tempo_icone.svg" alt=""/>
                                <p class="descricao_iconeCard">200 min</p>
                            </div>
                
                            <img className="iconeCard" src="/imagens/cardReceitas/linha.png" alt=""/>

                            <div class="icone_descricao">
                                <img class="iconeCard" src="/imagens/cardReceitas/dificuldade_icone.jpg" alt=""/>
                                <p class="descricao_iconeCard">Fácil</p>
                            </div>

                            <img className="iconeCard" src="/imagens/cardReceitas/linha.png" alt=""/>
                    
                            <div class="icone_descricao">
                                <p class="quantidadePorcao_icone_descricao" id='testePorcao'>6</p>
                                <img class="iconeCard" src="/imagens/cardReceitas/porcao_icone.svg" alt=""/>
                                <p class="descricao_iconeCard">Porção</p>
                            </div>
                        </div>
                    </div>
            
                </li>

                <li class="card">
                    <img class="image_card" src="/imagens/cardReceitas/receitas/imagens_receita/imagem_receita_risoto-camarao.jpg" alt=""/>
            
                    <div class="container_informacoes">
                        <div class="tag_icone-fav">
                            <p class="tag">Frutos do mar</p>
                            <i class="fa-solid fa-heart" id='testeFavorito'></i>
                        </div>
            
                        <h2 class="nome-receita">Risoto de camarão</h2>
            
                        <div class="container_icones">
            
                            <div class="icone_descricao" id="tempo">
                                <img class="iconeCard" src="/imagens/cardReceitas/tempo_icone.svg" alt=""/>
                                <p class="descricao_iconeCard">45 min</p>
                            </div>
                
                            <img className="iconeCard" src="/imagens/cardReceitas/linha.png" alt=""/>

                            <div class="icone_descricao">
                                <img class="iconeCard" src="/imagens/cardReceitas/dificuldade_icone.jpg" alt=""/>
                                <p class="descricao_iconeCard">Médio</p>
                            </div>

                            <img className="iconeCard" src="/imagens/cardReceitas/linha.png" alt=""/>
                    
                            <div class="icone_descricao">
                                <p class="quantidadePorcao_icone_descricao" id='testePorcao'>4</p>
                                <img class="iconeCard" src="/imagens/cardReceitas/porcao_icone.svg" alt=""/>
                                <p class="descricao_iconeCard">Porção</p>
                            </div>
                        </div>
                    </div>
            
                </li>

                <li class="card">
                    <img class="image_card" src="/imagens/cardReceitas/receitas/imagens_receita/imagem_receita_french-toast.jpg" alt=""/>
            
                    <div class="container_informacoes">
                        <div class="tag_icone-fav">
                            <p class="tag">Vegano</p>
                            <i class="fa-solid fa-heart" id='testeFavorito'></i>
                        </div>
            
                        <h2 class="nome-receita">French toast vegano</h2>
            
                        <div class="container_icones">
            
                            <div class="icone_descricao" id="tempo">
                                <img class="iconeCard" src="/imagens/cardReceitas/tempo_icone.svg" alt=""/>
                                <p class="descricao_iconeCard">30 minutos</p>
                            </div>
                
                            <img className="iconeCard" src="/imagens/cardReceitas/linha.png" alt=""/>

                            <div class="icone_descricao">
                                <img class="iconeCard" src="/imagens/cardReceitas/dificuldade_icone.jpg" alt=""/>
                                <p class="descricao_iconeCard">Fácil</p>
                            </div>

                            <img className="iconeCard" src="/imagens/cardReceitas/linha.png" alt=""/>
                    
                            <div class="icone_descricao">
                                <p class="quantidadePorcao_icone_descricao" id='testePorcao'>8</p>
                                <img class="iconeCard" src="/imagens/cardReceitas/porcao_icone.svg" alt=""/>
                                <p class="descricao_iconeCard">Porção</p>
                            </div>
                        </div>
                    </div>
            
                </li>

                <li class="card">
                    <img class="image_card" src="/imagens/cardReceitas/receitas/imagens_receita/imagem_receita_fraldinha-assada-molhoMostarda.jpg" alt=""/>
            
                    <div class="container_informacoes">
                        <div class="tag_icone-fav">
                            <p class="tag">Carnes</p>
                            <i class="fa-solid fa-heart" id='testeFavorito'></i>
                        </div>
            
                        <h2 class="nome-receita">Fraldinha assada com manteiga e alho</h2>
            
                        <div class="container_icones">
            
                            <div class="icone_descricao" id="tempo">
                                <img class="iconeCard" src="/imagens/cardReceitas/tempo_icone.svg" alt=""/>
                                <p class="descricao_iconeCard">35 min</p>
                            </div>
                
                            <img className="iconeCard" src="/imagens/cardReceitas/linha.png" alt=""/>

                            <div class="icone_descricao">
                                <img class="iconeCard" src="/imagens/cardReceitas/dificuldade_icone.jpg" alt=""/>
                                <p class="descricao_iconeCard">Médio</p>
                            </div>

                            <img className="iconeCard" src="/imagens/cardReceitas/linha.png" alt=""/>
                    
                            <div class="icone_descricao">
                                <p class="quantidadePorcao_icone_descricao" id='testePorcao'>5</p>
                                <img class="iconeCard" src="/imagens/cardReceitas/porcao_icone.svg" alt=""/>
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