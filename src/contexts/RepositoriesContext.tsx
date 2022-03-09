import { createContext, ReactNode, useState } from "react";

/* ===== TIPAGENS ===== */
interface Repositories {
    userData: object;
    userRepositories: Array<object>;
    setUserData: object;
    setUserRepositories: Array<object>;
}

interface RepositoriesProviderProps {
    children: ReactNode;
}

/* ===== CONTEXT ===== */
export const RepositoriesContext = createContext({});


/* ===== PROVIDER ===== */
export function RepositoriesProvider({ children }: RepositoriesProviderProps) {
    const [userData, setUserData] = useState({});
    const [userRepositories, setUserRepositories] = useState([]);

    return (
        <RepositoriesContext.Provider value={{
            userData,
            userRepositories,
            setUserData,
            setUserRepositories
        }}>
            {children}
        </RepositoriesContext.Provider>
    );
}
