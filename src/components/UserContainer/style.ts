import styled from "styled-components";

export const Section = styled.section`
    width: 25rem;
    height: 18.75rem;

    background: var(--lighter-background);
    border-radius: 5px;
    border-bottom: 5px solid var(--theme-color);
    margin-top: 1rem;

    @media (max-width: 400px) {
        width: 100%;
    }
`;