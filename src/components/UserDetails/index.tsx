import {
    Container,
    Name,
    Username,
    Description

} from './style';

/* ===== TIPAGENS ===== */
interface UserDetailsProps {
    name: string;
    login: string;
    bio: string;
}

export function UserDetails({ name, login, bio }: UserDetailsProps) {
    return (
        <Container>
            <Name>{name}</Name>
            <Username>{login}</Username>
            <Description>{bio ? bio : 'Without description'}</Description>
        </Container>
    );
}