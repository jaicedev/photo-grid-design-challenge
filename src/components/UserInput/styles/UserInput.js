import styled from "styled-components";

export const GenerationForm = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin: 2rem auto;
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

export const InputLabel = styled.label`
  font-size: 1.5rem;
  text-align: center;
  margin: 1rem 0;
  color: ${(props) => props.theme.textColor};
`;

export const Grayscale = styled.div`
  width: 100%;
`;

export const ImageBlur = styled.div`
  width: 100%;
`;
