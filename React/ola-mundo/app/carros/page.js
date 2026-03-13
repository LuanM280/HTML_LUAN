'use client'
import { useEffect, useState } from "react";

function Carros() {

    const [autenticado, alteraAutenticado] = useState(false)

    const [exibelistagem, alteraExibeListagem] = useState(true)

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

        /* outro jeito de fazer os botões treu e false
        // se for fazer desse jeit, precisa chamar no botão onClick={mostrsrListagem}
        function mostrarListagem(){
            alteraExibeListagem(true)
        } 
        function mostrarCadastro(){
            alteraExibeListagem(false)
        }
        */
    }

    useEffect(() => {
        const logado = localStorage.getItem("logado")
        if (logado == "true") {
            alteraAutenticado(true)
        }
    }, [])

    return (
        <div>
            <h1>Lista de Carros</h1>
            <hr />

            <button onClick={() => alteraExibeListagem(true)} className="btn btn-success mx-4">Listagem</button>

            {
                autenticado == false ?
                    <button onClick={() => alteraExibeListagem(false)} className="btn btn-primary">Cadastro</button>
                :
                    <div></div>
            }

            {
                exibelistagem == true ?
                    <table className="table">
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
                    :
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
            }
        </div>
    );
}

export default Carros;