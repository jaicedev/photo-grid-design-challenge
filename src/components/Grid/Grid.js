import React, { Component } from "react";
import { GridContainer, GridRow, GridSquare } from "./styles/Grid";
import { InputLabel } from "../UserInput/styles/UserInput";

class Grid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      one: true,
      four: false,
      nine: false,
      sixteen: false,
      twentyfive: false,
    };
  }

  handleChange = (e) => {
    this.props.function(parseInt(e.target.getAttribute("value")));
    let itemstate = e.target.getAttribute("value");
    switch (itemstate && itemstate) {
      case "1":
        this.setState({
          one: true,
          four: false,
          nine: false,
          sixteen: false,
          twentyfive: false,
        });
        break;
      case "2":
        this.setState({
          one: true,
          four: true,
          nine: false,
          sixteen: false,
          twentyfive: false,
        });
        break;
      case "3":
        this.setState({
          one: true,
          four: true,
          nine: true,
          sixteen: false,
          twentyfive: false,
        });
        break;
      case "4":
        this.setState({
          one: true,
          four: true,
          nine: true,
          sixteen: true,
          twentyfive: false,
        });
        break;
      case "5":
        this.setState({
          one: true,
          four: true,
          nine: true,
          sixteen: true,
          twentyfive: true,
        });
        break;
      default:
        return "Default Case Submitted";
    }
  };

  render() {
    return (
      <GridContainer>
        <InputLabel>{this.props.label}</InputLabel>
        <GridRow>
          <GridSquare
            active={this.state.one}
            onClick={this.handleChange}
            value="1"
            default
            selector
          >
            <p value="1">1 x 1</p>
          </GridSquare>
          <GridSquare active={this.state.four} />
          <GridSquare active={this.state.nine} />
          <GridSquare active={this.state.sixteen} />
          <GridSquare active={this.state.twentyfive} />
        </GridRow>
        <GridRow>
          <GridSquare active={this.state.four} />
          <GridSquare
            active={this.state.four}
            onClick={this.handleChange}
            value="2"
            selector
          >
            <p value="2">2 x 2</p>
          </GridSquare>
          <GridSquare active={this.state.nine} />
          <GridSquare active={this.state.sixteen} />
          <GridSquare active={this.state.twentyfive} />
        </GridRow>
        <GridRow>
          <GridSquare active={this.state.nine} />
          <GridSquare active={this.state.nine} />
          <GridSquare
            active={this.state.nine}
            onClick={this.handleChange}
            value="3"
            selector
          >
            <p value="3">3 x 3</p>
          </GridSquare>
          <GridSquare active={this.state.sixteen} />
          <GridSquare active={this.state.twentyfive} />
        </GridRow>
        <GridRow>
          <GridSquare active={this.state.sixteen} />
          <GridSquare active={this.state.sixteen} />
          <GridSquare active={this.state.sixteen} />
          <GridSquare
            active={this.state.sixteen}
            onClick={this.handleChange}
            value="4"
            selector
          >
            <p value="4">4 x 4</p>
          </GridSquare>
          <GridSquare active={this.state.twentyfive} />
        </GridRow>
        <GridRow>
          <GridSquare active={this.state.twentyfive} />
          <GridSquare active={this.state.twentyfive} />
          <GridSquare active={this.state.twentyfive} />
          <GridSquare active={this.state.twentyfive} />
          <GridSquare
            active={this.state.twentyfive}
            onClick={this.handleChange}
            value="5"
            selector
          >
            <p value="5">5 x 5</p>
          </GridSquare>
        </GridRow>
      </GridContainer>
    );
  }
}

export default Grid;
