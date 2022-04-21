/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-unused-vars */
import React from 'react';
import './calculator.css';

export default class MyCalculator extends React.Component {
  render() {
    return (
      <div className="container">
        <form>
          <input type="text" value={0} />
        </form>

        <div className="digits">
          <button type="button">AC</button>
          <button type="button">+/&ndash;</button>
          <button type="button">%</button>
          <button type="button" className="operators">&divide;</button>
          <button type="button">7</button>
          <button type="button">8</button>
          <button type="button">9</button>
          <button type="button" className="operators">&times;</button>
          <button type="button">4</button>
          <button type="button">5</button>
          <button type="button">6</button>
          <button type="button" className="operators">&ndash;</button>
          <button type="button">1</button>
          <button type="button">2</button>
          <button type="button">3</button>
          <button type="button" className="operators">+</button>
          <button type="button" className="zero">0</button>
          <button type="button">.</button>
          <button type="button" className="operators">=</button>
        </div>
      </div>
    );
  }
}
