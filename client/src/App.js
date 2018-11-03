import React, { Component } from 'react';
import './App.css';
import Header from "./components/header"
import Search from "./components/search"
import Results from "./components/results"
import Saved from "./components/saved"

class App extends Component {
  state = {
    userSearched : false,
  }
  render() {
    return (
      <div className="App">
      {/* <Header /> */}
      <Search />
      {this.state.userSearched ? (
        <Results />
      ) : (
        <div>Search to see your results</div>
      )}
      <Saved />
      </div>
    );
  }
}

export default App;
