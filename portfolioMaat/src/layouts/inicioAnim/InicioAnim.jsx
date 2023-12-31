import React, {useEffect, useState} from 'react';
import {animated, useSpring} from 'react-spring';
import './InicioAnim.css'

export const InicioAnim = () => {

    const animationProps = useSpring({
        from: { opacity: 0, transform: 'translateY(-50px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        delay: 500, 
    });

    const [texto, setTexto] = useState("");
    const velocidadEscritura = 100; 
    const textoCompleto = "Hello i'ts me, Mario!!";

    useEffect(() => {
        let i = 0;
        const timer = setInterval(() => {
        if (i < textoCompleto.length) {
            setTexto(textoCompleto.substring(0, i + 1));
            i++;
        } else {
            clearInterval(timer);
        }
        }, velocidadEscritura);
        return () => {
            clearInterval(timer);
        };
    }, []);

return (
    <>
        <main className='mainAnim'>
            <div className="loading-screen hero-box">
                <animated.div style={animationProps} className="loading-name hero-content-1">
                    {texto}
                </animated.div>
            </div>
        </main>
    </>
)
}

