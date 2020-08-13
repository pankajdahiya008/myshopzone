import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Shirt from './components/Shirt';

import Home from './components/Home';
export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
            <Navbar />
          <Route path="/" exact component={Home} />
          <Route path="/Shirt" exact component={Shirt} />
        </div>
      </Router>
    );
  }
}