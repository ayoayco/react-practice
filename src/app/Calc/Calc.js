import React, { Component } from 'react';
import { Result } from '../Components/Result/Result';
import { Keypad } from './Keypad';
import './Calc.css';

export class Calc extends Component {
    state = {
        expression: ""
    }

    updateResult = (string) => {
        const newState = this.state;
        newState.expression = this.state.expression + string;
        this.setState(previousState => newState);
    }

    calculateExpression = () => {
        const operationsHash = this.state.expression.replace(/[0-9]+/g, '#').replace(/[\(|\|\.)]/g, '');
        const operationsArray = operationsHash.split('#').filter(n => n !== '');
        const numbersArray = this.state.expression.split(/[^0-9\.]/g);
        const expressionArray = [];
        let i = 0;

        numbersArray.forEach(
            number => {
                expressionArray.push(number);
                if (i < operationsArray.length) {
                    expressionArray.push(operationsArray[i]);
                    i++;
                }
            }
        );

        let result = 0;

        for (let i=0; i<numbersArray.length-1; i++) {
            let operand1 = parseInt(numbersArray[i]);
            const operand2 = parseInt(numbersArray[i+1]);

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
            }
        }

        this.setState(previousState => ({expression: '' + result}));

        console.log(expressionArray);
    }

    render () {
        return (
            <div className="Calc">
                <h1>Calculator</h1>
                <Result message={this.state.expression} />
                <Keypad
                    expression={this.state.expression}
                    calculateExpression={this.calculateExpression}
                    updateResult={this.updateResult} />
            </div>
        );
    }
}
