import { useContext, useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { RepositoriesContext } from '../../contexts/RepositoriesContext';
import { api } from '../../services/api';
import {
    HeaderInput,
    HeaderInputContainer,
    HeaderSearchButton,
    HeaderSection,
    HeaderTitle
} from "./style";

/* ===== TIPAGENS ===== */
interface UserData {
    avatar_url: string;
    name: string;
    login: string;
    bio: string;
    public_repos: number;
    followers: number;
    following: number;
}

interface UserRepositories {
    id: number;
    name: string;
    description: string;
    html_url: string;
    language: string;
    stargazers_count: number;
    forks: number;
}


interface Contact {
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


export function Header() {
    const reposContext = useContext(RepositoriesContext);
    const [searchValue, setSearchValue] = useState('');


    // Bucando dados do usuário digitado na API do Github (de forma assincrona)
    async function getUserData() {
        try {
            /* ===== Pegando dados da API ===== */
            const userData = await api.get<UserData>(`/${searchValue}`);
            const userRespositories = await api.get<UserRepositories[]>(`/${searchValue}/repos`);

            const followersData: FollowersData[] = await getUserContactData(searchValue, 'followers');

            /* ===== Salvando dados no Context ===== */
            reposContext.setUserData(userData.data);
            reposContext.setUserRepositories(userRespositories.data);
            reposContext.setFollowersData(followersData);

            console.log(reposContext.followersData);

        } catch (error) {
            console.log(error);
        }
    }


    // Função Para pegar dados dos Seguindores e Seguindo
    async function getUserContactData(user: string, typeContact: string) {
        const followersLogin = (await api.get<Contact[]>(`/${user}/${typeContact}`)).data.map(follower => follower.login);

        const followersData = followersLogin.map(
            async (login) => (await api.get<FollowersData>(`/${login}`)).data

        );

        return followersData;
    }


    return (
        <HeaderSection>
            <HeaderTitle>Github Profile</HeaderTitle>
            <HeaderInputContainer>
                <HeaderInput
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
                <HeaderSearchButton
                    onClick={getUserData}
                >
                    <FiSearch />
                </HeaderSearchButton>
            </HeaderInputContainer>
        </HeaderSection>
    );
}