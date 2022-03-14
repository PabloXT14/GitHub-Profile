import styled from "styled-components";

export const Container = styled.section`
    width: 25rem;
    background: var(--lighter-background);
    border-radius: 5px;
    border-bottom: 10px solid var(--theme-color);
    margin-top: 1rem;

    @media (max-width: 430px) {
        width: 100%;
    }

`;

export const Title = styled.h1`
    font-size: 1.25rem;
    font-weight: 700;
    margin-top: 0.6rem;
    color: var(--text-dark-500);
    width: 100%;
    text-align: center;
    height: 2rem;
    line-height: 2rem;
`;

export const ListOfFollowersContainer = styled.ul`
    width: 100%;
    height: 22rem;
    padding: 0.6rem;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        width: 6px;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 3px;
        background: var(--theme-color);
    }
`;


export const FollowerContainer = styled.li`
    width: 100%;
    background: var(--repositorie-background);
    border-radius: 3px;
    padding: 0.6rem;

    & + li {
        margin-top: 0.6rem;
    }

    h2 {
        font-size: 1rem;
        width: 100%;
        color: var(--text-dark-500);
        display: flex;
        align-items: center;

        svg {
            color: var(--theme-color);
            margin-right: 1rem;
        }
    }

    p {
        font-size: 0.75rem;
        font-weight: 400;
        color: var(--text-dark-400);

        width: 100%;
        height: 2rem;

        overflow: hidden;
        /* white-space: nowrap;
        text-overflow: ellipsis; */
        line-height: 1.3;
        margin-top: 0.6rem;
    }
`;
