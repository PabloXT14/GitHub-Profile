import { useContext } from "react";
import { Header } from "../../components/Header";
import { MainContainer } from "../../components/MainContainer";
import { MessageNotification } from "../../components/MessageNotification";
import { UserContainer } from "../../components/UserContainer";
import { UserDetails } from "../../components/UserDetails";
import { UserNumbers } from "../../components/UserNumbers";
import { UserPicture } from "../../components/UserPicture";
import { RepositoriesContext } from "../../contexts/RepositoriesContext";

interface HeaderProps {
    username: string;
}


export function Home() {
    const reposContext = useContext(RepositoriesContext);

    return (
        <MainContainer>
            <Header />
            <UserContainer>
                {reposContext.userData?.name ?
                    <>
                        <UserPicture
                            imageUrl={reposContext.userData?.avatar_url}
                            alternativeText={reposContext.userData?.login}
                        />
                        <UserDetails
                            name={reposContext.userData?.name}
                            login={reposContext.userData?.login}
                            bio={reposContext.userData?.bio}
                        />
                        <UserNumbers
                            public_repos={reposContext.userData?.public_repos}
                            followers={reposContext.userData?.followers}
                            following={reposContext.userData?.following}
                        />
                    </>
                    : <MessageNotification
                        message="Digite o seu nome de usuário do GitHub para receber as informações do seu perfil"
                    />}
            </UserContainer>
        </MainContainer>
    );
}