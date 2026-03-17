'use client'
import { useEffect, useState } from "react";
import supabase from "../conexao/supabase";


function Vendas() {

    const [listaVendas, alteraListaVendas] = useState([])

    async function buscaTodos() {
        const { data, error } = await supabase
            .from('vendas')
            .select(`
                    *,
                    id_ussuario (*),
                    id_livro (*)
                `)

        console.log(error)

        console.log(data)

        alteraListaVendas(data)
    }

    function formataData(data) {
        let data_formatada = new Date(data)
        data_formatada = data_formatada.toLocaleDateString()
        return data_formatada
    }

    function formataHoras(horas) {
        let horas_formatada = new Date(horas)
        horas_formatada = horas_formatada.toLocaleTimeString()
        return horas_formatada
    }

    function formataPagamentos(pagamentos) {
        if (pagamentos == "pix") {
            return <span class="badge text-bg-primary">PIX</span>
        }

        if (pagamentos == "cartao") {
            return <span class="badge text-bg-warning">Crédito</span>
        }

        if (pagamentos == "boleto") {
            return <span class="badge text-bg-dark">Boleto</span>
        }

        if (pagamentos == "dinheiro") {
            return <span class="badge text-bg-success">Dinheiro</span>
        }
    }

    useEffect(() => {
        buscaTodos()
    }, [])

    return (
        <div>
            <h1> Vendas </h1>
            <hr />

            <table className="table">
                <tr>
                    <td> # </td>
                    <td> Cliente </td>
                    <td> Produto </td>
                    <td> QNT. </td>
                    <td> Forma de Pagamento </td>
                    <td> Data </td>
                </tr>


                {
                    listaVendas.length == 0 ?
                        <p> Carregando... </p>
                        :
                        listaVendas.map(
                            (item, index) => <tr>
                                <td> {index+1} </td>
                                <td> {item.id_ussuario.nome} </td>
                                <td> {item.id_livro.nome} </td>
                                <td> {item.quantidadis} </td>
                                <td> {formataPagamentos(item.pagamentos)} </td>
                                <td> {formataData(item.created_at)} às {formataHoras(item.created_at)} </td>
                            </tr>
                        )
                }
            </table>
        </div>
    );
}

export default Vendas;