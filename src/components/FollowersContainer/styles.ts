import styled from "styled-components";

export const Container = styled.section`
    width: 25rem;
    min-height: 18.75rem;

    background: var(--background-section);
    border-radius: 5px;
    border-bottom: 5px solid var(--color-primary);
    margin-top: 1rem;

    @media (max-width: 430px) {
        width: 100%;
    }

`;

export const Title = styled.h1`
    font-size: 1.25rem;
    font-weight: 700;
    margin-top: 0.6rem;
    color: var(--color-dark-500);
    width: 100%;
    text-align: center;
    height: 2rem;
    line-height: 2rem;
`;

export const ListOfFollowersContainer = styled.ul`
    width: 100%;
    height: 22rem;
    padding: 1rem;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        width: 6px;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 3px;
        background: var(--color-primary);
    }
`;


export const FollowerContainer = styled.li`
    width: 100%;
    background: var(--background-repos);
    box-shadow: 0 3px 0px rgba(0, 0, 0, .2);
    border-radius: 3px;
    padding: 0.7rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    & + li {
        margin-top: 1rem;
    }

    img {
        width: 8rem;
        height: 8rem;
        border-radius: 50%;
        border: 0.4rem solid var(--color-primary);
        padding: 0.2rem;
    }

    h2 {
        font-size: 1rem;
        width: 100%;
        color: var(--color-dark-500);
        text-align: center;
        margin-top: 1rem;
    }

    button {
        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 1rem;
        font-weight: 400;
        color: var(--color-light);
        background: var(--background-language);
        border: none;
        border-radius: 3px;
        box-shadow: 0 0 7px rgba(0, 0, 0, .2);

        width: 100%;
        min-height: 2rem;
        padding: 0.5rem;
        margin-top: 1rem;
        cursor: pointer;
        transition: transform .2s ease;

        &:hover {
            transform: translateY(-3px);
        }


        svg {
            margin-right: 0.5rem;
            font-size: 1.5rem;
            color: var(--color-light);
        }
    }
`;
