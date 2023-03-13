import { useState } from 'react';
import  Link from 'next/link';


function Home(){
    return (
        <div>
            <h2>Home do contador</h2>
            <Contador />
            <Link href="/sobre">
                Sobr
            </Link>
            <Link href="/tempo">
                Tempo
            </Link>

        </div>
        
    )
}
function Contador(){
    const [contador, setContador] = useState(0);
    function adicionarContador(){
        setContador(contador + 1)
    }
    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}

export default Home