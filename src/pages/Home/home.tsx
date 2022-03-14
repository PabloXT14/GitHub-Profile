import { Header } from "../../components/Header";
import { MainContainer } from "../../components/MainContainer";
import { MessageNotification } from "../../components/MessageNotification";
import { UserContainer } from "../../components/UserContainer";
import { UserDetails } from "../../components/UserDetails";
import { UserNumbers } from "../../components/UserNumbers";
import { UserPicture } from "../../components/UserPicture";
import { useGithub } from "../../contexts/GithubContext";


export function Home() {
    const githubContext = useGithub();

    return (
        <MainContainer>
            <Header />
            <UserContainer>
                {githubContext.userData?.name ?
                    <>
                        <UserPicture
                            imageUrl={githubContext.userData?.avatar_url}
                            alternativeText={githubContext.userData?.login}
                        />
                        <UserDetails
                            name={githubContext.userData?.name}
                            login={githubContext.userData?.login}
                            bio={githubContext.userData?.bio}
                        />
                        <UserNumbers
                            public_repos={githubContext.userData?.public_repos}
                            followers={githubContext.userData?.followers}
                            following={githubContext.userData?.following}
                        />
                    </>
                    : <MessageNotification
                        message="Digite o seu nome de usuário do GitHub para receber as informações do seu perfil"
                    />}
            </UserContainer>
        </MainContainer>
    );
}