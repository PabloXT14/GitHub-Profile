import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { useGithub } from '../../contexts/GithubContext';
import {
    HeaderInput,
    HeaderInputContainer,
    HeaderSearchButton,
    HeaderSection,
    HeaderTitle
} from "./styles";

/* ===== TIPAGENS ===== */




export function Header() {
    const { getUserData, currentUser, setCurrentUser } = useGithub();

    return (
        <HeaderSection>
            <HeaderTitle>Github Profile</HeaderTitle>
            <HeaderInputContainer>
                <HeaderInput
                    value={currentUser}
                    onChange={(e) => setCurrentUser(e.target.value)}
                />
                <HeaderSearchButton
                    onClick={() => getUserData(currentUser)}
                >
                    <FiSearch />
                </HeaderSearchButton>
            </HeaderInputContainer>
        </HeaderSection>
    );
}