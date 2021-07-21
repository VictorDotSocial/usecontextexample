import React from 'react';

export const ComponenteHijo = ({ children }) => {
    return (
        <div>
            <p>Soy el componente HIJO</p>
            {children}
        </div>
    )
}
