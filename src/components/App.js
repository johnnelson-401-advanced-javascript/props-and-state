import React, { Component } from 'react';
import ColorContainer from '../containers/ColorContainer';
import RandomColor from '../components/colors/RandomColor';

export default class App extends Component {

  render() {
    return (
      <>
        <ColorContainer />
        <RandomColor />
      </>
    );
  }
}
