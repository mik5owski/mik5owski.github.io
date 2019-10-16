import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import Nav from "./components/Nav/Nav"
import Home from "./components/Home/Home"
import Projects from './components/Projects/Projects'
import Contact from "./components/Contact/Contact"


class App extends Component {
  
  render() {
    return (
      <div className="app-wrapper">
        <div className="App">
          <div className="header">
            <Nav />
          </div>
          <div className="content">
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/About" component={Home}></Route>
            <Route exact path="/Projects" component={Projects}></Route>
          </div>
          <div className="footer">
            <Contact />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
