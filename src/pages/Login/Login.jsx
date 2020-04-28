import React, { Fragment, useState, useContext } from 'react'
import { Cabecalho } from '../../components/Cabecalho/Cabecalho.jsx'
import { Widget } from '../../components/Widget/Widget.jsx'
import { ComponenteAutenticado } from '../../components/ComponenteAutenticado/ComponenteAutenticado.jsx'

import * as AutenticarService from '../../model/services/AutenticarService.js'

import { NotificacaoContext } from '../../components/Notificacao/Notificacao.jsx'

import './loginPage.css'

class Login extends React.Component{

    static contextType = NotificacaoContext

    constructor(props, context){
        super(props, context)
        this.state = {
            msgErro: '',
            isLogado: AutenticarService.isAutenticado()
        }

        this.onSubmitForm = this.onSubmitForm.bind(this)
    }

    setMsgErro(value){
        this.setState({
            msgErro: value
        })
    }

    setIsLogado(value){
        this.setState({
            isLogado: value
        })
    }

    onSubmitForm(eventoSubmit) {
        eventoSubmit.preventDefault()
        // TODO Revisando validacao

        const usuario = eventoSubmit.target.elements.login.value
        const senha = eventoSubmit.target.elements.senha.value

        AutenticarService.autenticar(usuario, senha)
            .then(() => {
                this.setIsLogado(true)
                this.context.setMsg("Logado com sucesso")
            })
            .catch((erro) => {
                this.setMsgErro(erro.message)
            })

    }

    render() {
        const pagina = (
            <Fragment>
                <Cabecalho />
                <div className="loginPage">
                    <div className="container">
                        <Widget>
                            <h2 className="loginPage__title">Seja bem vindo!</h2>
                            <form onSubmit={ this.onSubmitForm } className="loginPage__form" action="/">
                                <div className="loginPage__inputWrap">
                                    <label className="loginPage__label" htmlFor="login">Login</label> 
                                    <input className="loginPage__input" type="text" id="login" name="login"/>
                                </div>
                                <div className="loginPage__inputWrap">
                                    <label className="loginPage__label" htmlFor="senha">Senha</label> 
                                    <input className="loginPage__input" type="password" id="senha" name="senha"/>
                                </div>
                                {(this.state.msgErro.length > 0)
                                    ? <div className="loginPage__errorBox">
                                        { this.state.msgErro }
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
            <ComponenteAutenticado podeExibir={!this.state.isLogado} redirecionarPara="/" >
                { pagina }
            </ComponenteAutenticado>
        )
    }
    
}

export {Login}