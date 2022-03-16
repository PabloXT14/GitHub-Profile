import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { toast } from 'react-toastify';
import { useNavigate, Navigate } from "react-router-dom";


/* ===== TIPAGENS ===== */
interface GithubContextData {
    currentUser: string;
    setCurrentUser: (currentUser: string) => void;
    userData: UserData;
    userRepositories: Respositories[];
    getUserData: (username: string) => Promise<void>;

    followersData: FollowersData[];
    followingsData: FollowingsData[];

    getOtherUserDatas: (username: string) => void;
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
    login: string;
    avatar_url: string;
    html_url: string;
}


interface FollowingsData {
    login: string;
    avatar_url: string;
    html_url: string;
}


interface GithubProviderProps {
    children: ReactNode;
}

/* ===== CONTEXT ===== */
export const GithubContext = createContext<GithubContextData>({} as GithubContextData);


/* ===== PROVIDER ===== */
export function GithubProvider({ children }: GithubProviderProps) {

    const [currentUser, setCurrentUser] = useState<string>('');
    const [userData, setUserData] = useState<UserData>({} as UserData);
    const [userRepositories, setUserRepositories] = useState<Respositories[]>([]);

    const [followersData, setFollowersData] = useState<FollowersData[]>([]);
    const [followingsData, setFollowingsData] = useState<FollowingsData[]>([]);



    // Bucando dados do usuário digitado na API do Github (de forma assincrona)
    async function getUserData(username: string) {
        try {
            //Buscando dados do usuario
            await api.get<UserData>(`/${username}`).then(response => setUserData(response.data));

            //Buscando repositorios do usuário
            await api.get<Respositories[]>(`/${username}/repos`).then(response => setUserRepositories(response.data));

            //Fetching user follower data
            await api.get<FollowersData[]>(`/${username}/followers`).then(response =>
                setFollowersData(response.data)
            );

            //Fetching user followings data
            await api.get<FollowingsData[]>(`/${username}/following`).then(response =>
                setFollowingsData(response.data)
            );

            // Popup
            toast.success('Dado encontrado');

        } catch (error) {
            console.log(error);
            toast.error('Dado não encontrado');
        }
    }

    // Carregar dados de outro usuário
    function getOtherUserDatas(username: string) {
        setCurrentUser(username);
        getUserData(username);
    }


    return (
        <GithubContext.Provider value={{
            currentUser,
            setCurrentUser,
            userData,
            userRepositories,
            getUserData,
            followersData,
            followingsData,
            getOtherUserDatas
        }}>
            {children}
        </GithubContext.Provider>
    );
}


/* ===== CUSTOMAZID HOOK ===== */
export function useGithub() {
    const context = useContext(GithubContext);

    return context;
}