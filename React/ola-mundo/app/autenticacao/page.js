'use client'
import { useState } from "react";

function Autentucacao() {

    const [autenticado, alteraAutenticado] = useState(false)

    const [email, alteraEmail] = useState("")
    const [senha, alteraSenha] = useState("")

    function logar(e) {
        e.preventDefault()

        const objeto = {
            email: email,
            senha: senha
        }

        //console.log(objeto)


        // MANIPULAÇÃO DE STRING
        if (objeto.email.length < 3) {
            alert("Usuário muito curto")
            return
        }

        if (objeto.email.length > 100) {
            alert("Usuário muito longo")
            return
        }

        if (objeto.email.includes("@") == false || objeto.email.includes(".") == false) {
            alert("O email deve ter um @ e um ponto")
            return
        }

        if (objeto.senha.length < 3) {
            alert("A senha tem que ter no minímo 3 caracteres")
            return
        }

        if (objeto.senha.length > 10) {
            alert("A senha tem que ter no máximo 10 caracteres")
            return
        }

        if (objeto.email == "admin@adimin.com" && objeto.senha == "123123") {
            // alert("Parabéns! Você foi conectado com sucesso!")
            alteraAutenticado(true)
        } else {
            alert("Email ou senha inválidos....")
        }
    }

    return (
        <div>

            <h1>Login</h1>
            <hr />

            <form onSubmit={logar}>

                <p>Digite seu email:</p>
                <input onChange={e => alteraEmail(e.target.value)} />

                <p>Digite sua senha</p>
                <input type="password" onChange={e => alteraSenha(e.target.value)} />

                <br />
                <button>Entrar</button>

            </form>

            <hr />

            {
                // OPERADOR TERNÁRIO
                autenticado == true ?
                    <div>
                        <h1>Painal Adiministrativo</h1>
                        <p>Você está logado vigaristiamente</p>
                        <button onClick={()=> alteraAutenticado (false)}>Sair</button>
                    </div>

                :
                    <p>Você ainda não está logado...</p>
            }


        </div>
    );
}

export default Autentucacao;