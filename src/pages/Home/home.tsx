import { useContext } from "react";
import { Header } from "../../components/Header";
import { MainContainer } from "../../components/MainContainer";
import { UserContainer } from "../../components/UserContainer";
import { UserDetails } from "../../components/UserDetails";
import { UserNumbers } from "../../components/UserNumbers";
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
            <Header />
            <UserContainer>
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
            </UserContainer>
        </MainContainer>
    );
}