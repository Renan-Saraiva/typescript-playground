import React, { Component } from 'react';
import './App.css';
import Contador from './Contador';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Contador contador={111}></Contador>
      </div>
    );
  }
}

export default App;
