import {Routes, Route, Link} from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Perfil from './pages/Perfil';

function App() {

  return (
    <>
    <Link to="/">Ir para Principal</Link>
    <span>|||||=======||||| </span>
    <Link to="/sobre">Ir para Sobre</Link>

    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='sobre' element={<Sobre />}/>
      <Route path='/perfil/:username' element={<Perfil />}/>
    </Routes>
    </>
  )
}

export default App
