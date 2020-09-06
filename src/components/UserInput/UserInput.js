import React from "react";
import { GenerationForm, Grayscale, ImageBlur } from "./styles/UserInput";
import Size from "./Size";
import Slider from "./Slider/";

class UserInput extends React.Component {
  render() {
    return (
      <GenerationForm>
        <Size function={this.props.onDimensionChange} label="Grid Dimension" />
        <Grayscale>
          <Slider
            min="0"
            max="100"
            label="Grayscale"
            name="grayscale"
            function={this.props.onGrayscaleChange}
          />
        </Grayscale>
        <ImageBlur>
          <Slider
            min="0"
            max="10"
            label="Blur"
            name="blur"
            function={this.props.onBlurChange}
          />
        </ImageBlur>
      </GenerationForm>
    );
  }
}

export default UserInput;
