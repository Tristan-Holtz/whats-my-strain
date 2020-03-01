import React, { Component } from 'react';
import './Login.scss';
import { connect } from 'react-redux';
import { setUser } from '../../actions';
import { Link } from 'react-router-dom';

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: ''
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  loginUser = () => {
    this.props.setUser(this.state.name);
  };

  render() {
    return (
      <form
        className="login-form"
        onSubmit={async e => await this.handleSubmit(e)}
      >
        <p className="error">{this.state.nameError}</p>
        <label htmlFor="login-email">Email</label>
        <input
          onChange={this.handleChange}
          name="name"
          placeholder="Name"
        ></input>
        <Link onClick={this.loginUser} to="/">
          Login
        </Link>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  setUser: user => {
    dispatch(setUser(user));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
