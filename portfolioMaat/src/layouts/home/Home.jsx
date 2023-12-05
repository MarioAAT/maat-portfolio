import React, {useState, useEffect} from 'react';
import { InicioAnim } from '../inicioAnim/InicioAnim';
// import Image from 'react-bootstrap/Image';
// import muñeco from '../../images/muñeco.png';
import programadorC from '../../images/programadorC.png'
import './Home.css';

export const Home = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simula un tiempo de carga
        setTimeout(() => {
            setLoading(false);
        }, 5000); // Cambia este valor al tiempo que desees
    }, []);

return (
    <>
        <div>
            {loading ? (
            <InicioAnim />
            ) : (
                <main className='container-principal-home'>
                    <div className='container-home'>
                        <div class="saludo-home">
                            <div className='saludo'>Hola! Soy Mario Aguilar</div>                            
                        </div>
                        <div className='img-muñeco'>
                            <img src={programadorC} alt="" />
                        </div>
                        <div className='titulo-profesion'>
                            FULL STACK DEVELOPER 
                        </div>
                    </div>
                </main>
            )}
        </div>
    </>
)
}