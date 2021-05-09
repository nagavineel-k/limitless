import React from 'react';
import './App.css';
import Home from './Components/Home';
import Header from './Components/Shared/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './Components/Checkout';
import Login from './Components/Authentication/Login';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Checkout />
          </Route>

          <Route path="">
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>



  );
}

export default App;
