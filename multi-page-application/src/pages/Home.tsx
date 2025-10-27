import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import GithubProfile from "../components/GithubProfile"

import styles from './Home.module.css';
import Perfil from './Perfil';

function Home() {
    const [input, setInput] = useState('')
        
    const navigate = useNavigate();
    return (
        <div>
            <h1>Página Inicial</h1>
            <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button 
                onClick={() => {
                    navigate(`/perfil/${input}`);
                }}>
                Buscar
            </button>
            <div className={styles.container}>
                <Perfil />
            </div>
        </div>
    )
}

export default Home