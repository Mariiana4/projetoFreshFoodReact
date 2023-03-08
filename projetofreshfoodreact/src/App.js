import { useState } from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import Rota from '../src/Rota'

import ItemCarrinho from './componentes/itemCarrinho/ItemCarrinho';

function App() {

  return (
    <div className="App">
      <Rota/>
    </div>
  )
}

export default App;
