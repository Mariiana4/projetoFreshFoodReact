import React, { useState } from 'react'
import Modal_receita from '../modal/Modal_receita'
import './CardDeReceitas.css'

function CardDeReceitas({imagemCardReceitas, tagCardReceitas, nomeCardReceitas, tempoCardReceitas, dificuldadeCardReceitas, porcaoCardReceitas, itensCardReceitas,precoCardReceitas}) {

  const [modalAberta, setModalAberta]= useState(false)
  const [IsFavorite, setIsFavorite]= useState(false)

  return (
    <>
        <li className="card" onClick={()=> setModalAberta(true)}>
            <img className='image_card' src={imagemCardReceitas} />
            <div className="container_informacoes">
                <div className="tag_icone-fav" id='cor'>
                    <p className="tag">{tagCardReceitas}</p>
                    {!IsFavorite && <i className="fa-regular fa-heart" onClick={() => setIsFavorite(true)}></i>}
                    {IsFavorite && <i className="fa-solid fa-heart" onClick={() => setIsFavorite(false)}></i>}
                </div>

                <h2 className="nome-receita">{nomeCardReceitas}</h2>

                <div className="container_icones">

                    <div className="icone_descricao">
                        <img className="iconeCard" src="/imagens/cardReceitas/tempo_icone.svg" alt=""/>
                        <p className="descricao">{tempoCardReceitas}</p>
                    </div>

                    <img className="iconeCard" src="/imagens/cardReceitas/linha.png" alt=""/>

                    <div className="icone_descricao">
                        <img className="iconeCard" src="/imagens/cardReceitas/dificuldade_icone.jpg" alt=""/>
                        <p className="descricao">{dificuldadeCardReceitas}</p>
                    </div>

                    <img className="iconeCard" src="/imagens/cardReceitas/linha.png" alt=""/>

                    <div className="icone_descricao">
                        <p className="descricao porcao">{porcaoCardReceitas}</p>
                        <img className="iconeCard" src="/imagens/cardReceitas/porcao_icone.svg" alt=""/>
                        <p className="descricao">Porções</p>
                    </div>
                </div>
            </div>
        </li>

        {modalAberta && <Modal_receita aoClicarBotaoFechar={() => setModalAberta(false)}
                                       itensCardReceitas={itensCardReceitas}
                                       nomeCardReceitas={nomeCardReceitas}
                                       imagemCardReceitas={imagemCardReceitas}
                                       tagCardReceitas={tagCardReceitas}
                                       tempoCardReceitas={tempoCardReceitas}
                                       dificuldadeCardReceitas={dificuldadeCardReceitas}
                                       porcaoCardReceitas={porcaoCardReceitas}
                                       precoCardReceitas={precoCardReceitas}
        />}

    </>
  )
}

export default CardDeReceitas