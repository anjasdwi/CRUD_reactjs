import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css'
import Header from './components/layout/Header'
import About from './components/pages/About'
import Home from './components/pages/Home'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Header/>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
        </div>
      </Router>
    );
  }
  
}

export default App;
