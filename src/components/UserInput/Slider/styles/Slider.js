import styled from "styled-components";

const sliderWidth = "50%";

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const SlideInput = styled.input`
  width: ${sliderWidth};
  appearance: none;
  height: 10px;
  background-color: #66bfbf;
  border-radius: 10px;
  border: 1px solid #a3d2ca;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    background-color: #056674;
    border-radius: 100%;
    border: 1px solid #056674;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  }
`;

export const ValueContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: ${sliderWidth};
`;

export const ValueDisplay = styled.div`
  color: ${(props) => (props.middle ? "#056674" : "#66bfbf")};
  display: flex;
  width: 50%;
  font-size: 1rem;
  justify-content: ${(props) =>
    props.left
      ? "flex-start"
      : (props) => (props.middle ? "center" : "flex-end")};
`;
