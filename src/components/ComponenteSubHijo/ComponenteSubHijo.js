import React, { useContext } from 'react';
import DemoContext from '../../context/DemoContext';

export const ComponenteSubHijo = ({ children }) => {
    // Obtenemos el contenido del DemoContext para ser utilizado en este componente, gracias al uso del hook useContext
    const context = useContext(DemoContext);

    const buttonHandler = (value) => {
        console.log('Button handler en ComponenteSubHijo');
        // Hacemos una llamada al setState del componente padre, para poder setear el nuevo valor en ese state y, por tanto, en el context
        context.setDemoContext(value);
    };

    return (
        <div>
            <p>Soy el componente SUBHIJO</p>
            <p>El contenido del context es: {context.demoContext}</p>
            <button onClick={() => buttonHandler(1010)}>Pincha aquí para setear valor 1010 en el Context</button>
            {children}
        </div>
    )
}
