import React from "react";
import {
  Container,
  SlideInput,
  ValueDisplay,
  ValueContainer,
} from "./styles/Slider";
import { InputLabel } from "../styles/UserInput";

class Slider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
    };
  }

  changeHandler = (e) => {
    this.props.function(e);
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    return (
      <Container>
        <InputLabel>{this.props.label}</InputLabel>
        <SlideInput
          type="range"
          min={0}
          max={this.props.max}
          value={this.state.value}
          onChange={this.changeHandler}
        />
        <ValueContainer>
          <ValueDisplay left>{this.props.min}</ValueDisplay>
          <ValueDisplay middle>{this.state.value}</ValueDisplay>
          <ValueDisplay>{this.props.max}</ValueDisplay>
        </ValueContainer>
      </Container>
    );
  }
}

export default Slider;
