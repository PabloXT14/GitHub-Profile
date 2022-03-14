import { useNavigate } from 'react-router-dom';// API para direcionar para uma das rotas criadas 

import {
    Container,
    NumberContainer
} from './styles';


/* ===== TIPAGENS ===== */
interface UserNumbersProps {
    public_repos: number;
    followers: number;
    following: number;
}


export function UserNumbers({ public_repos, followers, following }: UserNumbersProps) {
    const navigate = useNavigate();

    // Função que recebe rota e envia usuario para esta rota através do click
    const handleRouteOnClick = (route: string) => navigate(route);

    return (
        <Container>
            <NumberContainer onClick={() => handleRouteOnClick('/repositories')}>
                <h2>{public_repos ? public_repos : 0}</h2>
                <h3>Repositórios</h3>
            </NumberContainer>

            <NumberContainer onClick={() => handleRouteOnClick('/followers')}>
                <h2>{followers ? followers : 0}</h2>
                <h3>Seguidores</h3>
            </NumberContainer>

            <NumberContainer>
                <h2>{following ? following : 0}</h2>
                <h3>Seguindo</h3>
            </NumberContainer>
        </Container>
    );
}