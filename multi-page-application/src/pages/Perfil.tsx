/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Perfil() {
    const [error, setError] = useState<string | null>(null);
    const [data, setData] = useState<any>(null)
    const [loading, setLoading] = useState(false)
    
    const params = useParams();
    const { username } = params
    
    useEffect(() => {
        
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);
                
                const response = await fetch(`https://api.github.com/users/${username}`)
                console.log({ response })
                if (!response.ok) throw new Error(`Erro ao buscar perfil',${response.status}`)

                    const jsonData = await response.json();
                    setData(jsonData);
                    
                } catch (error: any) {
                    setError(error.message)
                } finally {
                    setLoading(false)
                }
            }

            if (username) fetchData()

        }, [username])
        

    let content = null;

    if (loading) {
        content = <p>Carregando...</p>
    } else if (error) {
        content = <p>Erro: {error}</p>
    } else if(data) {
        content = (
            <div>
                <img src={data.avatar_url} alt="my avatar" width={150} />
                <h1>{data.name}</h1>
                <h3>{data.bio}</h3>
                <p>Repositórios públicos: {data.public_repos}</p>
            </div>
        )
    } else {
        content = <p>Nenhum perfil para exibir.</p>;
    }

    return (
        <div>
            <h1>Perfil de {username}</h1>
            <div>
                {content}
            </div>
        </div>
    )
}

export default Perfil