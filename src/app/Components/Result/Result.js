import React, { Component } from 'react';
import './Result.css';

export class Result extends Component {
    render() {
        return <div className="Result">{this.props.message}</div>
    }
}

