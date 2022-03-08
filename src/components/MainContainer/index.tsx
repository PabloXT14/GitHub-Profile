import { ReactNode } from "react";
import { Container } from "./style";

interface MainContainerProps {
    children: ReactNode;
}


export function MainContainer({ children }: MainContainerProps) {
    return (
        <Container>
            {children}
        </Container>
    );
}