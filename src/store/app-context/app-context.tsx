import { AppContextProps, AppState, Tokens, UserObject } from "./types";
import { createContext, useContext, useState } from 'react';

const AppContext = createContext<AppState | undefined>(undefined);

export const AppContextProvider = ({children}: AppContextProps) => {
    const [user, setUser] = useState<UserObject | undefined>(undefined);
    const [tokens, setTokens] = useState<Tokens | undefined>(undefined);

    const setTokensState = (accessToken: string, refreshToken: string) => {
        // Aquí podemos hacer lo que necesiten con la información
        setTokens({accessToken, refreshToken});
    }

    const logOut = () => {
        setUser(undefined);
        setTokens(undefined);
        localStorage.removeItem("tokens");
        localStorage.removeItem("user");
    }

    return (
        <AppContext.Provider
            value={{
                user, 
                setUser, 
                tokens, 
                setTokens: setTokensState, 
                logOut}}
        >
                {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);

    // Error handle
    if (context === undefined) { 
        throw new Error("useAppContext must be used within an AppContextProvider");
    }
    
    return context;
};
