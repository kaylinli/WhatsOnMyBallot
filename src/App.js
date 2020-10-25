import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import PropositionData from './components/PropositionData'

// code structure from https://www.youtube.com/watch?v=evCLdcoy4Mg

class App extends Component{
  state = {
    selectedProposition: "null"
  }

  render() {
    return (
      <div class="App">
        <h1>What's on my ballot?</h1>
        <a href='click for a Jupyter notebook!'></a>
        <PropositionData />
      </div>
    );
  }
}

export default App;
