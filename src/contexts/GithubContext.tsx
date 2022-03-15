import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { toast } from 'react-toastify';


/* ===== TIPAGENS ===== */
interface GithubContextData {
    currentUser: string;
    setCurrentUser: (currentUser: string) => void;
    userData: UserData;
    userRepositories: Respositories[];
    getUserData: (username: string) => Promise<void>;

    followersData: FollowersData[];
    followingData: FollowingData[];
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

interface FollowersLogin {
    login: string;
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
    const [followingData, setFollowingData] = useState<FollowingData[]>([]);

    const [followersLogin, setFollowersLogin] = useState<FollowersLogin[]>([]);


    // Bucando dados do usuário digitado na API do Github (de forma assincrona)
    async function getUserData(username: string) {
        try {
            //Buscando dados do usuario
            await api.get<UserData>(`/${username}`).then(response => setUserData(response.data));

            //Buscando repositorios do usuário
            await api.get<Respositories[]>(`/${username}/repos`).then(response => setUserRepositories(response.data));

            //Fetching user follower data
            await api.get<FollowersLogin[]>(`/${username}/followers`).then(response =>
                setFollowersLogin(response.data)
            );


            // getDataFromFollowersOrFollowing(followersLogin);

            toast.success('Dado encontrado');
        } catch (error) {
            console.log(error);
            toast.error('Dado não encontrado');
        }
    }


    // Função Para pegar dados dos Seguindores e Seguindo
    function getDataFromFollowersOrFollowing(logins: FollowersLogin[]) {
        logins.map(async (login) => {
            await api.get<FollowersData>(`/${login.login}`).then(response => setFollowersData([...followersData, response.data]));
        }
        );

        console.log(followersData);
    }


    return (
        <GithubContext.Provider value={{
            currentUser,
            setCurrentUser,
            userData,
            userRepositories,
            getUserData,
            followersData,
            followingData
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