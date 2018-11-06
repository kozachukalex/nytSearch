import React, { Component } from 'react';
import './App.css';
// import Header from "./components/header"
import Search from "./components/search"
import Results from "./components/results"
import Saved from "./components/saved"

class App extends Component {
  state = {
    userSearched : false,
    currentArticles: []
  }

  handleArticles(articles){
    this.setState({currentArticles: articles})
  }

  render() {
    return (
      <div className="App">
      {/* <Header /> */}
      <Search  handleArticles={this.handleArticles}/>
      {this.state.userSearched ? (
        <Results currentArticles={this.state.currentArticles}/>
      ) : (
        <div>Search to see your results</div>
      )}
      <Saved />
      </div>
    );
  }
}

export default App;
