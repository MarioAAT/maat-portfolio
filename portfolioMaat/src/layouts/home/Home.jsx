import React, {useState, useEffect} from 'react';
import { InicioAnim } from '../inicioAnim/InicioAnim';
import '../../images/Circular.png';
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
                    <h1>Bienvenido a mi sitio web</h1>
                </main>
            )}
        </div>
    </>
)
}
