import React, { Component } from 'react';
import { Button, TextField } from '@material-ui/core';
import { connect } from 'react-redux';
import './loginPage.css';
import { login } from '../../services/sessions';

class LoginPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      email: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    this.setState({ [target.name]: target.value })
  }

  handleLogin = (e) => {
    e.preventDefault();
    const {email, password} = this.state;
    login({email, password})
      .then(res => {
        const { history } = this.props;
        history.push('/')
      })
      .catch(err => {
        console.warn(err)
      })
  };

  render(){
    return(
      <div className="login-page">
        <div>
          <h1 className="login-header">ChatViks</h1>
          <form onSubmit={this.handleLogin} className="login-form">
            <TextField label="Email address" fullWidth={true}
                       name='email'
                       onChange={this.handleChange} />
            <TextField label="Password" fullWidth={true} type="password"
                       name='password'
                       onChange={this.handleChange} />
            <br/><br/>
            <Button type="submit" color='primary' fullWidth={true} variant='contained' >
              LOGIN
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
})

export default connect(mapStateToProps)(LoginPage)
