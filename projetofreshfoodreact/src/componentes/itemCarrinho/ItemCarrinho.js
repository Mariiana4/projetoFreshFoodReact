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
                    <img className="imagem_item_cestoDeCompras" src="imagens/cardReceitas/receita.jpg" alt=""/>
        
                    <div className="nome_ingredientes_tag_remover_cestoDeCompras">
                        <h2 className="nome_cestoDeCompras">Salada de batata </h2>
        
                        <div className="container_tag_remover_cestoDeCompras">
                            <p className="tag_cestoDeCompras">Sem glúten</p>
                            <p className="remover_cestoDeCompras">Remover</p>
                        </div>
                    </div>
                </div>
        
                <div className="preco_quantidade_cestoDeCompras">
                    <p className="preco_cestoDeCompras">R$ 20,00</p>
                    
                    <div className="container_quantidade_cestoDeCompras">
                        <p className="remover_quantidade_cestoDeCompras">-</p>
                        <p className="quantidade_cestoDeCompras">3</p>
                        <p className="adicionar_quantidade_cestoDeCompras">+</p>
                    </div>
                </div>
    
            </div>
            <hr className="linha-divisao_cestoDeCompras"/>
        </div>

    </main>
</>
  )
}

export default ItemCarrinho