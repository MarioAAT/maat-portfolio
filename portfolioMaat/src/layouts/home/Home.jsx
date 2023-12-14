import React, {useState, useEffect} from 'react';
import { InicioAnim } from '../inicioAnim/InicioAnim';
import programadorC from '../../images/programadorC.png'
import react from '../../images/React1.png';
import './Home.css';

export const Home = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 5000); 
    }, []);

return (
    <>
        <div>
            {loading ? (
            <InicioAnim />
            ) : (
                <main className='container-principal-home'>
                    <header className='container-header'>
                        <section class="saludo-home">
                            <div className='saludo'><strong className='mario'>👋 Hola! Soy Mario Aguilar</strong></div>
                            <div className='descripcion-uno'>
                                Un <strong className='ocupacion'>Full Stack Developer</strong> enfocado en el desarrollo y evolución de aplicaciones web. Creo interfaces intuitivas y robustas en el lado del cliente y del servidor.  
                            </div>
                            <div className='descripcion-dos'>Soy un profesional práctico y eficiente con experiencia en desarrollo frontend y backend. Contribuyo al éxito de proyectos digitales con un enfoque integral. </div>                            
                        </section>
                        <div className='img-muñeco'>
                            <img src={programadorC} alt="" />
                        </div>
                    </header>
                    <section className='stack'>
                        <h2>Stack Tecnologico</h2>
                        <div class="grid-container">
                            <div class="grid-item">
                                <img src={react} alt="" />
                                <p>React</p>
                            </div>
                            <div class="grid-item">
                                <img src="" alt="" />
                                <p>Texto 2</p>
                            </div>
                            <div class="grid-item">
                                <img src="" alt="" />
                                <p>Texto 3</p>
                            </div>
                            <div class="grid-item">
                                <img src="" alt="" />
                                <p>Texto 4</p>
                            </div>
                            <div class="grid-item">
                                <img src="" alt="" />
                                <p>Texto 5</p>
                            </div>
                            <div class="grid-item">
                                <img src="" alt="" />
                                <p>Texto 6</p>
                            </div>
                            <div class="grid-item">
                                <img src="" alt="" />
                                <p>Texto 7</p>
                            </div>
                            <div class="grid-item">
                                <img src="" alt="" />
                                <p>Texto 8</p>
                            </div>
                            <div class="grid-item">
                                <img src="" alt="" />
                                <p>Texto 9</p>
                            </div>
                            <div class="grid-item">
                                <img src="" alt="" />
                                <p>Texto 10</p>
                            </div>
                            <div class="grid-item">
                                <img src="" alt="" />
                                <p>Texto 11</p>
                            </div>
                        </div>
                    </section>
                    <a target="_blank" href="https://icons8.com/icon/bzf0DqjXFHIW/reaccionar">Reaccionar</a> icono de <a target="_blank" href="https://icons8.com">Icons8</a>
                </main>
            )}
        </div>
    </>
)
}