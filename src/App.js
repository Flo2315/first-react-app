import React, { Component } from 'react';
import Header from './Header';
// import Homepage from './Homepage/Homepage';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
