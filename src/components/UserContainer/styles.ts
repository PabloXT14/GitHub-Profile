import styled from "styled-components";

export const Section = styled.section`
    width: 25rem;
    min-height: 18.75rem;

    position: relative;

    background: var(--background-section);
    border-radius: 5px;
    border-bottom: 5px solid var(--color-primary);
    margin-top: 1rem;

    @media (max-width: 400px) {
        width: 100%;
    }
`;