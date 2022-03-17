import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 6.25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Name = styled.h1`
    width: 100%;
    text-align: center;
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--color-dark-500);
`;

export const Username = styled.h2`
    width: 100%;
    text-align: center;
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--color-dark-400);
`;

export const Description = styled.p`
    width: 18.75rem;
    height: 1.87rem;
    margin: 0.62rem 0;
    font-size : 0.8rem;
    text-align: center;
    color: var(--color-dark-500);
    line-height: 1.3;
    overflow: hidden;

    @media (max-width: 430px) {
        width: 15.62rem;
    }
`;