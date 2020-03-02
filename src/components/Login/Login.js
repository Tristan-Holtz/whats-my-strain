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
    this.setState({ name: event.target.value });
  };

  loginUser = () => {
    this.props.setUser(this.state.name);
  };

  render() {
    return (
      <section className="form-container">
        <form
          className="login-form"
          onSubmit={async e => await this.handleSubmit(e)}
        >
          <h1 className="login-title">What's My Strain?</h1>
          <p className="error">{this.state.nameError}</p>
          <label htmlFor="login-name">Name</label>
          <input
            onChange={this.handleChange}
            name="login-name"
            placeholder="Name"
          ></input>
          <Link className="login-link" onClick={this.loginUser} to="/">
            Login
          </Link>
        </form>
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setUser: name => {
    dispatch(setUser(name));
  }
});

export default connect(null, mapDispatchToProps)(Login);
