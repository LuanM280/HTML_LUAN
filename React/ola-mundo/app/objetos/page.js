'use client'
function Objetos() {

    const listaNumeros = [4,8,67,51,-77]
    const listaNomes = ["Luan,Tamy,Silvia,Macos"]

    const listaUsuarios = [
        {
            id: 8,
            nome:"Peixa",
            email: "4_mais_4_igual@peixa.br"
        },
        {
            id: 9,
            nome:"Peixe",
            email: "4_mas_5_igual@unicornio.gr"
        },
        {
            id: 51,
            nome:"Alie",
            email: "alie_mais@realdetodos.com"
        }
    ]


    const usuario = {
        nome: "Luan",
        dataNacimento: "12/12/2005",
        idade: 19,
        adm: true
    }

    console.log(usuario)

    return ( 
        <div>
            <h1>Objetos em JavaScript</h1>
            <p>Conhecimento o famoso JSON, a estrutura mais usada da programção</p>

            <p>Seja bem-vindo {usuario.nome} você nasceu em {usuario.dataNacimento} e tem {usuario.idade} anos </p>
            <p>Top 5 melhores nómeros: {listaNumeros[4]} </p>
            <p>Top 3 alguma coisa: {listaUsuarios[1].nome} </p>

        </div>
     );
}

export default Objetos;