import React, { Component } from 'react';
import BasicExample  from './components/BasicExample';
import AppWrapper  from './AppWrapper';

class App extends Component {
  render() {
    return (
        <AppWrapper>
        <BasicExample />
        </AppWrapper>
    );
  }
}

export default App;
