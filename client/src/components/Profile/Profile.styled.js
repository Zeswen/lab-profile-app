import styled from "styled-components";

export const StyledForm = styled.div`
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: url("./images/oval-bg.png");
  background-size: cover;
  height: 75vh;
  width: 60vw;
  border-radius: 10px;
  padding: 2rem;
`;

export const FormWrapper = styled.div`
  text-align: start;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 50%;
  padding: 1rem 3rem;
`;

export const StyledH1 = styled.h1`
  margin: 0 0 3rem 0;
  font-size: 2.25rem;
  font-weight: 500;
  letter-spacing: 1px;
  color: #5b8565;
`;

export const StyledLabel = styled.label`
  font-size: 1.25rem;
  font-weight: 300;
  letter-spacing: 1px;
  color: rgba(0, 0, 0, 0.8);
`;

export const StyledKey = styled.h1`
  margin: 0.5rem 0 3rem 0;
  font-size: 1.75rem;
  font-weight: 500;
  letter-spacing: 1px;
  color: black;
`;

export const InfoWrapper = styled.div`
  text-align: start;
  height: 75%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 0 8rem;
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledImg = styled.img`
  margin: 0 0 1rem 0;
  border-radius: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
  font-weight: 400;
  letter-spacing: 1px;
  color: black;
`;

export const ButtonWrapper = styled.div`
  text-align: start;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const StyledP = styled.p`
  text-align: center;
  width: 75%;
  font-size: 1rem;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.7);
`;

export const StyledButton = styled.button`
  margin: 0.5rem;
  border: none;
  border-radius: 5px;
  color: rgba(0, 0, 0, 0.6);
  width: 15rem;
  height: 2rem;
  background: white;
  font-size: 1rem;
  font-weight: 200;
  transition: ease-out 0.1s;
  outline: none;

  &:hover {
    cursor: pointer;
    background: rgb(245, 245, 245);
    color: rgba(0, 0, 0, 0.8);
    transition: ease-in 0.15s;
  }

  &:active {
    background: rgb(235, 245, 235);
    color: rgba(0, 0, 0, 1);
    box-shadow: 0 0 1px black;
  }
`;
