import React from 'react';
import _ from 'lodash';

import './login.styles.scss';
import FormInput from '../shared/form-input/form-input.component';
import CustomBtn from '../shared/custom-button/custom-button.component';
import users from '../assets/user.json';

type LoginProps = {};

type LoginState = {
  email: string,
  password: string,
  isAuth: boolean,
};

class Login extends React.Component<LoginProps, LoginState> {
  state = {
    email: '',
    password: '',
    isAuth: false
  };
  
  handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const email = this.state.email;
    const pass = this.state.password;
    
    _.each(users, (user: { id: number, email: string, password: string }) => {
      if (user.email === email && user.password === pass) {
        this.setState((state) => {
          const result = {
            ...state,
            isAuth: true
          }
          return result;
        });
      }
    });
  };
  
  handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    const {name, value} = event.currentTarget;
    this.setState((state) => {
      return {
        email: name === 'email' ? value:state.email,
        password: name === 'password' ? value:state.password
      };
    });
  };
  
  render() {
    return (
        <div className="login">
          <h1>Login</h1>
          <form className="login-form" onSubmit={this.handleSubmit}>
            <FormInput handleChange={this.handleChange} label={'Email'} name="email" value={this.state.email}
                       attrType={'email'} required/>
            <FormInput handleChange={this.handleChange} label={'Password'} name="password" value={this.state.password}
                       attrType={'password'}/>
            <CustomBtn type="submit">Login</CustomBtn>
          </form>
        </div>
    );
  }
}

export default Login;