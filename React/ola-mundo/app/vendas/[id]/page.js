'use client'
import supabase from "@/app/conexao/supabase";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

function ConsultaVendas() {

    const params = useParams()
    const [listaVendas, alteraListaVendas] = useState([])


    async function buscaVendas() {
        const { data, error } = await supabase
            .from('vendas')
            .select(`
                    *,
                    id_ussuario(*),
                    id_livro(*)
                `)
            .eq('id', params.id)
        alteraListaVendas(data)
    }

    useEffect(() => {
        buscaVendas()
    }, [])

    return (
        <div>
            <h1> Consulta Vendas </h1>
            <hr />
            {
                listaVendas.length == 0 ?
                    <p> Carregando... </p>
                :
                    listaVendas.map(
                        item => <div>

                            <p> <strong> ID da Venda: </strong> {item.id} </p>
                            <br />

                            <p> <strong> Comprar: </strong> {item.id_ussuario.nome} </p>
                            <br />

                            <p> <strong> Produto: </strong> {item.id_livro.nome} </p>
                            <br />

                            <p> <strong> Quantidade: </strong> {item.id_ussuario.quantidadis} </p>
                            <br />

                            <p> <strong> Forma de Pagamento: </strong> {item.id_ussuario.created_at} </p>
                            <br />
                        </div>
                    )
            }


        </div>
    );
}

export default ConsultaVendas;