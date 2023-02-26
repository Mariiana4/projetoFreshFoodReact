import './App.css';
import CabecalhoParte01 from './componentes/cabecalho/parte01/CabecalhoParte01';
import CabecalhoParte02 from './componentes/cabecalho/parte02/CabecalhoParte02';

import CardDeReceitas from './componentes/cardReceitas/CardDeReceitas';
import {Receitas} from './componentes/data/Data';

import Rodape from './componentes/rodape/Rodape';


function App() {
  return (
    <div className="App">
      <CabecalhoParte01/>
      <CabecalhoParte02/>

      <ul class="container_cards">
        {
          Receitas.map((x,i) =>(
            <CardDeReceitas
            imagemCardReceitas={x.imagemCardReceitas} 
            tagCardReceitas={x.tagCardReceitas} 
            nomeCardReceitas={x.nomeCardReceitas} 
            tempoCardReceitas={x.tempoCardReceitas} 
            dificuldadeCardReceitas={x.dificuldadeCardReceitas} 
            porcaoCardReceitas={x.porcaoCardReceitas}/>
          ))
        }
      </ul>

      <Rodape/>
    </div>
  );
}

export default App;
