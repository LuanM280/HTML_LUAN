'use client'
import { useState } from "react"
import supabase from "../conexao/supabase"

function Cadastro() {

    const [senha, alteraSenha] = useState("")
    const [email, alteraEmail] = useState("")
    const [cpf, alteraCPF] = useState("")
    const [nome, alteraNome] = useState("")
    const [endareco, alteraEndareco] = useState("")

    async function cadastro() {
        // CADASTRAR NO AUTHENTICATION DO SUPABASE
        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: senha,
        })

        if(data == null){
            alert("Dados inálidos?")
            return
        }


        // CADASTRO NA MINHA TABELA DE USUÁRIOS
        const objeto = {
            id: data.user.id,
            nome: nome,
            cpf: cpf,
            endareco: endareco,
        }

        const  resposta  = await supabase
            .from('usuarios')
            .insert(objeto)

            if(resposta.error == null){
                alert("Cadatrado com sucesso!")
            }else{
                alert("Varifique os dados novamente")
            }
    }

    return (
        <div>
            <h1>Cadastro</h1>

            <p> Digite o nome: <input onChange={e => alteraNome(e.target.value)} /> </p>
            <br />

            <p> Digite o sua senha: <input onChange={e => alteraSenha(e.target.value)} /> </p>
            <br />

            <p> Digite o email: <input onChange={e => alteraEmail(e.target.value)} /> </p>
            <br />

            <p> Digite o CPF: <input onChange={e => alteraCPF(e.target.value)} /> </p>
            <br />

            <p> Digite o seu endareço: <input onChange={e => alteraEndareco(e.target.value)} /> </p>
            <br />


            <button onClick={cadastro} > Cadastrar </button>
        </div>
    );
}

export default Cadastro;