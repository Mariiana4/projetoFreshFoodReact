import React from 'react'
import './ItemCarrinho.css'

function ItemCarrinho() {
  return (
<>
    <main>
        <h1 className="titulo_cestoDeCompras">Cesto de compras</h1>

        <div className="container_itemIndividual_cestoDeCompras">
            <div className="container_informacoes_cestoDeCompras">
                <div className="item_cestoDeCompras">
                    <img className="imagem_item_cestoDeCompras" src="/imagens/cardReceitas/receitas/imagens_receita/imagem_receita_bolo-laranja.jpg" alt=""/>
        
                    <div className="nome_ingredientes_tag_remover_cestoDeCompras">
                        <h2 className="nome_cestoDeCompras">Bolo de laranja com alecrim vegano</h2>
        
                        <div className="container_tag_remover_cestoDeCompras">
                            <p className="tag_cestoDeCompras">Vegano</p>
                            <p className="remover_cestoDeCompras">Remover</p>
                        </div>
                    </div>
                </div>
        
                <div className="preco_quantidade_cestoDeCompras">
                    <p className="preco_cestoDeCompras">R$ 40,00</p>
                    
                    <div className="container_quantidade_cestoDeCompras">
                        <p className="remover_quantidade_cestoDeCompras">-</p>
                        <p className="quantidade_cestoDeCompras">1</p>
                        <p className="adicionar_quantidade_cestoDeCompras">+</p>
                    </div>
                </div>
    
            </div>
            <hr className="linha-divisao_cestoDeCompras"/>
        </div>

        <div className="container_itemIndividual_cestoDeCompras">
            <div className="container_informacoes_cestoDeCompras">
                <div className="item_cestoDeCompras">
                    <img className="imagem_item_cestoDeCompras" src="/imagens/cardReceitas/receitas/imagens_receita/imagem_receita_pao-queijo.jpg" alt=""/>
        
                    <div className="nome_ingredientes_tag_remover_cestoDeCompras">
                        <h2 className="nome_cestoDeCompras">Pão de queijo vegano</h2>
        
                        <div className="container_tag_remover_cestoDeCompras">
                            <p className="tag_cestoDeCompras">Vegano</p>
                            <p className="remover_cestoDeCompras">Remover</p>
                        </div>
                    </div>
                </div>
        
                <div className="preco_quantidade_cestoDeCompras">
                    <p className="preco_cestoDeCompras">R$ 32,90</p>
                    
                    <div className="container_quantidade_cestoDeCompras">
                        <p className="remover_quantidade_cestoDeCompras">-</p>
                        <p className="quantidade_cestoDeCompras">2</p>
                        <p className="adicionar_quantidade_cestoDeCompras">+</p>
                    </div>
                </div>
    
            </div>
            <hr className="linha-divisao_cestoDeCompras"/>
        </div>

        <div className="container_itemIndividual_cestoDeCompras">
            <div className="container_informacoes_cestoDeCompras">
                <div className="item_cestoDeCompras">
                    <img className="imagem_item_cestoDeCompras" src="/imagens/cardReceitas/receitas/imagens_receita/imagem_receita_morango-suspiro.jpg" alt=""/>
        
                    <div className="nome_ingredientes_tag_remover_cestoDeCompras">
                        <h2 className="nome_cestoDeCompras">Surpresa de morangos com merengue</h2>
        
                        <div className="container_tag_remover_cestoDeCompras">
                            <p className="tag_cestoDeCompras">Sobremesa</p>
                            <p className="remover_cestoDeCompras">Remover</p>
                        </div>
                    </div>
                </div>
        
                <div className="preco_quantidade_cestoDeCompras">
                    <p className="preco_cestoDeCompras">R$ 24,90</p>
                    
                    <div className="container_quantidade_cestoDeCompras">
                        <p className="remover_quantidade_cestoDeCompras">-</p>
                        <p className="quantidade_cestoDeCompras">1</p>
                        <p className="adicionar_quantidade_cestoDeCompras">+</p>
                    </div>
                </div>
    
            </div>
            <hr className="linha-divisao_cestoDeCompras"/>
        </div>

        <div className='container_totalCompra'>
            <p className='container_totalCompra_texto'>Valor total da sua compra:</p>
            <p className='container_totalCompra_preco'>R$ 130,07</p>
        </div>

        <button className='totalCompra_botao_pagar'>Pagar</button>


    </main>
</>
  )
}

export default ItemCarrinho