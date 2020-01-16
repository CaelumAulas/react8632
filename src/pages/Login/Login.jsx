import React, { Fragment, useState, useContext } from 'react'
import { Cabecalho } from '../../components/Cabecalho/Cabecalho.jsx'
import { Widget } from '../../components/Widget/Widget.jsx'
import { ComponenteAutenticado } from '../../components/ComponenteAutenticado/ComponenteAutenticado.jsx'

import * as AutenticarService from '../../model/services/AutenticarService.js'

import { Contexto as NotificacaoContexto } from '../../components/Notificacao/Notificacao.jsx'

import './loginPage.css'

function Login() {

    const [ msgErro, setMsgErro ] = useState("")

    const [ isLogado, setIsLogado ] = useState(
        AutenticarService.isAutenticado()
    )

    const { setMsg } = useContext(NotificacaoContexto)

    function onSubmitForm(eventoSubmit) {
        eventoSubmit.preventDefault()
        // TODO Revisando validacao

        const usuario = eventoSubmit.target.elements.login.value
        const senha = eventoSubmit.target.elements.senha.value

        AutenticarService.autenticar(usuario, senha)
            .then(() => {
                setIsLogado(true)
                setMsg("Logado com sucesso")
            })
            .catch((erro) => {
                setMsgErro(erro.message)
            })

    }

    const pagina = (
        <Fragment>
            <Cabecalho />
            <div className="loginPage">
                <div className="container">
                    <Widget>
                        <h2 className="loginPage__title">Seja bem vindo!</h2>
                        <form onSubmit={ onSubmitForm } className="loginPage__form" action="/">
                            <div className="loginPage__inputWrap">
                                <label className="loginPage__label" htmlFor="login">Login</label> 
                                <input className="loginPage__input" type="text" id="login" name="login"/>
                            </div>
                            <div className="loginPage__inputWrap">
                                <label className="loginPage__label" htmlFor="senha">Senha</label> 
                                <input className="loginPage__input" type="password" id="senha" name="senha"/>
                            </div>
                            {(msgErro.length > 0)
                                ? <div className="loginPage__errorBox">
                                    { msgErro }
                                  </div>
                                : ''
                            }
                            <div className="loginPage__inputWrap">
                                <button className="loginPage__btnLogin" type="submit">
                                    Logar
                                </button>
                            </div>
                        </form>
                    </Widget>
                </div>
            </div>
        </Fragment>
    )

    return (
        <ComponenteAutenticado podeExibir={!isLogado} redirecionarPara="/" >
            { pagina }
        </ComponenteAutenticado>
    )
}

export {Login}