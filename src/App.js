import React, { PureComponent } from 'react';
import MyCalculator from './components/calculator';

class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <MyCalculator />
      </div>
    );
  }
}

export default App;
