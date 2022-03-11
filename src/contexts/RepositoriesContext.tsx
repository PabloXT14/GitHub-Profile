import { createContext, ReactNode, useState } from "react";

/* ===== TIPAGENS ===== */
interface RepositoriesContextData {
    userData: UserData;
    setUserData: (userData: UserData) => void;
    userRepositories: Respositories[];
    setUserRepositories: (respositories: Respositories[]) => void;
}

interface UserData {
    avatar_url: string;
    name: string;
    login: string;
    bio: string;
    public_repos: number;
    followers: number;
    following: number;
}

interface Respositories {
    id: number;
    name: string;
    description: string;
    html_url: string;
    language: string;
    stargazers_count: number;
    forks: number;
}

interface RepositoriesProviderProps {
    children: ReactNode;
}

/* ===== CONTEXT ===== */
export const RepositoriesContext = createContext<RepositoriesContextData>({} as RepositoriesContextData);


/* ===== PROVIDER ===== */
export function RepositoriesProvider({ children }: RepositoriesProviderProps) {
    const [userData, setUserData] = useState<UserData>({} as UserData);
    const [userRepositories, setUserRepositories] = useState<Respositories[]>([]);

    return (
        <RepositoriesContext.Provider value={{
            userData,
            setUserData,
            userRepositories,
            setUserRepositories
        }}>
            {children}
        </RepositoriesContext.Provider>
    );
}
