import React, { useState, useEffect } from 'react'
import './Modal_receita.css'

function Modal_receita({aoClicarBotaoFechar, imagemCardReceitas, tagCardReceitas, nomeCardReceitas, tempoCardReceitas, dificuldadeCardReceitas, porcaoCardReceitas, precoCardReceitas, itensCardReceitas}) {
  
    return (
    <>
    <div className='container_modal-receitas'>
      <div className="modal-receitas">

        <header className="cabecalho_modal-receitas">
            <img className="imagem_cabecalho_modal-receitas" src={imagemCardReceitas} alt=""/>
            <button className="botao-fechar_cabecalho_modal-receitas" onClick={aoClicarBotaoFechar}>x</button>
            <p className="tag-tipoReceita_cabecalho_modal-receitas">{tagCardReceitas}</p>
        </header>

        <main className="conteudo_modal-receitas">
            <h2 className="nome-receita_conteudo_modal-receitas">{nomeCardReceitas}</h2>

            <div className="preco_botao-adicionar_conteudo_modal-receitas">
                <p className="preco_conteudo_modal-receitas">R$ {precoCardReceitas}</p>
                <button className="botao-adicionar_conteudo_modal-receitas">Adicionar ao cesto</button>
            </div>

            <section className="titulo_lista-ingredientes_conteudo_modal-receitas">
                <h3 className="titulo_conteudo_modal-receitas">Esta receita contém:</h3>
                <ul className="lista-ingredientes_conteudo_modal-receitas">
                    {itensCardReceitas.map((x,i) =>(
                            <li key={i}>{x}</li>
                        ))
                    }
                
                </ul>
            </section>
        </main>

        <footer className="tempo-dificuldade-porcao_modal-receitas">
            <div className="icones_modal-receitas" id="tempoPreparo">
                <img className="icone_modal-receitas" src="/imagens/cardReceitas/tempo_icone.svg" alt="ilustração de um relógio"/>
                <p className="tempo_modal-receitas">{tempoCardReceitas}</p>
            </div>

            <div className="icones_modal-receitas" id="dificuldade">
                <img className="icone_modal-receitas" src="/imagens/cardReceitas/dificuldade_icone.jpg" alt="ilustração de um forno elétrico"/>
                <p className="dificuldade_modal-receitas">{dificuldadeCardReceitas}</p>
            </div>

            <div className="icones_modal-receitas" id="porcao">
                <p className="porcao_modal-receitas">{porcaoCardReceitas}</p>
                <img className="icone_modal-receitas" src="/imagens/cardReceitas/porcao_icone.svg" alt="ilustração de um prato coberto por uma cloche"/>
                <p className="titulo-porcao_modal-receitas">Porções</p>
            </div>
        </footer>

      </div>
    </div>
    </>
  )
}

export default Modal_receita;