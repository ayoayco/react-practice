import React, { Component } from 'react';
import { Button } from '../Components/Button/Button';
import './Keypad.css';

export class Keypad extends Component {
    render() {
        return (
            <div className="Keypad">
                <Button text="1" clickCallback={this.props.updateResult} />
                <Button text="2" clickCallback={this.props.updateResult} />
                <Button text="3" clickCallback={this.props.updateResult} />
                <Button text="-" clickCallback={this.props.updateResult} />
                <Button text="4" clickCallback={this.props.updateResult} />
                <Button text="5" clickCallback={this.props.updateResult} />
                <Button text="6" clickCallback={this.props.updateResult} />
                <Button text="*" clickCallback={this.props.updateResult} />
                <Button text="7" clickCallback={this.props.updateResult} />
                <Button text="8" clickCallback={this.props.updateResult} />
                <Button text="9" clickCallback={this.props.updateResult} />
                <Button text="/" clickCallback={this.props.updateResult} />
                <Button text="." clickCallback={this.props.updateResult} />
                <Button text="0" clickCallback={this.props.updateResult} />
                <Button text="=" clickCallback={this.props.calculateExpression} />
                <Button text="+" clickCallback={this.props.updateResult} />
            </div>
        );
    }
}
