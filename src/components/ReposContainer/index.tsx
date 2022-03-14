import {
    Section,
    Title,
    ListOfReposContainer,
    Repo,
    RepoDetails
} from "./styles";
import { FaFolder } from 'react-icons/fa';
import { AiOutlineStar, AiOutlineLink } from 'react-icons/ai';
import { BiGitRepoForked } from 'react-icons/bi';
import { BackButton } from "../BackButton";
import { useGithub } from "../../contexts/GithubContext";


export function ReposContainer() {
    const githubContext = useGithub();


    return (
        <>
            <Section>
                {/* Title para aparecer só o primeiro nome */}
                <Title>Repositórios de {githubContext.userData.name?.split(' ')[0]}</Title>
                <ListOfReposContainer>
                    {githubContext.userRepositories.map(repositorie => (
                        <Repo key={repositorie?.id}>
                            <h2>
                                <FaFolder />
                                {repositorie?.name}
                            </h2>
                            <p>{repositorie?.description || 'Without description'}</p>
                            <RepoDetails>
                                <div className="indices">
                                    <div className="stars">
                                        <AiOutlineStar />
                                        {repositorie?.stargazers_count}
                                    </div>
                                    <div className="forks">
                                        <BiGitRepoForked />
                                        {repositorie?.forks}
                                    </div>
                                    <div className="link"
                                        onClick={() => window.open(repositorie?.html_url)}
                                    >
                                        <AiOutlineLink />
                                        Link
                                    </div>
                                </div>
                                {repositorie.language ?
                                    <div className="language">
                                        {repositorie?.language}
                                    </div>
                                    : undefined
                                }

                            </RepoDetails>
                        </Repo>
                    ))}
                </ListOfReposContainer>
            </Section>

            <BackButton route="/" />
        </>
    );
}