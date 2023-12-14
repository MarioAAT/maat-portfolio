import React, {useState, useEffect} from 'react';
import { InicioAnim } from '../inicioAnim/InicioAnim';
import programadorC from '../../images/programadorC.png'
import react from '../../images/React1.png';
import node from '../../images/node.png';
import html from '../../images/html.png';
import css from '../../images/css.png';
import javascript from '../../images/javascript.png';
import express from '../../images/express.png';
import mysql from '../../images/mysql.png';
import php from '../../images/php.png';
import python from '../../images/python.png';
import git from '../../images/git.png';
import github from '../../images/github.png';
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
        <div className='supra'>
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
                        <h2 className='stack-titulo'>Stack Tecnologico</h2>
                        <div class="grid-container">
                            <div class="grid-item">
                                <img src={react} alt="" />
                                <p>React</p>
                            </div>
                            <div class="grid-item">
                                <img src={node} alt="" />
                                <p>Node.Js</p>
                            </div>
                            <div class="grid-item">
                                <img src={javascript} alt="" />
                                <p>JavaScript</p>
                            </div>
                            <div class="grid-item">
                                <img src={html} alt="" />
                                <p>HTML</p>
                            </div>
                            <div class="grid-item">
                                <img src={css} alt="" />
                                <p>CSS</p>
                            </div>
                            <div class="grid-item">
                                <img src={express} alt="" />
                                <p>Express</p>
                            </div>
                            <div class="grid-item">
                                <img src={mysql} alt="" />
                                <p>MySQL</p>
                            </div>
                            <div class="grid-item">
                                <img src={python} alt="" />
                                <p>Python</p>
                            </div>
                            <div class="grid-item">
                                <img src={php} alt="" />
                                <p>PHP</p>
                            </div>
                            <div class="grid-item">
                                <img src={git} alt="" />
                                <p>Git</p>
                            </div>
                            <div class="grid-item">
                                <img src={github} alt="" />
                                <p>GitHub</p>
                            </div>
                        </div>
                    </section>
                    <section className='proyectos'>

                    </section>
                </main>
            )}
        </div>
    </>
)
}