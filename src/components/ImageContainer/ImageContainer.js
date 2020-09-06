import React, { Component } from "react";
import {
  ButtonContainer,
  Generate,
  Container,
  ImageRowContainer,
  ImageRow,
  Image,
} from "./styles/ImageContainer";
import fetchImages from "../../helpers/FetchImages";

class ImageContainer extends Component {
  constructor(props) {
    super(props);

    this.keyCount = 0;
  }

  state = {
    imageLinks: [],
  };

  handleImages = () => {
    let urlList = fetchImages(this.props.state);
    this.createRows(urlList, this.props.state.size);
  };

  createRows = (state, size) => {
    let imageLinkRows = [];
    let componentArray = [];
    for (let i = 0; i < state.length; i++) {
      componentArray.push(state[i]);
      if (componentArray.length > size - 1) {
        imageLinkRows.push(componentArray);
        componentArray = [];
      }
    }
    this.setState({
      imageLinks: imageLinkRows,
    });
    return imageLinkRows;
  };

  getKey = () => {
    return this.keyCount++;
  };

  render() {
    return (
      <>
        <ButtonContainer>
          <Generate onClick={this.handleImages}>Generate Grid</Generate>
        </ButtonContainer>
        <Container>
          <ImageRowContainer>
            {this.state.imageLinks &&
              this.state.imageLinks.map((row) => (
                <ImageRow key={this.getKey()}>
                  {row.map((imageLink) => (
                    <Image
                      key={this.getKey()}
                      grayscale={this.props.state.grayscale}
                      src={imageLink}
                      alt="Dynamically Populated Grid Image"
                    ></Image>
                  ))}
                </ImageRow>
              ))}
          </ImageRowContainer>
        </Container>
      </>
    );
  }
}

export default ImageContainer;
