import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createBrowserHistory } from 'history';
import { Router, Redirect, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';


const history = createBrowserHistory();
const RootComponent = () => <Redirect to='/login' />;

class App extends Component {
  render() {
    return (
        <Router history={ history }>
          <div className='wrapper'>
              <div className="App">
                  <header className="App-header">
                      <img src={logo} className="App-logo" alt="logo" />
                      <p>
                          Edit <code>src/App.js</code> and save to reload.
                      </p>
                      <a
                          className="App-link"
                          href="https://reactjs.org"
                          target="_blank"
                          rel="noopener noreferrer"
                      >
                          Learn React
                      </a>
                  </header>
              </div>
            <Switch>
                <Route exact path='/' />
                <Route exact path='/login'/>
                <Route component={ RootComponent } />
            </Switch>
          </div>
        </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loader.loading
  }
};

export default connect(mapStateToProps)(App);
