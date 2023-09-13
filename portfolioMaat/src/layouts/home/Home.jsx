import React, {useState, useEffect} from 'react';
import { InicioAnim } from '../inicioAnim/InicioAnim';

export const Home = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    // Simula un tiempo de carga
    setTimeout(() => {
        setLoading(false);
    }, 3000); // Cambia este valor al tiempo que desees
    }, []);

return (
    <div>
      {loading ? (
        <InicioAnim />
      ) : (
        // Renderiza el contenido principal de tu aplicación aquí
        <div>
          <h1>Bienvenido a mi sitio web</h1>
          {/* ...otros componentes y contenido */}
        </div>
      )}
    </div>
)
}
