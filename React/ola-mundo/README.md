# Como intalar e rodar o React
É necessário ter intalado o **Node** no computador.

Em seguida, abrir o terminal (CMD) na pasta onde vai ficar o projeto e digitar o comando ```npx create-next-app```.
*Nota: estamos usando o React junto do **NextJS***
Escolher as seguintes opções na intalação:
- No, Customize settings
- Use TypeScri? Escolhar opção **No**
- Use Tailwind CSS? Escolhar opção **No**
- O retante das opções pode deixar o padrão

depois de baixar, se quiser, faça a limpeza dos arquivos padrões que vem no projeto (aruivas de CSS, SVS, ico).

Por fim, para **iniciar** (rodar) um projeto em React, rodar no terminal o comando ```npm run dev```.
*Nota: tenha certeza de rodar esse comando na pasta raiz do projeto*

## Como criar um módulo/componente em React
Sempre que for criar um módulo ou um componente use essa estrutura:
```

export default function Produtos() {
    return (
        <div>
            
        </div>
    )
}


```

