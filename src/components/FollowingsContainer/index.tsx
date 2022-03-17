import { useNavigate } from "react-router-dom";
import { useGithub } from "../../contexts/GithubContext";
import { BackButton } from "../BackButton";
import { Container, FollowingContainer, ListOfFollowingsContainer, Title } from "./styles";
import { BsGithub } from 'react-icons/bs';

export function FollowingsContainer() {
    const githubContext = useGithub();
    const navigate = useNavigate();

    return (
        <>
            <Container>
                <Title>Pessoas que {githubContext.userData.name?.split(' ')[0]} segue</Title>
                <ListOfFollowingsContainer>
                    {githubContext?.followingsData.map(following =>
                        <FollowingContainer key={following.login}>
                            <img src={following.avatar_url} alt="Perfil do seguindo" />
                            <h2>#{following.login}</h2>
                            <button onClick={() => {
                                githubContext.getOtherUserDatas(following.login)
                                navigate('/')
                            }}>
                                <BsGithub />
                                Visitar Perfil
                            </button>
                        </FollowingContainer>
                    )}
                </ListOfFollowingsContainer>
            </Container>
            <BackButton route="/" />
        </>
    );
}