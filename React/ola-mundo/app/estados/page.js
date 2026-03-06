'use client'
import { useState } from "react";

function Estados() {

    //const nome = "Luan"

    const [nome,alteraNome] = useState("")
    const [senha,alteraSenha] = useState("")
    const [email,alteraEmail] = useState("")

    function salvar(){
        alert("O nome é "+nome+" e a senha é "+senha)
    }

    return ( 
        <div>
            <h1> Programção emReact com estados </h1>

            <p>Digite o seu nome:</p>
            <input onChange={e => alteraNome(e.target.value)}/>

             <p>Digite o seu senha:</p>
            <input type="password" onChange={e => alteraSenha(e.target.value)}/>

            <p>Digite o seu email:</p>
            <input type="email" onChange={e => alteraEmail(e.target.value)}/>

            <button onClick={salvar}>Salvar</button>

            
            <p>Seu  nome é: {nome} </p>
            <p>Seu  senha é: {senha} </p>
            <p>Seu  email é: {email} </p>
        </div>
     );
}

export default Estados;