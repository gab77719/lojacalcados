import React from "react";
import './Produtos.css';

import bolsa from '../../assets/bolsa.png';
import note from '../../assets/note.png';
import tenis from '../../assets/tenis.png';
import tamanco from '../../assets/tamanco.png';
import sandalia1 from '../../assets/sandalia1.png';
import sandalia2 from '../../assets/sandalia2.png';

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
                    span 
                </div>