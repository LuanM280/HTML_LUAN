import Cabecalho from "./components/Cabecalho";
import Produtos from "./components/Produtos";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Home.css"
import Usuarios from "./usuarios/page";


export default function Home() {
  return (
    <div>

      <Cabecalho/>

      <hr/>

      <Produtos/> 

  

    </div>
  );
}
