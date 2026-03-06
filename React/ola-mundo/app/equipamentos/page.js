'use client'
function Equipamentos() {

    const listaItens =[
        {
            id: 0,
            nome: "Chave de fenda",
            preso: 8.5,
            descricao: "Serve para por em fendas",
        },
        {
            id: 1,
            nome: "Serrote",
            preso: 29.9,
            descricao: "Serra coisas que terminam com 'ote'",
        },
        {
            id: 2,
            nome: "Martelo",
            preso: 15.25,
            descricao: "Martela o martelão",
        }
    ]

    return ( 
        <div>
            <h1>Listagem de equipamentos</h1>

            <hr/>

            <ul>
                <li> <strong>ITEM:</strong> {listaItens[0].nome} R$ <strong>{listaItens[0].preso}</strong> {listaItens[0].descricao} </li>
            <br/>
                <li> <strong>ITEM:</strong> {listaItens[1].nome} R$ <strong>{listaItens[1].preso}</strong> {listaItens[1].descricao} </li>
            <br/>
                <li> <strong>ITEM:</strong> {listaItens[2].nome} R$ <strong>{listaItens[2].preso}</strong> {listaItens[2].descricao} </li>
            </ul>


        </div>
     );
}

export default Equipamentos;