import React, { Component } from 'react';

export default class RandomColor extends Component {
  state = {
    randomColor: 'red'
  };

  getRandomColor = () => {
    var color = '#';
    const letters = '0123456789ABCDEF';
    for(let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    
    this.setState({ randomColor: color });
  } 

  componentDidMount() {
    setInterval(() => {
      this.getRandomColor();
    }, 1000);
  }

  render() {
    return (
      <>
        <div style={{
          backgroundColor: this.state.randomColor,
          width: '100px',
          height: '100px'
        }}></div>
      </>
    );
  }
}
