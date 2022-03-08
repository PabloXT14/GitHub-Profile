import { ReactNode } from "react";
import { Section } from "./style";

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