import React, { Component } from 'react';
import ColorContainer from '../containers/ColorContainer';


export default class App extends Component {
  state = {
    backgroundColor: 'black'
  };

  selectColor = backgroundColor => {
    this.setState({ backgroundColor });
  }

  render() {
    
    return (
      <ColorContainer />
    );
  }
}
