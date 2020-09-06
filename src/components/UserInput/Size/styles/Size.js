import styled from "styled-components";

export const SizeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SizeSelector = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const SizeInput = styled.input`
  width: 30%;
  height: 2rem;
  margin: 0 1rem;
  text-align: center;
  border: 0;
  border-bottom: 1px solid gray;
  background: transparent;

  &:focus {
    background: #dfe1e8;
    border-top: 1px solid gray;
  }

  @media screen and (min-width: 1300px) {
    width: 20%;
  }
`;
