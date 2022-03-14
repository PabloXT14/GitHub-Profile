import { ReactNode } from "react";
import { Section } from "./styles";

interface UserContainerProps {
    children: ReactNode;
}

export function UserContainer({ children }: UserContainerProps) {
    return (
        <Section>
            {children}
        </Section>
    );
}