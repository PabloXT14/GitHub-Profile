import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 5rem;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.7rem;
`;

export const NumberContainer = styled.div`
    flex: 1;
    height: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background: var(--color-primary);
    border-radius: 0.25rem;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    transition: transform .3s ease;

    &:hover {
        
        transform: translateY(-7px);
    }

    h2 {
        font-size: 1.25rem;
        text-align: center;
    }

    h3 {
        font-size: 0.8rem;
        text-align: center;
    }

    h2, h3 {
        color: var(--color-light);
    }
    
`;