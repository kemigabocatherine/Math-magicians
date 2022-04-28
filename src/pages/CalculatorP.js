import React from 'react';
import MyCalculator from '../components/calculator';
import './Style.css';

const CalculatorPage = () => (
  <div className="claculator">
    <div className="calculator-title">
      <h2>Let`s do some math!</h2>
    </div>
    <div>
      <MyCalculator />
    </div>
  </div>
);

export default CalculatorPage;
