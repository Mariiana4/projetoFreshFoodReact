import React from 'react'
import './Formulario_cadastro.css'

function Formulario_Cadastro() {
  return (
    <>
      <main>

        <div className="container_formCadastro">
            <h2 className="titulo-cadastro_formCadastro">Cadastre-se</h2>

            <form className="container_input-label_formCadastro">
                <div className="input-label_formCadastro">
                    <label className="label_formCadastro" for="nome-completo">Nome completo (Campo obrigatório)</label>
                    <input className="input_fomrCadastro" type="text" id="nome-completo" placeholder="Obrigatório" required/>
                </div>

                <div className="input-label_formCadastro">
                    <label className="label_formCadastro" for="email">E-mail (Campo obrigatório)</label>
                    <input className="input_fomrCadastro" type="email" name="email" id="email" placeholder="Obrigatório" required/>
                </div>

                <div className="input-label_formCadastro">
                    <label className="label_formCadastro" for="confirmar-email">Confirmar email (Campo obrigatório)</label>
                    <input className="input_fomrCadastro" type="email" name="confirmarEmail" id="confirmar-email" placeholder="Obrigatório" required/>
                </div>

                <div className="input-label_formCadastro">
                    <label className="label_formCadastro" for="numero-celular">Número de celular (Campo opcional)</label>
                    <input className="input_fomrCadastro" type="tel" name="numeroCelular" id="numero-celular" placeholder="Opcional" required/>
                </div>

                <div className="input-label_formCadastro">
                    <label className="label_formCadastro" for="senha">Senha (Campo obrigatório)</label>
                    <input className="input_fomrCadastro" type="password" name="senha" id="senha" placeholder="Obrigatório" required/>
                </div>

                <div className="input-label_formCadastro">
                    <label className="label_formCadastro" for="confirmar-senha">Confirmar senha (Campo obrigatório)</label>
                    <input className="input_fomrCadastro" type="password" name="confirmarSenha" id="confirmar-senha" placeholder="Obrigatório" required/>
                </div>

                <div className="container-botao_formCadastro">
                    <button className="botao-finalizar_formCadastro">Finalizar cadastro</button>
                </div>
            </form>

        </div>
    </main>
  </>
  )
}

export default Formulario_Cadastro