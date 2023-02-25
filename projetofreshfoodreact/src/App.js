import './App.css';
import CabecalhoParte01 from './componentes/cabecalho/parte01/CabecalhoParte01';
import CabecalhoParte02 from './componentes/cabecalho/parte02/CabecalhoParte02';

import CardDeReceitas from './componentes/cardReceitas/CardDeReceitas';
import {Receitas} from './componentes/data/Data';

function App() {
  return (
    <div className="App">
      <CabecalhoParte01/>
      <CabecalhoParte02/>

      <ul class="container_cards">
        {
          Receitas.map((x,i) =>(
            <CardDeReceitas
            imagemCardReceitas={x.imagem} 
            tagCardReceitas={x.tag} 
            nomeCardReceitas={x.nome} 
            tempoCardReceitas={x.tempo} 
            dificuldadeCardReceitas={x.dificuldade} 
            porcaoCardReceitas={x.porcao}/>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
