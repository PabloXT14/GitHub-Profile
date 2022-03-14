import { createContext, ReactNode, useState } from "react";

/* ===== TIPAGENS ===== */
interface RepositoriesContextData {
    userData: UserData;
    setUserData: (userData: UserData) => void;
    userRepositories: Respositories[];
    setUserRepositories: (respositories: Respositories[]) => void;
    followersData: FollowersData[];
    setFollowersData: (followersData: FollowersData[]) => void;
    followingData: FollowingData[];
    setFollowingData: (followingData: FollowingData[]) => void;
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

interface FollowersData {
    avatar_url: string;
    name: string;
    login: string;
    bio: string;
    location: string;
    company: string;
}

interface FollowingData {
    avatar_url: string;
    name: string;
    login: string;
    bio: string;
    location: string;
    company: string;
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

    const [followersData, setFollowersData] = useState<FollowersData[]>([]);
    const [followingData, setFollowingData] = useState<FollowingData[]>([]);

    return (
        <RepositoriesContext.Provider value={{
            userData,
            setUserData,
            userRepositories,
            setUserRepositories,
            followersData,
            setFollowersData,
            followingData,
            setFollowingData
        }}>
            {children}
        </RepositoriesContext.Provider>
    );
}


/* ===== CUSTOMAZID HOOK ===== */