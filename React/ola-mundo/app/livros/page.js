'use client'
import { createClient } from '@supabase/supabase-js'
import { useState } from 'react'
const supabase = createClient('https://hevyslzodechuupmqkoa.supabase.co', 'sb_publishable_ah-tn7rG1NbqoZAjx_mHTg_MEJnz2nd')

function Livros() {

    const [livros, alteraLivros] = useState([])

    async function buscarLivros() {
        const { data, error } = await supabase
            .from('livros')
            .select()

        console.log(data)
        alteraLivros(data)
    }

    return (
        <div>
            <h1>Livros</h1>
            <p>Dados dos livros que vieram do Banco</p>
            <hr />

            <button onClick={buscarLivros} type='button' className='btn btn-primary' > Carregar Livros </button>

            <br/>

            <ul>
                {
                    livros.map(
                        item => <li> Título: {item.nome} , escrito por {item.escritor} encontrado na {item.editora} por {item.preco} </li>
                    )
                }
            </ul>
        </div>
    );
}
export default Livros;