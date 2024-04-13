import React, { createContext, useState } from "react";


interface ContextProps {
    user: string | undefined;
    setUser: React.Dispatch<React.SetStateAction<string | undefined>>;
    token: string | undefined;
    setToken: React.Dispatch<React.SetStateAction<string | undefined>>;
}

interface Props {
    children: React.ReactNode
}

export const AuthContext = createContext<ContextProps>({
    user: "",
    token: localStorage.getItem("token") || "",
    setToken: () => {},
    setUser: () => {}
});

export const AuthContextProviver = ({children}: Props) => {
    const [user, setUser] = useState<string | undefined>(undefined);
    const [token, setToken] = useState<string | undefined>(undefined);
    return (
        <AuthContext.Provider value={{user, setUser, token, setToken}}>
            {children}
        </AuthContext.Provider>
    )
}

