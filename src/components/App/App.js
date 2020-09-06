import React, { Component } from "react";
import Grid from "../Grid";
import Header from "../Header";
import UserInput from "../UserInput";
import ImageContainer from "../ImageContainer";
import { createGlobalStyle } from "styled-components";
import fetchImages from "../../helpers/FetchImages";

const GlobalStyle = createGlobalStyle`
    html,
    body {
        margin: 0;
        padding: 0;
        font-family: 'Lato', sans-serif;
        background-color: ${(props) => props.theme.bgColor};
    }
    *:focus {
      outline: none;
    }
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      size: 1,
      dimension: 1000,
      grayscale: 0,
      blur: 0,
      photos: [],
    };
  }

  onSizeChange = (value) => {
    this.setState({
      size: value,
    });
  };
  onDimesionChange = (e) => {
    this.setState({
      dimension: e.target.value,
    });
  };
  onGrayscaleChange = (e) => {
    this.setState({
      grayscale: e.target.value,
    });
  };
  onBlurChange = (e) => {
    this.setState({
      blur: e.target.value,
    });
  };

  render() {
    return (
      <>
        <GlobalStyle />
        <Header />
        <Grid label="Select Grid Layout" function={this.onSizeChange} />
        <UserInput
          onDimensionChange={this.onDimesionChange}
          onGrayscaleChange={this.onGrayscaleChange}
          onBlurChange={this.onBlurChange}
        />
        <ImageContainer function={fetchImages} state={this.state} />
      </>
    );
  }
}

export default App;
