import styled from 'styled-components';

export const Button = styled.button`
    background: var(--color-primary);
    width: 3rem;
    height: 3rem;
    margin: 1rem auto;

    border: none;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    transition: transform .2s ease;

    &:hover {
        transform: scale(1.07);
    }

    svg {
        color: var(--color-light);
        font-size: 1.5rem;
    }
`;