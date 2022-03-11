import {
    Section,
    Title,
    ListOfReposContainer,
    Repo,
    RepoDetails
} from "./style";
import { FaFolder } from 'react-icons/fa';
import { AiOutlineStar, AiOutlineLink } from 'react-icons/ai';
import { BiGitRepoForked } from 'react-icons/bi';
import { Link } from "react-router-dom";

/* ===== TIPAGENS ===== */
interface ReposContainerProps {
    name: string;
    repositories: Repositorie[];
}

interface Repositorie {
    id: number;
    name: string;
    description: string;
    html_url: string;
    language: string;
    stargazers_count: number;
    forks: number;
}


export function ReposContainer({ name, repositories }: ReposContainerProps) {
    return (
        <>
            <Section>
                {/* Title para aparecer só o primeiro nome */}
                <Title>Repositórios de {name?.split(' ')[0]}</Title>
                <ListOfReposContainer>
                    {repositories.map(repositorie => (
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
                                <div className="language">
                                    {repositorie?.language}
                                </div>
                            </RepoDetails>
                        </Repo>
                    ))}
                </ListOfReposContainer>
            </Section>

            <Link to={"/"}>Back</Link>
        </>
    );
}