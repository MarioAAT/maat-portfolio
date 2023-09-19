import React, {useState, useEffect} from 'react';
import { InicioAnim } from '../inicioAnim/InicioAnim';
import Image from 'react-bootstrap/Image';
import muñeco from '../../images/muñeco.png';
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
                
                <main className='container-home'>
                    <div>
                        <div className='img-muñeco'>
                            <img src={muñeco} alt="" />
                        </div>
                        <figure class="text-end saludo-home">
                            <blockquote class="blockquote">
                                <p>Hola a todos, soy Mario Aguilar</p>
                            </blockquote>
                        </figure>
                    </div>
                </main>
            )}
        </div>
    </>
)
}
