import styled from "styled-components"

export const Section = styled.section`
    width: 25rem;
    min-height: 18.75rem;

    background: var(--background-section);
    border-radius: 5px;
    border-bottom: 10px solid var(--color-primary);
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

export const ListOfReposContainer = styled.ul`
    width: 100%;
    height: 22rem;
    padding: 0.6rem;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        width: 6px;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 3px;
        background: var(--color-primary);
    }
`;

export const Repo = styled.li`
    width: 100%;
    background: var(--background-repos);
    box-shadow: 0px 3px 0px rgba(0, 0, 0, .2);
    border-radius: 3px;
    padding: 0.6rem;

    & + li {
        margin-top: 0.6rem;
    }

    h2 {
        font-size: 1rem;
        width: 100%;
        color: var(--color-dark-500);
        display: flex;
        align-items: center;

        svg {
            color: var(--color-primary);
            margin-right: 1rem;
        }
    }

    p {
        font-size: 0.75rem;
        font-weight: 400;
        color: var(--color-text);

        width: 100%;
        height: 2rem;

        overflow: hidden;
        line-height: 1.3;
        margin-top: 0.6rem;
    }
`;

export const RepoDetails = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;

    .indices {
        display: flex;
        align-items: center;
        gap: 0.7rem;

        div {
            display: flex;
            align-items: center;
            gap: 0.1rem;

            &:hover {
                transition: .2s ease;
                transform: scale(1.05);
            }

            &.link {
                cursor: pointer;
            }

            svg {
                color: var(--color-primary);
            }
        }

        .link {
            background: var(--color-primary);
            color: var(--color-light);
            font-weight: 500;
            border-radius: 2px;

            padding: 0.2rem 0.5rem;

            svg {
                color: var(--color-light);
            }
        }
    }

    .language {
        background: var(--background-language);
        color: var(--color-light);
        font-weight: 500;
        border-radius: 2px;

        padding: 0.2rem 0.5rem;
    }
`;