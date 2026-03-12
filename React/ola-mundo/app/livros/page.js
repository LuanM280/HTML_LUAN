'use client'
import { createClient } from '@supabase/supabase-js'
import { use, useEffect, useState } from 'react'
const supabase = createClient('https://hevyslzodechuupmqkoa.supabase.co', 'sb_publishable_ah-tn7rG1NbqoZAjx_mHTg_MEJnz2nd')

function Livros() {

    const [nome, alteraNome] = useState("")
    const [autor, alteraAutor] = useState("")
    const [editora, alteraEditora] = useState("")
    const [preco, alteraPreco] = useState()

    const [livros, alteraLivros] = useState([])

    async function buscar() {
        const { data, error } = await supabase
            .from('livros')
            .select()

        console.log(data)
        alteraLivros(data)
    }

    async function salvar() {

        const objeto = {
            nome: nome,
            autor: autor,
            editora: editora,
            preco: preco.replaceAll(",", ".")
        }

        if (objeto.nome.length < 3) {
            alert("Usuário muito curto")
            return
        }

        if (objeto.nome.length > 100) {
            alert("Usuário muito longo")
            return
        }

        const { error } = await supabase
            .from('livros')
            .insert(objeto)

        console.log(error)

        if (error == null) {
            alert("Livro cadastrado com sucesso!")
            alteraNome("")
            alteraAutor("")
            alteraEditora("")
            alteraPreco("")
        } else {
            alert("Dados invalidos, verifique os campos e tente novamente...")
        }
    }

    // useEffect é chamado apenas ao iniciar a página, uma vez

    useEffect(() => {
        buscar()
    }, [])

    return (
        <div>
            <h1>Livros</h1>
            <p>Dados dos livros que vieram do Banco</p>
            <hr />

            <p> Digite o nome do Livro: </p>
            <input value={nome} onChange={e => alteraNome(e.target.value)} />
            <br />

            <p> Digite o autor do Livro: </p>
            <input value={autor} onChange={e => alteraAutor(e.target.value)} />
            <br />

            <p> Digite a editora do Livro: </p>
            <input value={editora} onChange={e => alteraEditora(e.target.value)} />
            <br />

            <p> Digite o preço do Livro: </p>
            <input value={preco} onChange={e => alteraPreco(e.target.value)} />
            <br />
            <br />

            <button onClick={salvar} type='button' className='btn btn-success' > Salvar Livro </button>

            <hr />

            <br />

            <ul>
                {

                    livros.length == 0 ?
                        <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    :
                        livros.map(
                            item => <li> Título: {item.nome} , escrito por {item.escritor} encontrado na {item.editora} por {item.preco} </li>
                        )
                }
            </ul>
        </div>
    );
}
export default Livros;