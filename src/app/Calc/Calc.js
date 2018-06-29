import React, { Component } from 'react';
import { Result } from '../Components/Result/Result';
import { Keypad } from './Keypad';
import './Calc.css';

export class Calc extends Component {
    state = {
        expression: "0"
    }

    updateResult = (string) => {
        const newState = this.state;
        if (this.state.expression === '0') {
            newState.expression = string;
        } else {
            newState.expression = this.state.expression + string;
        }
        this.setState(previousState => newState);
    }

    calculateExpression = () => {
        const operationsHash = this.state.expression.replace(/[0-9]+/g, '#').replace(/[(||.)]/g, '');
        const operationsArray = operationsHash.split('#').filter(n => n !== '');
        const numbersArray = this.state.expression.split(/[^0-9.]/g);

        let result = (numbersArray.length === 1) ? numbersArray[0] : 0;

        for (let i=0; i<numbersArray.length-1; i++) {
            let operand1 = parseInt(numbersArray[i], 10);
            const operand2 = parseInt(numbersArray[i+1], 10);

            if (result) {
                operand1 = result;
            }

            switch (operationsArray[i]){
                case '+':
                    result = operand1 + operand2; break;
                case '-':
                    result = operand1 - operand2; break;
                case '/':
                    result = operand1 / operand2; break;
                case '*':
                    result = operand1 * operand2; break;
                default:
                    result = operand1;
            }
        }

        this.setState(previousState => ({expression: '' + result}));
    }

    render () {
        return (
            <div className="Calc">
                <h1>Calculator</h1>
                <p>No MDAS rule implementation yet.</p>
                <Result message={this.state.expression} />
                <Keypad
                    expression={this.state.expression}
                    calculateExpression={this.calculateExpression}
                    updateResult={this.updateResult} />
            </div>
        );
    }
}
