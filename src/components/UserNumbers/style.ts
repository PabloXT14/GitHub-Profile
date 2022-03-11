import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 5rem;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const NumberContainer = styled.div`
    flex: 1;
    height: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
        font-size: 1.25rem;
        text-align: center;
        color: var(--text-dark-500);
    }

    h3 {
        font-size: 0.75rem;
        text-align: center;
        color: var(--text-dark-400);
    }

    &:hover {
        cursor: pointer;
        background: var(--theme-color);
        transition: .4s ease;
        border-radius: 0.25rem;

        h2, h3 {
            color: var(--theme-color-2);
        }
    }
`;