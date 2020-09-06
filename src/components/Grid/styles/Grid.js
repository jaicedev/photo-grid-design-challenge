import styled from "styled-components";

export const GridContainer = styled.div`
  height: 270px;
  display: flex;
  flex-direction: column;
  width: auto;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1rem;
  justify-content: center;
  align-items: center;
`;

export const GridRow = styled.div`
  width: 270px;
  height: 50px;
  display: flex;
  flex-direction: row;
  margin-top: 5px;
`;

export const GridSquare = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${(props) => (props.active ? "#66bfbf" : "#8d93ab")};
  margin-right: 5px;

  &:hover {
    transition: 100ms ease-in;
    cursor: ${(props) => (props.selector ? "pointer" : "default")};
  }

  p {
    text-align: center;
    align-items: center;
    color: #056674;
    font-weight: bold;
  }
`;
