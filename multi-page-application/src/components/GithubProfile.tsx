/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function GithubProfile() {
    let content;
    const [data, setData] = useState<any>(null)
    const [loading, setLoading] = useState(true)
    const [username, setUsername] = useState('octocat')
    const [error, setError] = useState<string | null>(null)
    const [input, setInput] = useState('')
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);
                
                const fetchUrl = `https://api.github.com/users/${username}`
                const response = await fetch(fetchUrl);
                if (!response.ok) {
                    throw new Error(`HTTP Error! Status, ${response.status}`)
                }
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error: any) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }
        fetchData();
    }, [username])

    if (loading === true) {
        content = <p>Carregando...</p>
    } else if (error && error !== null) {
        content = <p>Erro: {error}</p>
    } else if (data && data !== null) {
        content = <h1>{data.name}</h1>
    } else {
        content = null;
    }

    return (
        <div>
            <div>
                {content}
            </div>
            <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button 
                onClick={() => {
                    setUsername(input);
                    navigate(`/perfil/${input}`);
                }}>
                Buscar
            </button>
        </div>
    )
}

export default GithubProfile