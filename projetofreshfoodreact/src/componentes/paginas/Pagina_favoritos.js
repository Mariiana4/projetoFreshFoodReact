import React from 'react'
import Cabecalho_simples from '../cabecalho/cabecalho_simples/Cabecalho_simples'
import Card_paginaFavoritos from '../cardReceitas/card_paginaFavoritos/Card_paginaFavoritos'
import Rodape from '../rodape/Rodape'


function Pagina_favoritos() {
  return (
    <>
        <Cabecalho_simples/>
        <Card_paginaFavoritos/>
        <Rodape/>
    </>
  )
}

export default Pagina_favoritos