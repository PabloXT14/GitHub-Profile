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
interface HeaderProps {
    username: string | null;
}


export function Header({ username }: HeaderProps) {
    const reposContext = useContext(RepositoriesContext);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        (async function getUserData() {
            try {
                const userData = await api.get(`/${username}`);
                const respositories = await api.get(`/${username}/repos`);



            } catch (error) {
                console.log(error);
            }
        })()
    }, [username]);



    return (
        <HeaderSection>
            <HeaderTitle>Github Profile</HeaderTitle>
            <HeaderInputContainer>
                <HeaderInput />
                <HeaderSearchButton>
                    <FiSearch />
                </HeaderSearchButton>
            </HeaderInputContainer>
        </HeaderSection>
    );
}