import {
    Container,
    Name,
    Username,
    Description

} from './style';

/* ===== TIPAGENS ===== */
interface UserDetailsProps {
    name: string;
    username: string;
    bio: string;
}

export function UserDetails({ name, username, bio }: UserDetailsProps) {
    return (
        <Container>
            <Name>{name}</Name>
            <Username>{username}</Username>
            <Description>{bio ? bio : 'Without description'}</Description>
        </Container>
    );
}