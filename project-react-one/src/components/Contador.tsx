import { useState } from 'react';

function Contador() {
const [numero, setNumero] = useState(0);

    return (
        <div>
            <p>Número: {numero}</p>
            <button onClick={() => setNumero(numero+1)}>Aumentar +1</button>
        </div>
    )
}

export default Contador