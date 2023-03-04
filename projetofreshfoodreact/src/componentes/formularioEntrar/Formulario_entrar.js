import React from 'react'
import './Formulario_entrar.css'

function Formulario_entrar() {
  return (
    <>
    <main>
        <div className="container_formCadastro">
            <h2 className="titulo-cadastro_formCadastro">Faça seu login</h2>

            <form className="container_input-label_formCadastro">
                <div className="input-label_formCadastro">
                    <label className="label_formCadastro" for="email">E-mail (Campo obrigatório)</label>
                    <input className="input_fomrCadastro" type="email" name="email" id="email" placeholder="Preencha com seu e-mail" required/>
                </div>

                <div className="input-label_formCadastro">
                    <label className="label_formCadastro" for="senha">Senha (Campo obrigatório)</label>
                    <input className="input_fomrCadastro" type="password" name="senha" id="senha" placeholder="Insira a sua senha" required/>
                </div>

                <div className="container-botao_formLogin">
                    <button className="botao-finalizar_formLogin">Entrar</button>
                </div>

                <section className="container_esqueceuSenha">
                    <p className="titulo_esqueceuSenha">Esqueceu a senha?</p>
                    <p className="texto_esqueceuSenha">Não possui login? Faça seu <em>cadastro</em> agora mesmo!</p>
                </section>
            </form>


        </div>
    </main>
    </>
  )
}

export default Formulario_entrar