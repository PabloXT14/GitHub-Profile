import { useNavigate } from "react-router-dom";
import { useGithub } from "../../contexts/GithubContext";
import { BackButton } from "../BackButton";
import { Container, FollowerContainer, ListOfFollowersContainer, Title } from "./styles";
import { BsGithub } from 'react-icons/bs';

export function FollowersContainer() {
    const githubContext = useGithub();
    const navigate = useNavigate();


    return (
        <>
            <Container>
                <Title>Seguidores de {githubContext.userData.name?.split(' ')[0]}</Title>
                <ListOfFollowersContainer>
                    {githubContext?.followersData.map(follower =>
                        <FollowerContainer key={follower.login}>
                            <img src={follower.avatar_url} alt="Perfil do seguidor" />
                            <h2>#{follower.login}</h2>
                            <button onClick={() => {
                                githubContext.getOtherUserDatas(follower.login)
                                navigate('/')
                            }
                            }>
                                <BsGithub />
                                Visitar Perfil
                            </button>
                        </FollowerContainer>
                    )}
                </ListOfFollowersContainer>
            </Container>
            <BackButton route="/" />
        </>

    );
}