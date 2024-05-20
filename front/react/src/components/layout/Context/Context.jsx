import React, { createContext, useContext } from 'react';

export const IContext = createContext(undefined);

export function useUserContext() {
    const user = useContext(IContext);
    if (user === undefined) {
        throw new Error("useUserContext doit être utilisé dans un IContext.Provider");
    }
    return user;
}