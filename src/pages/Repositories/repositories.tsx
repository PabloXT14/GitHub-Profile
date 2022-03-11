import { useContext } from "react";
import { MainContainer } from "../../components/MainContainer";
import { ReposContainer } from "../../components/ReposContainer";
import { RepositoriesContext } from "../../contexts/RepositoriesContext";


export function Repositories() {
    const reposContext = useContext(RepositoriesContext);

    return (
        <MainContainer>
            <ReposContainer
                name={reposContext.userData?.name}
                repositories={reposContext.userRepositories}
            />
        </MainContainer>
    );
}