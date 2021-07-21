import React, { useState } from 'react';
import DemoContext from '../../context/DemoContext';

export const ComponentePadre = ({ children }) => {

    const demoData = 1234567890;

    // Seteamos el state que va a almacenar los valores que se le pasan al context
    const [demoContext, setDemoContext] = useState(demoData);
    const contextValue = {
        demoContext,
        setDemoContext,
    };

    return (
        <DemoContext.Provider value={contextValue}>
            <p>Soy el ComponentePADRE</p>
            {children}
        </DemoContext.Provider>
    )
}
