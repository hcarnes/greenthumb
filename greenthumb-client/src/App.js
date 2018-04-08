import React, { Component } from 'react';
import Button from 'material-ui/Button';
import LocalFlorist from 'material-ui-icons/LocalFlorist';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Welcome to Greenthumb Gardens</h1>
        </header>
        <p>
          <Button><LocalFlorist />Hello world</Button>
        </p>
      </div>
    );
  }
}

export default App;
