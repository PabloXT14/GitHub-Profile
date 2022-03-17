import styled from 'styled-components';

export const Container = styled.div`
    margin: auto;
    padding: 1rem;

    width: 90%;
    text-align: center;
    
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    border: 2px dashed var(--color-primary);
    border-radius: 3px;

    color: var(--color-primary);
    font-weight: 500;

`;