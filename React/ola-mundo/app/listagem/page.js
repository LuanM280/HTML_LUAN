'use client'
import"./Listagem.css"
function Listagem() {

    const listaAves = [
        {
            nome: "Arara Azul",
            cor: "Azul",
            especie: "Anodorhynchus hyacinthinus",
            habitat: "Florestas tropicais e cerrado",
            tamanho: "100 cm",
            alimentacao: "Frutas e sementes"
        },
        {
            nome: "Tucano",
            cor: "Preto com bico colorido",
            especie: "Ramphastos toco",
            habitat: "Florestas tropicais",
            tamanho: "65 cm",
            alimentacao: "Frutas, insetos e ovos"
        },
        {
            nome: "Bem-te-vi",
            cor: "Amarelo, branco e preto",
            especie: "Pitangus sulphuratus",
            habitat: "Áreas urbanas e campos",
            tamanho: "22 cm",
            alimentacao: "Insetos e frutas"
        },
        {
            nome: "Coruja-buraqueira",
            cor: "Marrom com pintas",
            especie: "Athene cunicularia",
            habitat: "Campos abertos e pastagens",
            tamanho: "23 cm",
            alimentacao: "Insetos e pequenos roedores"
        },
        {
            nome: "Flamingo",
            cor: "Rosa",
            especie: "Phoenicopterus roseus",
            habitat: "Lagos e áreas alagadas",
            tamanho: "120 cm",
            alimentacao: "Algas e pequenos crustáceos"
        },
        {
            nome: "Pardal",
            cor: "Marrom e cinza",
            especie: "Passer domesticus",
            habitat: "Cidades e áreas urbanas",
            tamanho: "16 cm",
            alimentacao: "Grãos e insetos"
        },
        {
            nome: "Águia",
            cor: "Marrom escuro",
            especie: "Aquila chrysaetos",
            habitat: "Montanhas e campos abertos",
            tamanho: "85 cm",
            alimentacao: "Pequenos mamíferos"
        },
        {
            nome: "Beija-flor",
            cor: "Verde iridescente",
            especie: "Archilochus colubris",
            habitat: "Jardins e florestas",
            tamanho: "9 cm",
            alimentacao: "Néctar e pequenos insetos"
        },
        {
            nome: "Pinguim",
            cor: "Preto e branco",
            especie: "Aptenodytes forsteri",
            habitat: "Regiões polares",
            tamanho: "115 cm",
            alimentacao: "Peixes e krill"
        },
        {
            nome: "Canário",
            cor: "Amarelo",
            especie: "Serinus canaria",
            habitat: "Áreas abertas e domésticas",
            tamanho: "12 cm",
            alimentacao: "Sementes"
        },
        {
            nome: "Arara Azul",
            cor: "Azul",
            especie: "Anodorhynchus hyacinthinus",
            habitat: "Florestas tropicais e cerrado",
            tamanho: "100 cm",
            alimentacao: "Frutas e sementes"
        },
        {
            nome: "Tucano",
            cor: "Preto com bico colorido",
            especie: "Ramphastos toco",
            habitat: "Florestas tropicais",
            tamanho: "65 cm",
            alimentacao: "Frutas, insetos e ovos"
        },
        {
            nome: "Bem-te-vi",
            cor: "Amarelo, branco e preto",
            especie: "Pitangus sulphuratus",
            habitat: "Áreas urbanas e campos",
            tamanho: "22 cm",
            alimentacao: "Insetos e frutas"
        },
        {
            nome: "Coruja-buraqueira",
            cor: "Marrom com pintas",
            especie: "Athene cunicularia",
            habitat: "Campos abertos e pastagens",
            tamanho: "23 cm",
            alimentacao: "Insetos e pequenos roedores"
        },
        {
            nome: "Flamingo",
            cor: "Rosa",
            especie: "Phoenicopterus roseus",
            habitat: "Lagos e áreas alagadas",
            tamanho: "120 cm",
            alimentacao: "Algas e pequenos crustáceos"
        },
        {
            nome: "Pardal",
            cor: "Marrom e cinza",
            especie: "Passer domesticus",
            habitat: "Cidades e áreas urbanas",
            tamanho: "16 cm",
            alimentacao: "Grãos e insetos"
        },
        {
            nome: "Águia",
            cor: "Marrom escuro",
            especie: "Aquila chrysaetos",
            habitat: "Montanhas e campos abertos",
            tamanho: "85 cm",
            alimentacao: "Pequenos mamíferos"
        },
        {
            nome: "Beija-flor",
            cor: "Verde iridescente",
            especie: "Archilochus colubris",
            habitat: "Jardins e florestas",
            tamanho: "9 cm",
            alimentacao: "Néctar e pequenos insetos"
        },
        {
            nome: "Pinguim",
            cor: "Preto e branco",
            especie: "Aptenodytes forsteri",
            habitat: "Regiões polares",
            tamanho: "115 cm",
            alimentacao: "Peixes e krill"
        },
        {
            nome: "Canário",
            cor: "Amarelo",
            especie: "Serinus canaria",
            habitat: "Áreas abertas e domésticas",
            tamanho: "12 cm",
            alimentacao: "Sementes"
        },

        {
            nome: "Garça-branca",
            cor: "Branca",
            especie: "Ardea alba",
            habitat: "Áreas alagadas",
            tamanho: "90 cm",
            alimentacao: "Peixes e anfíbios"
        },
        {
            nome: "Andorinha",
            cor: "Azul escuro e branco",
            especie: "Hirundo rustica",
            habitat: "Campos e cidades",
            tamanho: "17 cm",
            alimentacao: "Insetos"
        },
        {
            nome: "Urubu",
            cor: "Preto",
            especie: "Coragyps atratus",
            habitat: "Campos abertos e cidades",
            tamanho: "62 cm",
            alimentacao: "Carniça"
        },
        {
            nome: "Papagaio",
            cor: "Verde",
            especie: "Amazona aestiva",
            habitat: "Florestas tropicais",
            tamanho: "38 cm",
            alimentacao: "Frutas e sementes"
        },
        {
            nome: "João-de-barro",
            cor: "Marrom",
            especie: "Furnarius rufus",
            habitat: "Campos e áreas urbanas",
            tamanho: "18 cm",
            alimentacao: "Insetos"
        },
        {
            nome: "Pica-pau",
            cor: "Preto, branco e vermelho",
            especie: "Dryocopus lineatus",
            habitat: "Florestas",
            tamanho: "36 cm",
            alimentacao: "Insetos e larvas"
        },
        {
            nome: "Maritaca",
            cor: "Verde",
            especie: "Psittacara leucophthalmus",
            habitat: "Florestas e cidades",
            tamanho: "32 cm",
            alimentacao: "Frutas e sementes"
        },
        {
            nome: "Galo",
            cor: "Variada",
            especie: "Gallus gallus domesticus",
            habitat: "Áreas rurais",
            tamanho: "70 cm",
            alimentacao: "Grãos e insetos"
        },
        {
            nome: "Pato",
            cor: "Variada",
            especie: "Anas platyrhynchos",
            habitat: "Lagos e rios",
            tamanho: "50 cm",
            alimentacao: "Plantas aquáticas e insetos"
        },
        {
            nome: "Cisne",
            cor: "Branco",
            especie: "Cygnus olor",
            habitat: "Lagos",
            tamanho: "150 cm",
            alimentacao: "Plantas aquáticas"
        },

        {
            nome: "Gavião",
            cor: "Marrom e branco",
            especie: "Rupornis magnirostris",
            habitat: "Florestas e campos",
            tamanho: "40 cm",
            alimentacao: "Pequenos animais"
        },
        {
            nome: "Albatroz",
            cor: "Branco e preto",
            especie: "Diomedea exulans",
            habitat: "Oceanos",
            tamanho: "120 cm",
            alimentacao: "Peixes e lulas"
        },
        {
            nome: "Pelicano",
            cor: "Branco e cinza",
            especie: "Pelecanus onocrotalus",
            habitat: "Lagos e mares",
            tamanho: "140 cm",
            alimentacao: "Peixes"
        },
        {
            nome: "Gaivota",
            cor: "Branco e cinza",
            especie: "Larus argentatus",
            habitat: "Praias e mares",
            tamanho: "45 cm",
            alimentacao: "Peixes e restos"
        },
        {
            nome: "Cardeal",
            cor: "Vermelho",
            especie: "Paroaria coronata",
            habitat: "Campos e matas",
            tamanho: "19 cm",
            alimentacao: "Sementes e insetos"
        },
        {
            nome: "Sabiá",
            cor: "Marrom",
            especie: "Turdus rufiventris",
            habitat: "Jardins e florestas",
            tamanho: "25 cm",
            alimentacao: "Frutas e insetos"
        },
        {
            nome: "Curió",
            cor: "Preto e branco",
            especie: "Sporophila angolensis",
            habitat: "Campos",
            tamanho: "13 cm",
            alimentacao: "Sementes"
        },
        {
            nome: "Rolinha",
            cor: "Cinza claro",
            especie: "Columbina talpacoti",
            habitat: "Áreas urbanas e campos",
            tamanho: "17 cm",
            alimentacao: "Sementes"
        },
        {
            nome: "Pomba",
            cor: "Cinza",
            especie: "Columba livia",
            habitat: "Cidades",
            tamanho: "33 cm",
            alimentacao: "Grãos e sementes"
        },
        {
            nome: "Mutum",
            cor: "Preto",
            especie: "Crax fasciolata",
            habitat: "Florestas",
            tamanho: "83 cm",
            alimentacao: "Frutas e sementes"
        },

        {
            nome: "Tico-tico",
            cor: "Marrom e cinza",
            especie: "Zonotrichia capensis",
            habitat: "Campos e jardins",
            tamanho: "15 cm",
            alimentacao: "Sementes e insetos"
        },
        {
            nome: "Saíra",
            cor: "Colorida",
            especie: "Tangara seledon",
            habitat: "Florestas",
            tamanho: "14 cm",
            alimentacao: "Frutas e insetos"
        },
        {
            nome: "Uirapuru",
            cor: "Marrom",
            especie: "Cyphorhinus arada",
            habitat: "Floresta Amazônica",
            tamanho: "13 cm",
            alimentacao: "Insetos"
        },
        {
            nome: "Avestruz",
            cor: "Preto e branco",
            especie: "Struthio camelus",
            habitat: "Savanas",
            tamanho: "210 cm",
            alimentacao: "Plantas e sementes"
        },
        {
            nome: "Emu",
            cor: "Marrom",
            especie: "Dromaius novaehollandiae",
            habitat: "Planícies",
            tamanho: "190 cm",
            alimentacao: "Plantas e insetos"
        },
        {
            nome: "Kiwi",
            cor: "Marrom",
            especie: "Apteryx australis",
            habitat: "Florestas da Nova Zelândia",
            tamanho: "45 cm",
            alimentacao: "Insetos e vermes"
        },
        {
            nome: "Condor",
            cor: "Preto",
            especie: "Vultur gryphus",
            habitat: "Montanhas",
            tamanho: "130 cm",
            alimentacao: "Carniça"
        },
        {
            nome: "Corvo",
            cor: "Preto",
            especie: "Corvus corax",
            habitat: "Diversos ambientes",
            tamanho: "69 cm",
            alimentacao: "Onívoro"
        },
        {
            nome: "Cacatua",
            cor: "Branca",
            especie: "Cacatua alba",
            habitat: "Florestas tropicais",
            tamanho: "46 cm",
            alimentacao: "Sementes e frutas"
        },
        {
            nome: "Faisão",
            cor: "Colorido",
            especie: "Phasianus colchicus",
            habitat: "Campos e florestas",
            tamanho: "89 cm",
            alimentacao: "Grãos e insetos"
        }
    ];

    return (
        <div>
            <h1>Listagem de Aves bonitas</h1>
            <hr />

            {
                listaAves.map(
                    item => <p> {item.nome} da espécie {item.especie} vive em {item.habitat} se alimentando de {item.alimentacao} com o tamanho de {item.tamanho} </p>
                )
            }

        </div>
    );
}

export default Listagem;