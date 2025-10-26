import './App.css'
import BotaoContador from './components/BotaoContador';
import Display from './components/Display';
import { useState } from 'react';


function App() {
  const [numero, setNumero] = useState(0);
  
  const incrementar = () => setNumero(numero +1)

  return (
    <>
    <Display valor={numero} />
    <BotaoContador onIncrementar={incrementar}/>
    </>
  )
}

export default App
