import React from "react";

export interface UserObject {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
}

export interface Tokens {
    accessToken: string;
    refreshToken: string;
}

// States of the App
export type AppState = {
    user: UserObject | undefined;
    setUser: (user: UserObject) => void;
    tokens: Tokens | undefined;
    setTokens: (accessToken: string, refreshToken: string) => void;
    logOut: () => void;
}

// The children will be the application
export type AppContextProps = {
    children: React.ReactNode;
}
