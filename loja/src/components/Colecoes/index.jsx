import './Colecoes.css';

import verao from '../../assets/verao.jpg';
import scarpin from '../../assets/scarpins.jpg';
import bolsa from '../../assets/bolsas.jpg';

export default function Colecoes() {
    return (
        <section className='colecoes'>
            <div className='titulos'>
                <h2>Coleções 2026</h2>
                <p>
                    Descubra as tendências da moda com a MD Calçados. Explore nossa nova coleção 
                    para encontrar o par perfeito que combina estilo, conforto e sofisticação.
                </p>
                <button className='btn'>Comprar agora</button>
            </div>
        
            <div className='grid_colecoes'>
                <div className='item'>
                <img src ={verao} alt='colecao verao'/>
                </div>
                <div className='item grande'>
                    <img src ={bolsa} alt='Bolsas'/>
                </div>
                <div className='item'>
                    <img src ={scarpin} alt='scarpins'/>
                </div>
            </div>
        </section>
    );
}