import React, { PureComponent } from 'react';
import calculate from '../logic/calculator';
import '../logic/operate';
import Displayed from './display';
import Buttons from './button';
import './calculator.css';

export default class MyCalculator extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    const newContent = calculate(this.state, e.target.innerText);
    this.setState(newContent);
  };

  render() {
    const { next, total, operation } = this.state;
    return (
      <div className="container">
        <Displayed next={next} total={total} operation={operation} />

        <Buttons event={this.handleClick} />
      </div>
    );
  }
}
