'use client'
import { useEffect, useState } from "react";
import supabase from "../conexao/supabase";
import "./vendas.css"


function Vendas() {

    const [listaVendas, alteraListaVendas] = useState([])
    const [listaUsuarios, alteraListaUsuarios] = useState([])
    const [listaLivros, alteraListaLivros] = useState([])


    const [id_ussuario, alteraUsuarios] = useState()
    const [id_livro, alteraLivro] = useState()
    const [quantidadis, alteraQuantidadis] = useState()
    const [pagamentos, alteraPagamentos] = useState()
    const [observacao, alteraObservacao] = useState()

    const [inputPesquisaPagamento, alteraInputPesquisaPagamento] = useState()
    const [inputPesquisaObservacao, alteraInputPesquisaObservacao] = useState()
    const [inputPesquisaData, alteraInputPesquisaData] = useState()
    const [inputPesquisaIdUsuario, alteraInputPesquisaIdUsuario] = useState()
    const [inputPesquisaIdProduto, alteraInputPesquisaIdProduto] = useState()

    async function buscaLivros() {
        const { data, error } = await supabase
            .from('livros')
            .select()

        alteraListaLivros(data)
    }

    async function buscaUsuarios() {
        const { data, error } = await supabase
            .from('usuarios')
            .select()

        alteraListaUsuarios(data)
    }

    async function buscaTodos() {
        const { data, error } = await supabase
            .from('vendas')
            .select(`
                    *,
                    id_ussuario(*),
                    id_livro(*)
                `)

        console.log(error)

        console.log(data)

        alteraListaVendas(data)
    }

    async function excluir(id) {
        const opcao = confirm("Tem certe que deseja exluir?")
        if (opcao == false) {
            return
        }

        const response = await supabase.from('vendas').delete().eq('id', id)
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
            return <span className="badge text-bg-primary">PIX</span>
        }

        if (pagamentos == "cartao") {
            return <span className="badge text-bg-warning">Crédito</span>
        }

        if (pagamentos == "boleto") {
            return <span className="badge text-bg-dark">Boleto</span>
        }

        if (pagamentos == "dinheiro") {
            return <span className="badge text-bg-success">Dinheiro</span>
        }
    }

    async function salvar(e) {
        e.preventDefault()

        const objeto = {
            id_ussuario: id_ussuario,
            id_livro: id_livro,
            quantidadis: quantidadis,
            pagamentos: pagamentos,
            observacao: observacao
        }

        const { error } = await supabase.from('vendas').insert(objeto)
        console.log(error)
    }

    // Funções de Pesquisa
    async function pesquisaPagamento() {
        const { data, error } = await supabase
            .from('vendas')
            .select('*, id_ussuario(*), id_livro(*)')
            .ilike('pagamentos', '%' + inputPesquisaPagamento + '%')

        alteraListaVendas(data)
    }
    async function pesquisaObsevacao() {
        const { data, error } = await supabase
            .from('vendas')
            .select('*, id_ussuario(*), id_livro(*)')
            .ilike('observacao', '%' + inputPesquisaObservacao + '%')

    alteraListaVendas(data)
    }
    async function pesquisaData() {
        const { data, error } = await supabase
            .from('vendas')
            .select('*, id_ussuario(*), id_livro(*)')
            .gt('created_at', inputPesquisaData + " 00:00:00+00")
            .lt('created_at', inputPesquisaData + " 23:59:00+00")

        alteraListaVendas(data)
    }
    async function pesquisaUsuario() {

    }
    async function pesquisaProduto() {

    }
    async function pesquisaMaiorVendas() {
        const { data, error } = await supabase
            .from('vendas')
            .select('*, id_ussuario(*), id_livro(*)')
            .limit(3)
            .order('quantidadis', { ascending: false })

        alteraListaVendas(data)
    }
    async function pesquisaHoje() {
        const { data, error } = await supabase
            .from('vendas')
            .select('*, id_ussuario(*), id_livro(*)')
            .gt('created_at', new Date().toISOString().split("T")[0]  + " 00:00:00+00")
            .lt('created_at', new Date().toISOString().split("T")[0]  + " 23:59:00+00")

        alteraListaVendas(data)
    }

    useEffect(() => {
        buscaTodos()
        buscaUsuarios(
            buscaLivros()
        )
    }, [])

    return (
        <div>
            <h1> Vendas </h1>
            <hr />

            <form onSubmit={salvar}>
                <p> Selecione o usuário </p>
                <select onChange={e => alteraUsuarios(e.target.value)} >
                    <option> Selecione... </option>
                    {
                        listaUsuarios.map(
                            item => <option value={item.id} > {item.nome} </option>
                        )
                    }
                </select>
                <br />

                <p> Digite o livro </p>
                <select onChange={e => alteraLivro(e.target.value)} >
                    <option> Selecione... </option>
                    {
                        listaLivros.map(
                            item => <option value={item.id} > {item.nome} </option>
                        )
                    }
                </select>
                <br />

                <p> DIgite quantidade </p>
                <input onChange={e => alteraQuantidadis(e.target.value)} />
                <br />

                <p> Forma de Pagamento </p>
                <input onChange={e => alteraPagamentos(e.target.value)} />
                <br />

                <p> Forma de Observação </p>
                <input onChange={e => alteraObservacao(e.target.value)} />
                <br />

                <button> Salvar </button>
            </form>

            <hr />
            <h2> Filtros </h2>
            <p> Pesquisar Pagamentos <input onChange={e => alteraInputPesquisaPagamento(e.target.value)} /> <button onClick={pesquisaPagamento} > Pesquisar </button> </p>
            <p> Pesquisar Observações <input onChange={e => alteraInputPesquisaObservacao(e.target.value)} /> <button onClick={pesquisaObsevacao} > Pesquisar </button> </p>
            <p> Pesquisar Data <input type="date" onChange={e => alteraInputPesquisaData(e.target.value)} /> <button onClick={pesquisaData} > Pesquisar </button> </p>
            <p> Pesquisar pelo ID do Usuário <input onChange={e => alteraInputPesquisaIdUsuario(e.target.value)} /> <button onClick={pesquisaUsuario} > Pesquisar </button> </p>
            <p> Pesquisar pelo ID do Produto <input onChange={e => alteraInputPesquisaIdProduto(e.target.value)} /> <button onClick={pesquisaProduto} > Pesquisar </button> </p>
            <p> Filtrar po maiores vendas <button onClick={pesquisaMaiorVendas} > Pesquisar </button> </p>
            <p> Ver vendas de hoje <button onClick={pesquisaHoje} > Pesquisar </button> </p>
            <hr />

            <table className="table table-hover">
                <tr>
                    <td> # </td>
                    <td> Cliente </td>
                    <td> Produto </td>
                    <td> QNT. </td>
                    <td> Forma de Pagamento </td>
                    <td> Observações </td>
                    <td> Data </td>
                    <td> Ações </td>
                </tr>


                {
                    listaVendas.length == 0 ?
                        <p> Carregando... </p>
                        :
                        listaVendas.map(
                            (item, index) => <tr>
                                <td onClick={() => location.href = "/vendas/" + item.id} > {index + 1} </td>
                                <td onClick={() => location.href = "/vendas/" + item.id} > {item.id_ussuario?.nome} </td>
                                <td onClick={() => location.href = "/vendas/" + item.id} > {item.id_livro?.nome} </td>
                                <td onClick={() => location.href = "/vendas/" + item.id} > {item.quantidadis} </td>
                                <td onClick={() => location.href = "/vendas/" + item.id} > {formataPagamentos(item.pagamentos)} </td>
                                <td> {item.observacao} </td>
                                <td onClick={() => location.href = "/vendas/" + item.id} > {formataData(item.created_at)} às {formataHoras(item.created_at)} </td>
                                <td>  <button onClick={() => location.href = "/vendas/" + item.id} > 👁 </button> <button onClick={() => excluir(item.id)} > 🗑 </button> </td>
                            </tr>
                        )
                }
            </table>
        </div>
    );
}

export default Vendas;