import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import PropositionSelect from './components/PropositionSelect'
import PropositionData from './components/PropositionData'
// import JupViewer from './JupViewer'

// code structure from https://www.youtube.com/watch?v=evCLdcoy4Mg

class App extends Component{
  state = {
    selectedState: "null"
  }

  changeState = (e) => {
    this.setState({
      selectedState: e.target.value
    })
  }

  render() {
    return (
      <div class="App">
        <h1>What's on my ballot?</h1>
        <a href='click for a Jupyter notebook!'></a>
        <PropositionSelect changeState={this.state.changeState}/>
        <PropositionData />
      </div>
    );
  }
}

export default App;
