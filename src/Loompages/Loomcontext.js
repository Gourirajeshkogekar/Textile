// LoomContext.js

import React, { createContext, useContext, useState } from 'react';

const LoomContext = createContext();

export const useLoomContext = () => useContext(LoomContext);

export const LoomProvider = ({ children }) => {
    const [occupiedBlocks, setOccupiedBlocks] = useState([]);

    const updateOccupiedBlocks = (blocks) => {
        setOccupiedBlocks(blocks);
    };

    return (
        <LoomContext.Provider value={{ occupiedBlocks, updateOccupiedBlocks }}>
            {children}
        </LoomContext.Provider>
    );
};
