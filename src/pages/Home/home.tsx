import { useContext } from "react";
import { Header } from "../../components/Header";
import { MainContainer } from "../../components/MainContainer";
import { UserContainer } from "../../components/UserContainer";
import { UserDetails } from "../../components/UserDetails";
import { UserPicture } from "../../components/UserPicture";
import { RepositoriesContext } from "../../contexts/RepositoriesContext";
import { useQuery } from "../../hooks/useQuery";

interface HeaderProps {
    username: string;
}


export function Home() {
    const reposContext = useContext(RepositoriesContext);
    const query = useQuery();


    return (
        <MainContainer>
            <Header username={query.get('username')} />
            <UserContainer>
                <UserPicture
                    imageUrl="https://avatars.githubusercontent.com/u/71723595?v=4" alternativeText="Perfil do Usuário"
                />
                <UserDetails name="Pablo Alan" username="#PabloXT14" bio="Um texto qualquer" />
            </UserContainer>
        </MainContainer>
    );
}