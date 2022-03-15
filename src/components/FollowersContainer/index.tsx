import { useGithub } from "../../contexts/GithubContext";
import { BackButton } from "../BackButton";
import { Container, FollowerContainer, ListOfFollowersContainer, Title } from "./styles";


export function FollowersContainer() {
    const githubContext = useGithub();

    return (
        <>
            <Container>
                <Title>Seguidores de {githubContext.userData.name?.split(' ')[0]}</Title>
                <ListOfFollowersContainer>
                    {githubContext?.followersData.map(follower =>
                        <FollowerContainer>
                            <img src={follower.avatar_url} alt="" />
                            <p>{follower.name}</p>
                            <p>{follower.login}</p>
                        </FollowerContainer>
                    )}
                </ListOfFollowersContainer>
            </Container>
            <BackButton route="/" />
        </>

    );
}