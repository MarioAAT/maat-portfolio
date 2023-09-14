import React from 'react';
import {animated, useSpring} from 'react-spring';
import './InicioAnim.css'

export const InicioAnim = () => {

    const animationProps = useSpring({
        from: { opacity: 0, transform: 'translateY(-50px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        delay: 500, // Retraso para que aparezca después de un tiempo
    });

return (
    <>
        <main className='mainAnim'>
            <div className="loading-screen hero-box">
                <animated.div style={animationProps} className="loading-name hero-content-1">
                Hola!!<br></br>
                Soy Mario Aguilar 
                </animated.div>
            </div>
        </main>
    </>
)
}

{/*
    <div class="hero-box">
            <div class="hero-content-1">Frauen, </div>
        </div>
        <div class="hero-box">
            <div class="hero-content-2">Frieden und</div>
        </div>
    
        <div class="hero-box">
            <div class="hero-content-3"> Sicherheit</div>
        </div>
*/}