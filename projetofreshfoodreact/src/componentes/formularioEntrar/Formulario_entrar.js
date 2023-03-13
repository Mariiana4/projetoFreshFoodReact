import { useState, UseState } from 'react'
import React from 'react'
import { Link } from 'react-router-dom'
import './Formulario_entrar.css'

function Formulario_entrar() {

    const [formData, setFormData] = useState({
        email_usuario: '',
        senha_usuario: '',
    })

    const handleForm = async (event) => {
        try{
            event.preventDefault()
            const response = await fetch(``, {
                method: 'post',
                body: JSON.stringify(formData )
            })
            const json = await response.json()
            console.log(json)
        } catch (err) {

        }
    }

  return (
    <>
    <main>
        <div className="container_formCadastro">
            <h2 className="titulo-cadastro_formCadastro">Faça seu login</h2>

            <form className="container_input-label_formCadastro" >
                <div className="input-label_formCadastro">
                    <label className="label_formCadastro" for="email">E-mail (Campo obrigatório)</label>
                    <input 
                        className="input_formCadastro" 
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder="Preencha com seu e-mail" 
                        required
                        value={formData.email_usuario}
                        onChange={(e) => setFormData({...formData, email_usuario: e.target.value})}
                    />
                </div>

                <div className="input-label_formCadastro">
                    <label className="label_formCadastro" for="senha">Senha (Campo obrigatório)</label>
                    <input 
                        className="input_formCadastro" 
                        type="password" 
                        name="senha" 
                        id="senha" 
                        placeholder="Insira a sua senha" 
                        required
                        value={formData.senha_usuario}
                        onChange={(e) => setFormData({...formData, senha_usuario: e.target.value})}
                    />
                </div>

                <div className="container-botao_formLogin">
                    <button type='submit' className="botao-finalizar_formLogin">Entrar</button>
                </div>

                <section className="container_esqueceuSenha">
                    <p className="titulo_esqueceuSenha">Esqueceu a senha?</p>
                    <p className="texto_esqueceuSenha">Não possui login? Faça seu <Link to="/cadastro"><em>cadastro</em></Link> agora mesmo!</p>
                </section>
            </form>


        </div>
    </main>
    </>
  )
}

export default Formulario_entrar