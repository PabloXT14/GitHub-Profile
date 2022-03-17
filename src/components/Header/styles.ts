import styled from "styled-components";

export const HeaderSection = styled.header`
    width: 25rem;
    height: 8rem;
    
    padding: 0;

    background: var(--background-header);
    border-radius: 5px;
    display: flex;
    flex-direction: column;

    @media (max-width: 400px) {
        width: 100%;
    }
`;

export const HeaderTitle = styled.h1`
    margin: 0;
    padding: 1rem 0;
    color: var(--color-title);
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    width: 100%;
`;

export const HeaderInputContainer = styled.div`
    padding: 0.6rem 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const HeaderInput = styled.input`
    width: 12.5rem;
    height: 2rem;
    border-radius: 5px;
    border: none;
    padding: 0 1rem;
    color: var(--color-text);
    transition: all .4s ease;

    &:focus {
        outline: none;
        width: 14rem;
        transition: all .4s ease;
    }
`;

export const HeaderSearchButton = styled.button`
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    border: none;
    background: var(--color-primary);
    margin-left: 0.6rem;

    display: flex;
    align-items: center;
    justify-content: center;

    color: var(--color-light);
    font-size: 1rem;
    transition: all .3s ease;

    &:hover {
        transform: scale(1.05);
        transition: all .3s ease;
        cursor: pointer;
    }
`;

