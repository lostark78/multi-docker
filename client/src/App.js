import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';

class App extends Component {
  render() {
    return (
     <Router>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Fib Calulator</h2>
          <Link to="/">Home</Link>
          <Link to="/otherpage">Other Page"</Link>
        </div>
        <Route exact path="/" component={Fib} />
        <Route exact path="/otherpage" component={OtherPage} />
      </div>
     </Router>
    );
  }
}

export default App;
