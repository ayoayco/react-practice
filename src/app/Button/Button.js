import React, { Component } from 'react';
import './Button.css';

export class Button extends Component {
  handleClick = () => {
    this.props.clickCallback(this.props.incrementValue)
  }

  render() {
    return (
        <button className="Button" onClick={this.handleClick}>
        +{this.props.incrementValue}
        </button>
    );
  }

}
