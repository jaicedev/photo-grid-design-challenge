import styled from "styled-components";

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Generate = styled.button`
  background-color: #66bfbf;
  color: white;
  font-size: 1.3rem;
  border-style: none;
  padding: 0.5rem;
  width: 20%;
  margin: 1rem 0;

  &:hover {
    background: #056674;
    cursor: pointer;
    box-shadow: 0 11px 17px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  @media screen and (max-width: 700px) {
    width: 50%;
  }
`;

export const Container = styled.div`
  width: 100%;
  background-color: #d6e0f0;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  flex-direction: column;
`;

export const ImageRowContainer = styled.ul`
  width: 85%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 100%;
  list-style-type: none;
  padding-left: 0;
`;
export const ImageRow = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-wrap: nowrap;
`;

export const Image = styled.img`
  flex: 1;
  max-width: 18%;
  min-width: 18%;
  margin: 1%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  filter: ${(props) => `grayscale(${props.grayscale}%)`};
`;
