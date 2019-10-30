import React, { Component } from 'react';
import ColorDisplay from '../components/colors/ColorDisplay';
import ColorPicker from '../components/colors/ColorPicker';
import RandomColor from '../components/colors/RandomColor';

export default class ColorContainer extends Component {
  state = {
    backgroundColor: 'black'
  };

  selectColor = backgroundColor => {
    this.setState({ backgroundColor });
  }

  render() {
    const { backgroundColor } = this.state;
    const colors = ['red', 'green', 'yellow', 'blue', 'black'];

    return (
      <>
        <ColorDisplay backgroundColor={backgroundColor} />
        <ColorPicker
          selectColor={this.selectColor}
          colors={colors} />
        <RandomColor colors={colors}/>
      </>
    );

  }

}
