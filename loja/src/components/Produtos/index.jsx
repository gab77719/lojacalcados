import './Produtos.css';

import bolsa from '../../assets/bolsa.png';
import note from '../../assets/portaNotebook.png';
import sandalia1 from '../../assets/sandalia1.png';
import sandalia2 from '../../assets/sandalia2.png';
import tamanco from '../../assets/tamanco.png';
import tenis from '../../assets/tenis.png';

export default function Produtos() {
    return (
        <section className='produtos'>
            <div className='titulos'>
                <h2>Novidades</h2>
                <p>
                    Dos clássicos aos modernos, descubra modelos que unem estilo, 
                    conforto e a sofisticação da MD Calçados. Perfeitos para acompanhar você no 
                    trabalho, um evento  ou no dia a dia com elegância.
                </p>
            </div>

        <div className='produtos_grid'>
            <div className='card'>
                <div className='card-image'>
                    <img src={sandalia1} alt='Sandália salto alto' />
                    <span className='badge-venda'>Mais vendido</span>
                </div>
                <div className='card-info'>
                    <h3>Sandália Couro</h3>
                    <p className='preco'>R$ 349,90</p>
                    <button className ='btn'>Comprar agora</button>
                </div>
            </div>

            <div className='card'>
                <div className='card-image'>
                    <img src={sandalia2} alt='Sandália rosa' />
                </div>
                <div className='card-info'>
                    <h3>Sandália Couro</h3>
                    <p className='preco'>R$ 229,90</p>
                    <button className ='btn'>Comprar agora</button>
                </div>
            </div>

            <div className='card'>
                <div className='card-image'>
                    <img src={tamanco} alt='Tamanco' />
                    <span className='badge-desconto'>-10%</span>
                </div>
                <div className='card-info'>
                    <h3>Tamanco Couro</h3>
                    <p className='preco'>R$ 369,90</p>
                    <button className ='btn'>Comprar agora</button>
                </div>
            </div>

            <div className='card'>
                <div className='card-image'>
                    <img src={bolsa} alt='Bolsa vermelha' />
                    <span className='badge-desconto'>-10%</span>
                </div>
                <div className='card-info'>
                    <h3>Bolsa Shopper Nylon</h3>
                    <p className='preco'>R$ 269,90</p>
                    <button className ='btn'>Comprar agora</button>
                </div>
            </div>

            <div className='card'>
                <div className='card-image'>
                    <img src={note} alt='Porta Notebook' />
                </div>
                <div className='card-info'>
                    <h3>Porta Notebook Nylon</h3>
                    <p className='preco'>R$ 269,90</p>
                    <button className ='btn'>Comprar agora</button>
                </div>
            </div>

            <div className='card'>
                <div className='card-image'>
                    <img src={tenis} alt='Tenis branco e preto' />
                    <span className='badge-venda'>Mais Vendido</span>
                </div>
                <div className='card-info'>
                    <h3>Tenis Couro Camurça</h3>
                    <p className='preco'>R$ 169,90</p>
                    <button className ='btn'>Comprar agora</button>
                </div>
            </div>
        </div>
        </section>
    );
}