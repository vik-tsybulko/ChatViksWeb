import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { check } from "./services/sessions";
// import logo from './logo.svg';
import './App.css';

import LoginPage from './pages/login';



class App extends Component {

  componentWillMount() {
    const { history } = this.props;
    check()
      .catch(err => history.push('/login'))
  }

  render() {
    return (
        <div className='wrapper'>
          {
            <Switch>
              <Route exact path='/login' component={ LoginPage } />
              <Route exact path='/' component={() => <div>DASHBOARD</div>} />
            </Switch>
          }
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loader.loading
  }
};

export default withRouter(connect(mapStateToProps)(App));
