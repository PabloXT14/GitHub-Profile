import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    min-height: 100vh;

    background: var(--page-background);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  
    @media (max-width: 400px) {
        padding: 0 0.5rem;
    }

`;