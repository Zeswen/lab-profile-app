import styled from 'styled-components';

export const HomeWrapper = styled.div`
    text-align: start;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 75%;
    width: 50%;
    padding: 2rem;
`;

export const StyledH1 = styled.h1`
    font-size: 2.25rem;
    font-weight: 500;
    letter-spacing: 1px;
    color: #5B8565;
`;

export const StyledP = styled.p`
    font-size: 1.75rem;
    font-weight: 300;
    color: rgba(0, 0, 0, 0.7);
`;

export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const StyledButton = styled.button`
    margin: 0.5rem;
    border: none;
    border-radius: 5px;
    color: rgba(0, 0, 0, 0.9);
    width: 15rem;
    height: 2.5rem;
    background: #B5E9BC;
    font-weight: 700;
    transition: ease-out 0.1s;
    outline: none;

    &:hover {
        cursor: pointer;
        background: rgb(161, 213, 168);
        transition: ease-in 0.15s;
    }

    &:active {
        background: rgb(141, 193, 148);
        box-shadow: 0 0 1px black;
    }
`;