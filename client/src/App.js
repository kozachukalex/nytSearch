import React, { Component } from 'react';
import './App.css';
import API from './utils/API'
// import Header from "./components/header"
import Search from "./components/search"
import Results from "./components/results"
import Saved from "./components/saved"

class App extends Component {

  state = {
    userSearched: false,
    currentArticles: []
  }

  handleArticles = (articles) => {
    this.setState({ currentArticles: articles })
  }


  componentDidMount(){
    API.getArticles()
    .then(res=> this.setState({ currentArticles: res.data}))
    .catch(err=> console.log(err))
  }

  render() {
    return (
      <div className="App">
        {/* <Header /> */}
        <Search handleArticles={this.handleArticles} />
        <Results currentArticles={this.state.currentArticles}
        />
        <Saved />
      </div>
    );
  }
}

export default App;
