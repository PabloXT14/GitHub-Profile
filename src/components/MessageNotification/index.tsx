import { Container } from "./style";

/* ===== TIPAGENS ===== */
interface MessageNotificationProps {
    message: string;
}



export function MessageNotification({ message }: MessageNotificationProps) {
    return (
        <Container>
            {message}
        </Container>
    );
}