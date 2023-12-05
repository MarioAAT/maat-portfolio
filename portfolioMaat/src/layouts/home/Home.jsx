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
                            <div className='saludo'><strong>Hola! Soy Mario Aguilar</strong></div>
                            <div className='descripcion-uno'>
                                Un <strong>Full Stack Developer</strong>. Colaboro en el desarrollo y evolución de aplicaciones web,<br></br>
                                creando interfaces web intuitivas y a la implementación de funcionalidades sólidas en el lado del servidor.  
                            </div>
                            <div className='descripcion-uno'>Como desarrollador de software con experiencia, 
                                me destaco por ser un profesional práctico y eficiente. Con un enfoque integral, 
                                abordo tanto el desarrollo frontend como backend, contribuyendo a la implementación exitosa de proyectos digitales. </div>                            
                        </div>
                        <div className='img-muñeco'>
                            <img src={programadorC} alt="" />
                        </div>
                        
                    </div>
                </main>
            )}
        </div>
    </>
)
}