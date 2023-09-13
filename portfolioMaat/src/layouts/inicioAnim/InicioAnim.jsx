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
    <div className="loading-screen">
        <animated.div style={animationProps} className="loading-name">
        MARIO AGUILAR
        </animated.div>
    </div>
)
}
