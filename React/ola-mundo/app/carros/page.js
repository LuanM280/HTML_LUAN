'use client'
import { useState } from "react";

function Carros() {

    const [nome, alteraNome] = useState("")
    const [marca, alteraMarca] = useState("")
    const [cor, alteraCor] = useState("")
    const [valor, alteraValor] = useState()

    const [listaCarros, alteraListaCarros] = useState(
        [
            {
                nome: "Civic",
                marca: "Honda",
                cor: "Preto",
                valor: 245000
            },
            {
                nome: "Corolla Hybrid",
                marca: "Toyota",
                cor: "Prata",
                valor: 195000
            },
            {
                nome: "Onix",
                marca: "Chevrolet",
                cor: "Branco",
                valor: 90000
            },
            {
                nome: "HB20",
                marca: "Hyundai",
                cor: "Vermelho",
                valor: 88000
            },
            {
                nome: "Polo",
                marca: "Volkswagen",
                cor: "Cinza",
                valor: 95000
            },
            {
                nome: "Tracker",
                marca: "Chevrolet",
                cor: "Azul",
                valor: 145000
            },
            {
                nome: "BYD Dolphin",
                marca: "BYD",
                cor: "Azul",
                valor: 150000
            },
            {
                nome: "Compass",
                marca: "Jeep",
                cor: "Preto",
                valor: 190000
            },
            {
                nome: "Kicks",
                marca: "Nissan",
                cor: "Laranja",
                valor: 125000
            },
            {
                nome: "Volvo XC40 Recharge",
                marca: "Volvo",
                cor: "Branco",
                valor: 330000
            }
        ]
    )

    function salvar(e) {
        e.preventDefault()

        const objeto = {
            nome: nome,
            marca: marca,
            cor: cor,
            valor: valor,
        }

        //listaCarros.push(objeto)
        alteraListaCarros(listaCarros.concat(objeto))
        
    }

    return (
        <div>
            <h1>Lista de Carros</h1>
            <hr />

            <form onSubmit={salvar}>

                <p>Digite o nome do carro:</p>
                <input onChange={e => alteraNome(e.target.value)} />

                <p>Digite a marca:</p>
                <input onChange={e => alteraMarca(e.target.value)} />

                <p>Digite o valor:</p>
                <input onChange={e => alteraValor(e.target.value)} />

                <p>Digite a cor:</p>
                <input onChange={e => alteraCor(e.target.value)} />

                <br />
                <button>Salvar</button>


            </form>

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">Marca</th>
                        <th scope="col">Cor</th>
                        <th scope="col">Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listaCarros.map(
                            item =>
                                <tr>
                                    <th scope="row"> {item.nome} </th>
                                    <td> {item.marca} </td>
                                    <td> {item.cor} </td>
                                    <td> R$ {item.valor} </td>
                                </tr>
                        )
                    }
                </tbody>
            </table>

        </div>
    );
}

export default Carros;