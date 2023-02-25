import React from 'react'
import './CardDeReceitas.css'

function CardDeReceitas({imagemCardReceitas, tagCardReceitas, nomeCardReceitas, tempoCardReceitas, dificuldadeCardReceitas, porcaoCardReceitas}) {
  return (
    <>
        <li className="card">
            <img classNameName='image_card' src={imagemCardReceitas} />

            <div className="container_informacoes">
                <div className="tag_icone-fav">
                    <p className="tag">{tagCardReceitas}</p>
                    <i className="fa-regular fa-heart"></i>
                </div>

                <h2 className="nome-receita">{nomeCardReceitas}</h2>

                <div className="container_icones">

                    <div className="icone_descricao">
                        <img className="iconeCard" src="/imagens/card/tempo_icone.svg" alt=""/>
                        <p className="descricao">{tempoCardReceitas}</p>
                    </div>

                    <img className="iconeCard" src="/imagens/card/linha.png" alt=""/>

                    <div className="icone_descricao">
                        <img className="iconeCard" src="/imagens/card/dificuldade_icone.jpg" alt=""/>
                        <p className="descricao">{dificuldadeCardReceitas}</p>
                    </div>

                    <img className="iconeCard" src="/imagens/card/linha.png" alt=""/>

                    <div className="icone_descricao">
                        <p className="descricao porcao">{porcaoCardReceitas}</p>
                        <img className="iconeCard" src="/imagens/card/porcao_icone.svg" alt=""/>
                        <p className="descricao">Porção</p>
                    </div>
                </div>
            </div>
        
        </li>
    </>
  )
}

export default CardDeReceitas