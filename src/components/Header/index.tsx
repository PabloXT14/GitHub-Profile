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


export function Header() {
    const reposContext = useContext(RepositoriesContext);
    const [searchValue, setSearchValue] = useState('');


    // Bucando dados do usuário digitado na API do Github (de forma assincrona)
    async function getUserData() {
        try {
            const userData = await api.get<UserData>(`/${searchValue}`);
            const userRespositories = await api.get<UserRepositories[]>(`/${searchValue}/repos`);

            reposContext.setUserData(userData.data);
            reposContext.setUserRepositories(userRespositories.data);

        } catch (error) {
            console.log(error);
        }
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