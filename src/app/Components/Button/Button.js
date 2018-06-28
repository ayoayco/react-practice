import React, { Component } from 'react';
import './Button.css';

export class Button extends Component {
  handleClick = () => {
      if (this.props.text !== '=') {
        this.props.clickCallback(this.props.text)
      } else {
        this.props.clickCallback();
      }
  }

  render() {
    return (
        <button className="Button" onClick={this.handleClick}>
            {this.props.text}
        </button>
    );
  }

}
