import React from 'react'
import './Rodape.css'

function Rodape() {
  return (
    <>
        {/* <footer className="container_rodape" id="sobre-nos">
        
            <img className="logo_rodape" src="./imagens/rodape/logo02.jpg" alt="logo da marca, ilustraça de uma caixa verde com cenouras verdes e a escrita Fresh Food ao lado"/>
            

            <div className="texto">
                <h2 className="titulo">Sobre a Fresh Food</h2>
                <hr className="linha"/>
                <p className="descricao_sobreFreshFood">Somos um serviço de alimentação que entrega caixas com ingredientes para você preparar sua refeição em casa. As receitas e itens são cuidadosamente selecionados, de acordo com os desejos e necessidades dos nossos clientes, e entregues bem na sua porta. Tornamos incrivelmente fácil comer de forma saudável e deliciosa.</p>
            </div>

            <div className="container_icone-redes-sociais">
                <img className="icone_redes-sociais" src="./imagens/rodape/facebook.svg" alt="icone Facebook"/> <a href="#"></a>
                <img className="icone_redes-sociais" src="./imagens/rodape/whatsapp.svg" alt="ogo whatsapp"/><a href="#"></a>
                <img className="icone_redes-sociais" src="./imagens/rodape/instagram.svg" alt="icone instagram"/><a href="#"></a>
            </div>

         </footer> */}
      <footer class="container_rodape" id="sobre-nos">
        
        <img class="logo_rodape" src="imagens/cabecalho/parte01/logo.svg" alt="logo da marca, ilustraça de uma caixa verde com cenouras verdes e a escrita Fresh Food ao lado"/>
        

        <div class="texto">
            <h2 class="titulo">Sobre a Fresh Food</h2>
            <hr class="linha"/>
            <p class="descricao-rodape">Somos um serviço de alimentação que entrega caixas com ingredientes para você preparar sua refeição em casa. As receitas e itens são cuidadosamente selecionados, de acordo com os desejos e necessidades dos nossos clientes, e entregues bem na sua porta. Tornamos incrivelmente fácil comer de forma saudável e deliciosa.</p>
        </div>

        <div class="container_icone-redes-sociais">
            
            <i class="fa-brands fa-square-facebook"></i>
            
            <i class="fa-brands fa-whatsapp"></i>

            <i class="fa-brands fa-instagram"></i>
        </div>

      </footer>
    </>
  )
}

export default Rodape