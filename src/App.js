/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import MyCalculator from './components/calculator';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MyCalculator />
      </div>
    );
  }
}

export default App;
